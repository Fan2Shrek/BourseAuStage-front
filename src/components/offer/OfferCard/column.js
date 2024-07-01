import styles from './OfferCard.module.scss'
import cn from "../../../utils/classnames"
import getPicturePath from '../../../utils/getPicturePath'
import OfferTypeEnum from '../../../enum/OfferTypeEnum'
import Card from "../../ui/atoms/Card"
import Tag from '../../ui/atoms/Tag'
import List from '../../ui/atoms/List'
import Dot from '../../ui/atoms/Dot'
import tokens from '../../../translations/tokens'

const ColumnCard = ({
    withHeader = false,
    withLocaltion = false,
    withDates = false,
    withDescription = false,
    withActivities = false,
    offer,
    t,
    className,
}) => {
    return <Card className={cn(styles.card, styles.column, className)}>
        {withHeader && <>
            {offer.company.logoIcon && 
                <div className={styles.logo}>
                    <img
                        alt='logo'
                        src={offer.company.logoIcon
                            ? getPicturePath(offer.company.logoIcon)
                            : '/images/company.png'
                        }
                    />
                </div>
            }
            <div className={styles.type}>
                <Tag
                    label={t(tokens.card.offer[offer.internship ? OfferTypeEnum.INTERNSHIP : OfferTypeEnum.WORKSTUDY])}
                    radius={0}
                    secondary
                />
            </div>
        </>}
        <div className={styles.mainInfos}>
            <h3>{offer.name}</h3>
            {withLocaltion && <div className={styles.companyPresentation}>
                <p>{offer.company.name}</p>
                <Dot size={4} />
                <p>{offer.company.city}</p>
            </div>}
            {withDates && <p className={styles.dates}>{t(tokens.card.offer.dates.column, {
                start: (new Date(offer.start)).toLocaleDateString(),
                end: (new Date(offer.end)).toLocaleDateString(),
                interpolation: { escapeValue: false }
            })}</p>}
            {withDescription && <p className={styles.description}>{offer.description}</p>}
        </div>
        {withActivities && offer.activities.length > 0 && <div className={styles.activityList}>
            <List
                collection={offer.activities}
                renderItem={activity => <Tag
                    label={activity.name}
                    color={activity.color}
                    secondary
                />}
            />
        </div>}
    </Card>
}

export default ColumnCard
