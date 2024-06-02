import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './pagination.scss'
import cn from '../../../../utils/classnames'
import Button from '../../atoms/Button'

const Pagination = ({ current, onNext, onPrevious, onChoice, maxPage, className }) => {
    const [slots, setSlots] = useState([])

    useEffect(() => {
        if (maxPage <= 7) {
            let slots = []
            for (let i = 1; i <= maxPage; i++) {
                slots.push(i)
            }

            setSlots(slots)

            return
        }

        if (current <= 4) {
            setSlots([1, 2, 3, 4, 5, '...', maxPage])

            return
        }

        if (current >= maxPage - 3) {
            setSlots([1, '...', maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage])

            return
        }

        setSlots([1, '...', current - 1, current, current + 1, '...', maxPage])
    }, [current, maxPage, setSlots])

    const handlePrevious = () => {
        if (current === 1) {
            return
        }

        onPrevious()
    }

    const handleNext = () => {
        if (current === maxPage) {
            return
        }

        onNext()
    }

    return <div className={cn('pagination', className)}>
        {current !== 1
            ? <Button
                key={'previous'}
                icon={<FaChevronLeft />}
                neutral
                inverted
                transparent
                withoutBorder
                onClick={handlePrevious}
                className='pagination__element'
            />
            : <span key={'emptyPrevious'} className='pagination__element'></span>
        }

        {slots.map((slot, index) => {
            if (slot === '...') {
                return <span key={index < 3 ? 'etc1' : 'etc2'} className='pagination__element'>...</span>
            }

            if (slot === current) {
                return <Button
                    key={slot}
                    label={slot}
                    onClick={() => onChoice(slot)}
                    className='pagination__element'
                />
            }

            return <Button
                key={slot}
                label={slot}
                neutral
                inverted
                transparent
                withoutBorder
                onClick={() => onChoice(slot)}
                className='pagination__element'
            />
        })}

        {current < maxPage
            ? <Button
                key={'next'}
                icon={<FaChevronRight />}
                neutral
                inverted
                transparent
                withoutBorder
                onClick={handleNext}
                className='pagination__element'
            />
            : <span key={'emptyNext'} className='pagination__element'></span>
        }
    </div>
}

export default Pagination
