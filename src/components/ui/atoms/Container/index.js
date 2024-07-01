import './container.scss'
import cn from '../../../../utils/classnames'

const Container = ({
    admin = false,
    inline = false,
    cornerTop = false,
    cornerBottom = false,
    children,
    className,
}) => {
    return <div className={cn(
        'container',
        {
            admin,
            inline,
            cornerTop,
            cornerBottom,
        },
        className
    )}>
        {children}
    </div>
}

export default Container
