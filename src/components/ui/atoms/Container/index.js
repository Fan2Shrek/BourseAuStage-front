import './container.scss'
import cn from '../../../../utils/classnames'

const Container = ({
    inline = false,
    cornerTop = false,
    cornerBottom = false,
    children,
    className,
}) => {
    return <div className={cn(
        'container',
        {
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
