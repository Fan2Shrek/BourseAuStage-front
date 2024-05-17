import './input.scss'
import cn from '../../../../utils/classnames'

const Input = ({
    type = 'input',
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
    />
}

export default Input
