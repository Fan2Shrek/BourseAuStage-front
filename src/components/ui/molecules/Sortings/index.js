import {useEffect, useRef, useState} from 'react'

import './sortings.scss'
import addExtraProps from '../../../../utils/addExtraProps'
import cn from '../../../../utils/classnames'

const Sortings = ({
    sortings = [],
    setSelectedSort,
    defaultSort,
}) => {
    const defaultSortElement = useRef(null)
    const [activeSort, setActiveSort] = useState(defaultSort)

    useEffect(() => {
        defaultSortElement && defaultSortElement.current?.click()
    }, [defaultSortElement])

    return <div className="sortings">
        <p>Trier par :</p>
        <div className='select'>
            {sortings.map(sort => {
                return addExtraProps(
                    sort.key,
                    sort,
                    {
                        reference: defaultSort === sort.key ? defaultSortElement : null,
                        onClick: (sortQuery) => {
                            setActiveSort(sort.key)
                            setSelectedSort(sortQuery)
                        },
                        className: cn(
                            'select__element',
                            {
                                active: activeSort === sort.key
                            },
                        ),
                    }
                )
            })}
        </div>
    </div>
}

export default Sortings
