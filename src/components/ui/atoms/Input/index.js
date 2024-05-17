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
        className
        )}>
        <label 
            for={id}
            className={cn(
                'input__label',
                {
                    classic: type === 'input',
                    checkbox: type === 'checkbox',
                },
            )}
        >
            {label}
        </label>
        <input
            className={cn(
                'input__target',
                {
                    classic: type === 'input',
                    checkbox: type === 'checkbox',
                },
            )}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    </div>
}

export default Input
