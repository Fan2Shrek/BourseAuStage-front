import './table.scss'
import cn from '../../../../utils/classnames'
import { useCallback, useState } from 'react'
import { ascSort, descSort } from '../../../../api/sortings'

const Table = ({ collection = [], fields = [], uniqueAttr = null, onSort, className }) => {
    const [currentSort, setCurrentSort] = useState([])

    const handleSort = useCallback(askedProperty => {
        const [property, sort] = currentSort

        if (property !== askedProperty) {
            setCurrentSort([askedProperty, 'asc'])
            onSort(ascSort({ property: askedProperty }))

            return
        }

        if (sort === 'asc') {
            setCurrentSort([property, 'desc'])
            onSort(descSort({ property }))
        } else {
            setCurrentSort([property, 'asc'])
            onSort(ascSort({ property }))
        }
    }, [currentSort, onSort])

    if (!uniqueAttr) {
        uniqueAttr = element => element.id
    }

    return <div className={cn('table', className)}>
        <table>
            <thead>
                <tr>
                    {fields.map(field => <th
                        key={field.property}
                        {...(field.sortable && {
                            onClick: () => handleSort(field.property),
                            className: 'sortable',
                        })}
                    >
                        {field.label}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {collection.map(element => <tr key={uniqueAttr(element)}>
                    {fields.map(field => <td key={field.property}>{field.renderField(element)}</td>)}
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default Table
