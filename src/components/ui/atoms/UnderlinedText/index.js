import './underlinedContent.scss'
import cn from "../../../../utils/classnames"

const UnderlinedContent = ({children, className}) => {
    return <span className={cn('underlinedContent', className)}>
        {children}
        <img
            src={`/images/underline.svg`}
            alt='Underline'
            className='underlinedContent__underline'
        />
    </span>
}

export default UnderlinedContent
