import './input.scss'
import cn from '../../../../utils/classnames'

const Input = ({
    type = 'input',
    label,
    id,
    placeholder,
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
