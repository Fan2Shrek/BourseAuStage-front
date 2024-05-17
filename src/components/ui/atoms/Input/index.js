import './input.scss'

const Input = ({
    type = 'input',
    className
}) => {

    return <input
        type={type}
        className={className}
    />
}

export default Input
