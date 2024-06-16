import { useCallback, useState } from "react"
import { FaChevronDown } from "react-icons/fa"

import './select.scss'
import cn from '../../../../utils/classnames'

const Select = ({
    label,
    id,
    name,
    placeholder,
    secondary,
    third,
    values = [],
    defaultValue = '',
    required = false,
    onChange,
    className
}) => {
    const [currentValue, setValue] = useState(defaultValue)

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
        onChange && onChange(e)
    }, [setValue, onChange])

    return <div className={cn(
        'select',
        {
            secondary,
            third,
        },
        className,
    )}>
        {label && <label
            htmlFor={id}
            className='select__label'
        >
            {label}
            {required && <span className='select__required'>*</span>}
        </label>}

        <div className='select__wrapper'>
            <select
                id={id}
                name={name}
                className='select__target'
                value={currentValue}
                placeholder={placeholder}
                onChange={handleChange}
            >
                {placeholder && <option
                    value=''
                    disabled
                >
                    {placeholder}
                </option>}

                {values.map((value, index) => <option
                    key={index}
                    value={(typeof value === 'object' && value.value) || value}
                    className='select__option'
                    selected={currentValue === ((typeof value === 'object' ? value.value : value))}
                >
                    {(typeof value === 'object' && value.name) || value}
                </option>)}

            </select>
            <span className='select__chevron'>
                <FaChevronDown />
            </span>
        </div>
    </div >
}

export default Select
