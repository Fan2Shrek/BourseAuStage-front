import './input.scss'
import cn from '../../../../utils/classnames'

const Input = ({
    type = 'input',
    label,
    id,
    placeholder,
    required = false,
    className
}) => {
    return <div className={cn(
        'input',
        {
            classic: type === 'input',
            checkbox: type === 'checkbox',
        },
        className,
    )}>
        {label && <label
            for={id}
            className={'input__label'}
        >
            {label}
            {required && <span className='input__required'>*</span>}
        </label>}
        <input
            className={'input__target'}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    </div>
}

export default Input
