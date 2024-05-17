import {useEffect, useRef} from "react"

import './progressBar.scss'
import cn from "../../../../utils/classnames"

const ProgressBar = ({width = '200px', value = 100, classname}) => {
    const progressBar = useRef(null)

    useEffect(() => {
        if (!progressBar) {
            return
        }

        let color = ''

        if (value <= 5) {
            color = 'var(--progressBar-color-danger)'
        } else if (value <= 10) {
            color = 'var(--progressBar-color-warning)'
        } else {
            color = 'var(--progressBar-color-success)'
        }

        progressBar.current?.style.setProperty('--progressBar-width', width)
        progressBar.current?.style.setProperty('--progressBar-value', `${value}%`)
        progressBar.current?.style.setProperty('--progressBar-color', color)
    }, [progressBar, width, value])

    return <div ref={progressBar} className={cn('progressBar', classname)}>
        <div className="progressBar__value"></div>
    </div>
}

export default ProgressBar
