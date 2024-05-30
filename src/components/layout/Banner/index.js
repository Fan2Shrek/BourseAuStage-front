import styles from './Banner.module.scss'
import Container from "../../ui/atoms/Container"
import BreadCrumb from "../../ui/molecules/BreadCrumb"
import cn from '../../../utils/classnames'

const Banner = ({
    breadCrumb = [],
    cornerTop = false,
    cornerBottom = false,
    className,
    children
}) => {
    return <Container
        inline
        cornerTop={cornerTop}
        cornerBottom={cornerBottom}
        className={cn(styles.bannerBackground, className)}
    >
        <Container className={styles.banner}>
            <BreadCrumb data={breadCrumb} />
            {children}
        </Container>
    </Container>
}

export default Banner
