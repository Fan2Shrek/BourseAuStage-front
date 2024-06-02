import './iconBadge.scss'
import cn from '../../../../utils/classnames'

const IconBadge = ({ icon, className }) => {
    return <div className={cn('iconBadge', className)}>
        {icon}
    </div>
}

export default IconBadge
