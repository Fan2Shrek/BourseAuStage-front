import { useCallback, useState } from 'react'

import './burger.scss'
import cn from '../../../../utils/classnames'

const Burger = ({ onClick, className }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerToggle = useCallback(() => {
        setIsOpen(!isOpen)
        onClick && onClick()
    }, [setIsOpen, onClick])

    return <div className={cn('burger', { active: isOpen }, className)} onClick={handleBurgerToggle}>
        <span key={'first'} className={cn('burger__line', 'first')}></span>
        <span key={'second'} className={cn('burger__line', 'second')}></span>
        <span key={'third'} className={cn('burger__line', 'third')}></span>
    </div>
}

export default Burger
