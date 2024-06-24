import { useEffect, useMemo } from 'react'

import './dataParameters.scss'
import Select from '../../atoms/Select'

const DataParameters = ({
    id,
    name,
    placeholder,
    label,
    parameters = [],
    setSelectedParameter,
    defaultParameter,
}) => {
    const [parametersNameMapping, parametersLabelMapping] = useMemo(() => {
        return [
            parameters.reduce((acc, parameter) => ({
                ...acc,
                [parameter.name]: {
                    value: parameter.label,
                    query: parameter.query,
                },
            }), {}),
            parameters.reduce((acc, parameter) => ({
                ...acc,
                [parameter.label]: parameter.query,
            }), {}),
        ]
    }, [parameters])

    useEffect(() => {
        if (defaultParameter && parametersNameMapping[defaultParameter]) {
            setSelectedParameter(parametersNameMapping[defaultParameter].query)
        }
    }, [parametersNameMapping, defaultParameter, setSelectedParameter])

    return <div className='dataParameters'>
        <p className='dataParameters__label'>{label}</p>
        <Select
            id={id}
            name={name}
            placeholder={placeholder}
            values={Object.keys(parametersLabelMapping)}
            defaultValue={parametersNameMapping[defaultParameter]?.value ?? ''}
            secondary
            onChange={({ target: { value } }) => setSelectedParameter(parametersLabelMapping[value])}
        />
    </div>
}

export default DataParameters
