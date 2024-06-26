import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from '@uidotdev/usehooks'

import './apiCollectionList.scss'
import cn from '../../../../utils/classnames'
import apiClient from '../../../../api/ApiClient'
import tokens from '../../../../translations/tokens'
import List from '../../atoms/List'
import Pagination from '../../atoms/Pagination'
import Facets from '../Facets'
import DataParameters from '../DataParameters'
import FacetOptionEnum from '../../../../enum/FacetOptionEnum'
import Loader from '../../atoms/Loader'

const buildFacetsQuery = (facets, options, t) => {
    return (Object.entries(facets) ?? []).reduce((acc, [facet, values]) => {
        if (
            !values
            || values.length === 0
            || (options[facet] && options[facet].includes(FacetOptionEnum.ALL) && values.includes(t('facets.options.all')))
            || (options[facet] && options[facet].includes(FacetOptionEnum.RANGE))
        ) {
            return acc
        }

        if (options[facet] && options[facet].includes(FacetOptionEnum.ALL) && values.includes(t('facets.options.all'))) {
            return acc
        }

        if (options[facet] && (
            options[facet].includes(FacetOptionEnum.DURATION)
            || options[facet].includes(FacetOptionEnum.BETWEEN)
        )) {
            let baseQuery = ''

            if (options[facet].includes(FacetOptionEnum.DURATION)) {
                baseQuery = `&${FacetOptionEnum.DURATION}[${encodeURI(facet)}][bt]`
            } else if (options[facet].includes(FacetOptionEnum.BETWEEN)) {
                baseQuery = `&${FacetOptionEnum.BETWEEN}[${encodeURI(facet)}]`
            }

            return values.reduce((acc, value) => {
                if (Array.isArray(value)) {
                    return `${acc}${baseQuery}[]=${encodeURI(value[0])},${encodeURI(value[1])}`
                }

                if (value.startsWith('<')) {
                    return `${acc}${baseQuery}[lt]=${value.slice(1)}`
                }

                if (value.startsWith('>')) {
                    return `${acc}${baseQuery}[gt]=${value.slice(1)}`
                }

                return ''
            }, '')
        }

        return `${acc}${values.reduce((acc, value) => `${acc}&${encodeURI(facet)}[]=${encodeURI(value)}`, '')}`
    }, '')
}

const buildQuery = (url, currentPage, itemsPerPage, t, defaultFilters, sort = '', facets = {}, options = []) => {
    const defaultFiltersQuery = defaultFilters ? defaultFilters.join('') : ''
    const facetsQuery = buildFacetsQuery(facets, options, t)

    return `${url}?page=${currentPage}&itemsPerPage=${itemsPerPage}${defaultFiltersQuery}${sort}${facetsQuery}`
}

const getTotalPageFromHydraView = hydraView => {
    if (!hydraView || !hydraView['hydra:last']) {
        return 1
    }

    return hydraView['hydra:last']?.split('page=')[1]?.split('&')[0] ?? 1
}

const ApiCollectionList = ({
    uniqueAttr = null,
    withFacets = false,
    itemsPerPage = 10,
    url,
    foundLabel,
    defaultFilters,
    sortings,
    defaultSort,
    renderItem,
    className
}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0)
    const [collection, setCollection] = useState([])
    const [facets, setFacets] = useState({})
    const [defaultFacets, setDefaultFacets] = useState({})
    const [facetsOptions, setFacetsOptions] = useState([])
    const [selectedFacets, setSelectedFacets] = useState({})
    const [selectedSort, setSelectedSort] = useState('')
    const [query, setQuery] = useState('')
    const [loader, setLoader] = useState(false)
    const debouncedQuery = useDebounce(query, 200)
    const { t } = useTranslation()

    useEffect(() => {
        setSelectedFacets(defaultFacets)
    }, [defaultFacets])

    useEffect(() => {
        setCurrentPage(1)
    }, [url, itemsPerPage, selectedFacets, selectedSort])

    useEffect(() => {
        setQuery(buildQuery(url, currentPage, itemsPerPage, t, defaultFilters, selectedSort, selectedFacets, facetsOptions))
    }, [url, currentPage, itemsPerPage, t, defaultFilters, selectedSort, selectedFacets, facetsOptions])

    useEffect(() => {
        if (withFacets) {
            const defaultFiltersQuery = defaultFilters ? defaultFilters.join('') : ''
            apiClient.get(`${url}/facets?${defaultFiltersQuery.slice(1)}`)
                .then(data => {
                    setFacets(data.facets)
                    setDefaultFacets(data.defaultFacets)
                    setFacetsOptions(data.options)
                })
        } else {
            setFacets({})
            setDefaultFacets({})
            setFacetsOptions([])
        }
    }, [url, withFacets, defaultFilters])

    useEffect(() => {
        if (debouncedQuery) {
            setLoader(true)
            apiClient.get(debouncedQuery)
                .then(data => {
                    setLoader(false)
                    setTotalResult(data['hydra:totalItems'] ?? 0)
                    setMaxPage(data['hydra:view']
                        ? parseInt(getTotalPageFromHydraView(data['hydra:view']), 10)
                        : 1
                    )

                    setCollection(data['hydra:member'] ?? [])
                })
        }
    }, [debouncedQuery])

    const onNextPage = useCallback(() => {
        setCurrentPage(currentPage => currentPage + 1)
    }, [setCurrentPage])

    const onPreviousPage = useCallback(() => {
        setCurrentPage(currentPage => currentPage - 1)
    }, [setCurrentPage])

    const onChoicePage = useCallback(page => {
        setCurrentPage(parseInt(page, 10))
    }, [setCurrentPage])

    return <div className={cn('apiCollectionList', className)}>
        {withFacets && <Facets
            collectionTarget={url.split('/').reverse()[0]}
            facets={facets}
            defaultFacets={defaultFacets}
            options={facetsOptions}
            setSelectedFacets={setSelectedFacets}
        />}

        <div className={cn(
            'apiCollectionList__main',
            {
                withFacets,
            }
        )}>
            <div className='apiCollectionList__header'>
                <div>
                    <h2>{t(tokens.apiCollectionList.title)}</h2>
                    <p>{`${totalResult} ${foundLabel}`}</p>
                </div>

                {loader && <Loader />}

                {sortings && <DataParameters
                    label={t(tokens.apiCollectionList.sorting.label)}
                    parameters={sortings}
                    setSelectedParameter={setSelectedSort}
                    defaultParameter={defaultSort}
                />}
            </div>

            {collection.length > 0 && <>
                <List
                    collection={collection}
                    uniqueAttr={uniqueAttr}
                    renderItem={renderItem}
                />

                <Pagination
                    current={currentPage}
                    onNext={onNextPage}
                    onPrevious={onPreviousPage}
                    onChoice={onChoicePage}
                    maxPage={maxPage}
                />
            </>}
        </div>
    </div>
}

export default ApiCollectionList;
