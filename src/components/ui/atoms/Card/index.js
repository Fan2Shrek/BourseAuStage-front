import './card.scss';
import cn from '../../../../utils/classnames';

const Card = ({ children, className }) => {
    return (
        <div className={cn('card', className)}>
            {children}
        </div>
    );
};

export default Card;
