import './select.scss'
import cn from '../../../../utils/classnames'

const Select = ({
    type = 'select',
    label,
    id,
    name,
    value,
    placeholder,
    required = false,
    className
}) => {
    return <div className={cn(
        'select',
        {
            filter: type === 'search',
            text: type === 'text',
        },
        className,
    )}>
        {label && <label
            for={id}
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
            <option value="" disabled selected>{placeholder}</option>
            <option
                className={'select__option'}
                value={value}
            >
                {value}
            </option>
        </select>
    </div>
}

export default Select
