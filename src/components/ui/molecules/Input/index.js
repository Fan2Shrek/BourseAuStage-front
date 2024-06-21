import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiPaperclip } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import './input.scss'
import cn from '../../../../utils/classnames'
import tokens from '../../../../translations/tokens';
import Button from '../../atoms/Button'

const Input = ({
    type = 'text',
    label = null,
    required = false,
    defaultChecked = false,
    defaultValue = '',
    disabled = false,
    max = null,
    min = null,
    step = null,
    accept = null,
    withoutIcon = false,
    id,
    name,
    placeholder,
    onChange,
    className
}) => {
    const [isActive, setIsActive] = useState(defaultChecked)
    const [value, setValue] = useState(defaultValue)
    const [dynamicType, setDynamicType] = useState(type)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const target = useRef(null)
    const { t } = useTranslation()

    useEffect(() => {
        disabled && setIsActive(false)
    }, [disabled])

    const handleChange = useCallback((e) => {
        if (type === 'checkbox') {
            setIsActive(!isActive)
            onChange && onChange(!isActive)
        }

        if (type === 'file') {
            setValue(e.target.files[0])
            onChange && onChange(e)
        }

        if (['text', 'password', 'range'].includes(type)) {
            setValue(e.target.value)
            onChange && onChange(e)
        }
    }, [isActive, onChange, type])

    const handlePasswordVisibility = useCallback(() => {
        setDynamicType(passwordVisible ? 'password' : 'text')
        setPasswordVisible(!passwordVisible)
    }, [passwordVisible, setPasswordVisible, setDynamicType])

    const displayValue = useCallback(() => {
        if (type === 'checkbox') {
            return { checked: isActive }
        }

        if (type === 'file') {
            return {}
        }

        return { value }
    }, [type, isActive, value])

    return <div className={cn(
        'input',
        {
            classic: type === 'text',
            password: type === 'password',
            checkbox: type === 'checkbox',
            range: type === 'range',
            file: type === 'file',
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
        <div className='input__wrapper'>
            <input
                className='input__target'
                type={dynamicType}
                id={id}
                name={name}
                ref={target}
                placeholder={placeholder}
                {...displayValue()}
                {...(type === 'password' ? { autoComplete: 'false' } : {})}
                {...(type === 'range' ? { min, max, step } : {})}
                {...(type === 'file' ? { accept } : {})}
                disabled={disabled}
                onChange={handleChange}
            />
            {type === 'password' && <div className='input__eye' onClick={handlePasswordVisibility}>
                {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>}
        </div>
        {type === 'file' && <>
            <Button
                label={placeholder ?? ''}
                icon={!withoutIcon && <FiPaperclip />}
                inverted
                dashedBorder
                onClick={() => target.current?.click()}
                className='input__button'
            />
            <p className='input__infos'>{value ? value.name : t(tokens.input.file.infos)}</p>
        </>}
    </div >
}

export default Input
