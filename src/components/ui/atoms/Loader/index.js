import {useEffect, useRef} from 'react'

import cn from '../../../../utils/classnames'
import './loader.scss'

const Loader = ({width = 50, thickness = 10, secondary, third, color, className}) => {
    const loader = useRef(null)

    useEffect(() => {
        if (!loader) {
            return
        }

        if (color) {
            loader.current?.style.setProperty('--loader-color', `${color}`)
        }

        loader.current?.style.setProperty('--loader-width', `${width}px`)
        loader.current?.style.setProperty('--loader-thickness', `${thickness}px`)
    }, [loader, width, color])

    return <div ref={loader} className={cn(
        'loader',
        {
            secondary,
            third,
        },
        className,
    )}></div>
}

export default Loader
