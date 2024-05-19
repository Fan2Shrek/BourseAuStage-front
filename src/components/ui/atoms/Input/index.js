import { useEffect, useState } from 'react'

import './input.scss'
import cn from '../../../../utils/classnames'

const Input = ({
    type = 'input',
    required = false,
    defaultChecked = false,
    disabled = false,
    id,
    label,
    name,
    placeholder,
    onChange,
    className
}) => {
    const [isActive, setIsActive] = useState(defaultChecked)

    useEffect(() => {
        disabled && setIsActive(false)
    }, [disabled])

    const handleChange = () => {
        if (type === 'checkbox') {
            setIsActive(!isActive)
            onChange && onChange(!isActive)
        }
    }

    return <div className={cn(
        'input',
        {
            classic: type === 'input',
            checkbox: type === 'checkbox',
            disabled,
        },
        className,
    )}>
        {label && <label
            htmlFor={id}
            className={'input__label'}
        >
            {label}
            {required && <span className='input__required'>*</span>}
        </label>
        }
        <input
            className={'input__target'}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            {...(type === 'checkbox' && isActive ? { checked: true } : { checked: false })}
            disabled={disabled}
            onChange={handleChange}
        />
    </div >
}

export default Input
