import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from '@uidotdev/usehooks'

import './apiCollectionTable.scss'
import cn from '../../../../utils/classnames'
import apiClient from '../../../../api/ApiClient'
import tokens from '../../../../translations/tokens'
import Pagination from '../../atoms/Pagination'
import Loader from '../../atoms/Loader'
import DataParameters from '../DataParameters'
import Table from '../../atoms/Table'
import Select from '../../atoms/Select'

const buildQuery = (url, currentPage, itemsPerPage, permanentFilters, filter, sort) => {
    const permanentFiltersQuery = permanentFilters ? permanentFilters.join('') : ''

    return `${url}?page=${currentPage}&itemsPerPage=${itemsPerPage}${permanentFiltersQuery}${filter}${sort}`
}

const getTotalPageFromHydraView = hydraView => {
    if (!hydraView || !hydraView['hydra:last']) {
        return 1
    }

    return hydraView['hydra:last']?.split('page=')[1]?.split('&')[0] ?? 1
}

const ApiCollectionTable = ({
    defaultItemsPerPage = 10,
    url,
    foundLabel,
    itemsPerPageLabel,
    fields,
    filters,
    permanentFilters,
    itemsPerPageChoices,
    defaultFilter,
    className
}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0)
    const [collection, setCollection] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('')
    const [selectedItemsPerPage, setSelectedItemsPerPage] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    const [query, setQuery] = useState('')
    const [loader, setLoader] = useState(false)
    const debouncedQuery = useDebounce(query, 200)
    const { t } = useTranslation()

    useEffect(() => {
        setSelectedFilter(defaultFilter)
    }, [defaultFilter])

    useEffect(() => {
        setSelectedItemsPerPage(defaultItemsPerPage)
    }, [defaultItemsPerPage])

    useEffect(() => {
        setCurrentPage(1)
    }, [url, selectedItemsPerPage, selectedFilter, selectedSort])

    useEffect(() => {
        setQuery(buildQuery(url, currentPage, selectedItemsPerPage, permanentFilters, selectedFilter, selectedSort))
    }, [url, currentPage, selectedItemsPerPage, permanentFilters, selectedFilter, selectedSort])

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

    return <div className={cn('apiCollectionTable', className)}>
        <div className='apiCollectionTable__header'>
            <p className='apiCollectionTable__resultNumber'>{`${totalResult} ${foundLabel}`}</p>

            {loader && <Loader />}

            {filters && <DataParameters
                label={t(tokens.apiCollectionTable.filter.label)}
                parameters={filters}
                setSelectedParameter={setSelectedFilter}
                defaultParameter={defaultFilter}
            />}
        </div>

        {collection.length > 0 && <>
            <Table
                collection={collection}
                fields={fields}
                onSort={({ query }) => setSelectedSort(query)}
            />

            <div className='apiCollectionTable__footer'>
                <div className='apiCollectionTable__itemsPerPageSelector'>
                    <p>{t(tokens.apiCollectionTable.itemsPerPage.label)}</p>
                    {itemsPerPageChoices && <Select
                        values={itemsPerPageChoices}
                        defaultValue={defaultItemsPerPage}
                        secondary
                        onChange={({ target: { value } }) => setSelectedItemsPerPage(value)}
                    />}
                    <p>{itemsPerPageLabel}</p>
                </div>

                <Pagination
                    current={currentPage}
                    onNext={onNextPage}
                    onPrevious={onPreviousPage}
                    onChoice={onChoicePage}
                    maxPage={maxPage}
                />
            </div>
        </>}
    </div>
}

export default ApiCollectionTable;
