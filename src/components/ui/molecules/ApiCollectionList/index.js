import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from '@uidotdev/usehooks'

import './apiCollectionList.scss'
import cn from '../../../../utils/classnames'
import apiClient from '../../../../api/ApiClient'
import List from '../../atoms/List'
import Pagination from '../../atoms/Pagination'
import Facets from '../Facets'
import Sortings from '../Sortings'

const buildQuery = (url, currentPage, itemsPerPage, sort, facets = {}, options = {}) => {
    const query = `${url}?page=${currentPage}&itemsPerPage=${itemsPerPage}&exists[deletedAt]=false${sort}`

    const facetsQuery = (Object.entries(facets) ?? []).reduce((acc, [facet, values]) => {
        if (!values || values.length === 0) {
            return acc
        }

        if (options.all && values.includes(options.all)) {
            return acc
        }

        return `${acc}${values.reduce((acc, value) => `${acc}&${facet}[]=${value}`, '')}`
    }, '')

    return `${query}${facetsQuery}`
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
    const debouncedQuery = useDebounce(query, 500)
    const { t } = useTranslation()

    useEffect(() => {
        setCurrentPage(1)
    }, [url, itemsPerPage, selectedFacets, selectedSort])

    useEffect(() => {
        setQuery(buildQuery(url, currentPage, itemsPerPage, selectedSort, selectedFacets, { all: t('facets.options.all') }))
    }, [url, currentPage, itemsPerPage, defaultFacets, selectedFacets, selectedSort])

    useEffect(() => {
        if (withFacets) {
            apiClient.get(`${url}/facets`)
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
    }, [url, withFacets])

    useEffect(() => {
        apiClient.get(debouncedQuery)
            .then(data => {
                setTotalResult(data['hydra:totalItems'] ?? 0)
                setMaxPage(data['hydra:view']
                    ? parseInt(getTotalPageFromHydraView(data['hydra:view']), 10)
                    : 1
                )

                setCollection(data['hydra:member'] ?? [])
            })
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
                    <h2>Resultats</h2>
                    <p>{`${totalResult} ${foundLabel}`}</p>
                </div>

                <Sortings
                    sortings={sortings}
                    setSelectedSort={setSelectedSort}
                    defaultSort={defaultSort}
                />
            </div>

            <List
                collection={collection}
                uniqueAttr={uniqueAttr}
                renderItem={renderItem}
            />

            {collection.length > 0 && <Pagination
                current={currentPage}
                onNext={onNextPage}
                onPrevious={onPreviousPage}
                onChoice={onChoicePage}
                maxPage={maxPage}
            />}
        </div>
    </div>
}

export default ApiCollectionList;
