import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import './button.scss'
import cn from '../../../../utils/classnames'

const Button = ({
    label = 'Button',
    neutral = false,
    secondary = false,
    inverted = false,
    transparent = false,
    withoutBorder = false,
    dashedBorder = false,
    rightIcon = false,
    type,
    redirectTo,
    icon,
    onClick,
    className
}) => {
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        onClick && onClick()

        if (redirectTo) {
            navigate(redirectTo)
        }
    }, [onClick, redirectTo, navigate])
 
    return <button
        className={cn(
            'button',
            {
                neutral,
                secondary,
                inverted,
                transparent,
                withoutBorder,
                dashedBorder,
                withIcon: !!icon,
                rightIcon: !!icon && rightIcon,
            },
            className
        )}
        type={type}
        onClick={handleClick}
    >
        {!rightIcon && icon}
        <span>{label}</span>
        {rightIcon && icon}
    </button>
}

export default Button
