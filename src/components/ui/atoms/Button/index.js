import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import './button.scss'
import cn from '../../../../utils/classnames'

const Button = ({
    label = null,
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
    const Content = useMemo(() => redirectTo ? Link : 'button', [redirectTo])

    return <Content
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
        {...(redirectTo ? { to: redirectTo } : { type })}
        onClick={onClick}
    >
        {!rightIcon && icon}
        {label && <span>{label}</span>}
        {rightIcon && icon}
    </Content>
}

export default Button
