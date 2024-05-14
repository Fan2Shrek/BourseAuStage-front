import './list.scss'
import cn from '../../../../utils/classnames'

const List = ({collection = [], uniqueAttr = null, renderItem, className}) => {
    if (!uniqueAttr) {
        uniqueAttr = element => element.id
    }

    return <ul className={cn('list', className)}>
        {collection.map(element => <li key={uniqueAttr(element)} className='list__element'>{renderItem(element)}</li>)}
    </ul>
}

export default List;
