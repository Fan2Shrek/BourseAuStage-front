import { useCallback, useEffect, useRef } from "react"
import { RxCross1 } from "react-icons/rx"

import './notification.scss'

const Notification = ({ message, type, onClose }) => {
    const notification = useRef(null)

    const handleClose = useCallback(() => {
        notification.current?.classList.add('notification__desappear')

        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    useEffect(() => {
        setTimeout(() => {
            handleClose()
        }, 5000)
    }, [handleClose])

    useEffect(() => {
        if (!notification) {
            return
        }

        notification.current?.style.setProperty('--notification-color', `var(--color-${type})`)
    }, [notification, type])

    return <div ref={notification} className='notification'>
        {message}
        <RxCross1
            className="notification__close"
            onClick={handleClose}
        />
    </div>
}

export default Notification
