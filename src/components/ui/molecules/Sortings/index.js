import { useEffect, useMemo } from 'react'

import './sortings.scss'
import Select from '../../atoms/Select'

const Sortings = ({
    id,
    name,
    placeholder,
    label,
    sortings = [],
    setSelectedSort,
    defaultSort,
}) => {
    const [sortingsNameMapping, sortingsLabelMapping] = useMemo(() => {
        return [
            sortings.reduce((acc, sort) => ({
                ...acc,
                [sort.name]: {
                    value: sort.label,
                    query: sort.query,
                },
            }), {}),
            sortings.reduce((acc, sort) => ({
                ...acc,
                [sort.label]: sort.query,
            }), {}),
        ]
    }, [sortings])

    useEffect(() => {
        if (defaultSort && sortingsNameMapping) {
            setSelectedSort(sortingsNameMapping[defaultSort].query)
        }
    }, [sortingsNameMapping, defaultSort])

    return <div className='sortings'>
        <p className='sortings__label'>{label}</p>
        <Select
            id={id}
            name={name}
            placeholder={placeholder}
            values={Object.keys(sortingsLabelMapping)}
            defaultValue={sortingsNameMapping[defaultSort].value}
            secondary
            onChange={label => setSelectedSort(sortingsLabelMapping[label])}
        />
    </div>
}

export default Sortings
