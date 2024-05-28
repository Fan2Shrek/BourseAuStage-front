import styles from './CompanyCard.module.scss'
import cn from "../../../utils/classnames"
import getPicturePath from '../../../utils/getPicturePath'
import Card from "../../ui/atoms/Card"
import Tag from '../../ui/atoms/Tag'
import List from '../../ui/atoms/List'

const CompanyCard = ({ company, className }) => {
    return <Card className={cn(styles.card, className)}>
        <div className={styles.logo}>
            <img src={getPicturePath(company.logoIcon)} />
        </div>
        <div className={styles.offersRecap}>
            <Tag
                label='A faire'
                radius={0}
                secondary
            />
        </div>
        <div className={styles.mainInfos}>
            <h3>{company.name}</h3>
            <p className={styles.presentation}>{company.presentation}</p>
        </div>
        {company.activities.length > 0 && <div className={styles.activityList}>
            <List
                collection={company.activities}
                renderItem={activity => <Tag
                    label={activity.name}
                    color={activity.color}
                    secondary
                />}
            />
        </div>}
    </Card>
}

export default CompanyCard
