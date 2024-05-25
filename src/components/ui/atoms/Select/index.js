import './select.scss'
import cn from '../../../../utils/classnames'

const Select = ({
    label,
    id,
    name,
    placeholder,
    secondary,
    values = [],
    defaultValue = false,
    required = false,
    className
}) => {
    return <div className={cn(
        'select',
        {
            secondary,
        },
        className,
    )}>
        {label && <label
            htmlFor={id}
            className={'select__label'}
        >
            {label}
            {required && <span className='select__required'>*</span>}
        </label>}

        <select
            className={'select__target'}
            type={type}
            id={id}
            name={name}
        >
            {placeholder && <option
                value=""
                disabled
                {...(defaultValue ? {} : { selected: true })}
            >
                {placeholder}
            </option>}

            {values.map((value, index) => <option
                key={index}
                className={'select__option'}
                value={value}
                {...(defaultValue === value ? { selected: true } : {})}
            >
                {value}
            </option>)}
        </select>
    </div>
}

export default Select
