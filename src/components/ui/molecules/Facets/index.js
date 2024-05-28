import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import './facets.scss'
import List from "../../atoms/List"
import Facet from '../Facet'
import cn from "../../../../utils/classnames"
import FacetOptionEnum from '../../../../enum/FacetOptionEnum'

const Facets = ({
    collectionTarget,
    facets,
    defaultFacets,
    options,
    setSelectedFacets,
    className
}) => {
    const { t } = useTranslation()

    const selectFacet = useCallback((facet, value) => {
        setSelectedFacets(selectedFacets => ({
            ...selectedFacets,
            [facet]: [
                ...(selectedFacets[facet] ?? []),
                value
            ],
        }))
    }, [setSelectedFacets])

    const unselectFacet = useCallback((facet, value) => {
        setSelectedFacets(selectedFacets => ({
            ...selectedFacets,
            [facet]: selectedFacets[facet]?.filter(current => current !== value)
        }))
    }, [setSelectedFacets])

    return <div className={cn('facets', className)}>
        <List
            collection={Object.entries(facets ?? {})}
            uniqueAttr={([facet, _]) => facet}
            renderItem={([facet, values]) => <Facet
                collectionTarget={collectionTarget}
                property={facet}
                values={values}
                defaultValues={options[facet] && options[facet].includes(FacetOptionEnum.DEFAULT_ALL)
                    ? [t('facets.options.all')]
                    : defaultFacets[facet] ?? []
                }
                defaultDisabledValues={options[facet] && options[facet].includes(FacetOptionEnum.DEFAULT_ALL)
                    ? facets[facet]
                    : []
                }
                allValue={options[facet] && options[facet].includes(FacetOptionEnum.ALL)}
                andMore={options[facet] && options[facet].includes(FacetOptionEnum.BETWEEN_AND_MORE)}
                isRange={options[facet] && options[facet].includes(FacetOptionEnum.RANGE)}
                onSelect={selectFacet}
                onUnselect={unselectFacet}
            />}
        />
    </div>
}

export default Facets
