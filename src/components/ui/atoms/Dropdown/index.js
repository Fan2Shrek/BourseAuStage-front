import { Link } from 'react-router-dom';

import './dropdown.scss';
import cn from '../../../../utils/classnames';

const Dropdown = ({
    label,
    links = [],
    className,
    linkClassName,
}) => {
    return <div className={cn('dropdown', className)}>
        <p className="link">{label}</p>
        <div className="dropdown__child">
            {links.map((link, index) => <Link key={index} to={link.url} className={linkClassName(link.url)}>{link.name}</Link>)}
        </div>
    </div>
};

export default Dropdown;
