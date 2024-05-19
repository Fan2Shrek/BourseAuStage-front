import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './input.scss'
import cn from '../../../../utils/classnames'

const Input = ({
    type = 'input',
    label = null,
    required = false,
    defaultChecked = false,
    defaultValue = false,
    disabled = false,
    max = null,
    min = null,
    step = null,
    id,
    name,
    placeholder,
    onChange,
    className
}) => {
    const [isActive, setIsActive] = useState(defaultChecked)
    const [value, setValue] = useState(defaultValue)
    const { t } = useTranslation()

    useEffect(() => {
        disabled && setIsActive(false)
    }, [disabled])

    const handleChange = (e) => {
        if (type === 'checkbox') {
            setIsActive(!isActive)
            onChange && onChange(!isActive)
        }

        if (type === 'range') {
            setValue(e.target.value)
            onChange && onChange(e.target.value)
        }
    }

    return <div className={cn(
        'input',
        {
            classic: type === 'input',
            checkbox: type === 'checkbox',
            range: type === 'range',
            disabled,
        },
        className,
    )}>
        {label && <label
            htmlFor={id}
            className={'input__label'}
        >
            {type === 'range'
                ? t(label, { value })
                : label
            }
            {required && <span className='input__required'>*</span>}
        </label>}
        <input
            className={'input__target'}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            {...(type === 'checkbox'
                ? isActive
                    ? { checked: true }
                    : { checked: false }
                : { value }
            )}
            {...(type === 'range' ? { min, max, step } : {})}
            disabled={disabled}
            onChange={handleChange}
        />
    </div >
}

export default Input
