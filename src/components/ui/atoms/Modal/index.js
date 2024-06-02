import { RxCross1 } from "react-icons/rx";

import './modal.scss'
import cn from "../../../../utils/classnames"

const Modal = ({
    active = false,
    title,
    setDisplayModal,
    children,
    className
}) => {
    return <div className={cn(
        'modal__background',
        { active }
    )}>
        <div className={cn('modal', className)} >
            <div className="modal__header">
                <h2 className="modal__title">{title}</h2>
                <RxCross1
                    className="modal__close"
                    onClick={() => setDisplayModal(false)}
                />
            </div>
            <div className="modal__content">
                {children}
            </div>
        </div>
    </div>
}

export default Modal
