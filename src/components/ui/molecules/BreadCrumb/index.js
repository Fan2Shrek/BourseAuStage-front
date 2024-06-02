import { Link } from "react-router-dom"

import './breadCrumb.scss'
import List from "../../atoms/List"
import cn from "../../../../utils/classnames"

const BreadCrumb = ({ data = {}, className }) => {
    return <List
        uniqueAttr={step => step.label}
        collection={data}
        renderItem={({ label, link }, index) => index < data.length - 1
            ? <p className='breadCrumb__item'><Link to={link}>{label}</Link> /</p>
            : <p className='breadCrumb__active'>{label}</p>
        }
        className={cn('breadCrumb', className)}
    />
}

export default BreadCrumb
