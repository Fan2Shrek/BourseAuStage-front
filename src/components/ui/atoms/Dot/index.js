import { useEffect, useRef } from "react"

import "./dot.scss"
import cn from "../../../../utils/classnames"

const Dot = ({ size = 4, className }) => {
    const dot = useRef()

    useEffect(() => {
        if (!dot || !size) {
            return
        }

        dot?.current?.style.setProperty('--dot-size', `${size}px`)
    }, [dot, size])

    return <div ref={dot} className={cn('dot', className)}></div>
}

export default Dot
