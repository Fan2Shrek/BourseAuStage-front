import styles from './Banner.module.scss'
import Container from "../../ui/atoms/Container"
import BreadCrumb from "../../ui/molecules/BreadCrumb"
import cn from '../../../utils/classnames'

const Banner = ({ breadCrumb = [], className, children }) => {
    return <Container inline className={cn(styles.bannerBackground, className)}>
        <Container className={styles.banner}>
            <BreadCrumb data={breadCrumb} />
            {children}
        </Container>
    </Container>
}

export default Banner
