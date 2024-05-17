import './input.scss'
import cn from '../../../../utils/classnames'

const Input = ({
    type = 'input',
    placeholder = '',
    className
}) => {
    return <input
        className={cn(
            'input',
            {
                classic: type === 'input',
                checkbox: type === 'checkbox',
            },
            className
        )}
        type={type}
        placeholder={placeholder}
    />
}

export default Input
