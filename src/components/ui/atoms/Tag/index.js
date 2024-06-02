import './tag.scss'
import cn from '../../../../utils/classnames'
import { useEffect, useRef } from 'react'

const Tag = ({
    label = 'tag',
    radius = 80,
    color = '#4640de',
    secondary = false,
    className
}) => {
    const tag = useRef()

    useEffect(() => {
        if (!tag) {
            return
        }

        radius && tag?.current?.style.setProperty('--tag-radius', `${radius}px`)

        if (color) {
            // 1a = 10% opacity
            secondary && tag?.current?.style.setProperty('--tag-color', `${color}1a`)
            tag?.current?.style.setProperty('--tag-text-color', color)
        }
    }, [tag, color, radius, secondary])

    return <div
        ref={tag}
        className={cn(
            'tag',
            { secondary },
            className
        )}
    >
        {label}
    </div>
}

export default Tag
