import { useCallback, useContext, useMemo } from "react";
import { GrShareOption } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { differenceInDays } from 'date-fns'

import styles from './OfferCard.module.scss'
import cn from "../../../utils/classnames"
import { NotificationContext } from "../../../context/NotificationContext";
import getPicturePath from '../../../utils/getPicturePath'
import path from "../../../path";
import OfferTypeEnum from '../../../enum/OfferTypeEnum'
import Card from "../../ui/atoms/Card"
import Tag from '../../ui/atoms/Tag'
import List from '../../ui/atoms/List'
import Dot from '../../ui/atoms/Dot'
import tokens from '../../../translations/tokens'
import Button from "../../ui/atoms/Button";
import ProgressBar from "../../ui/atoms/ProgressBar";

const RowCard = ({
    payed = false,
    withCenteredLogo = false,
    withMainTitle = false,
    withShare = false,
    withVerticalDivider = false,
    withProgress = false,
    withBackButton = false,
    offer,
    t,
    className,
}) => {
    const { addNotification } = useContext(NotificationContext)

    const remainingDays = useMemo(() => differenceInDays(
        new Date(offer.availableAt),
        new Date()
    ) + 1, [offer])

    const handleShare = useCallback(() => {
        navigator.clipboard.writeText(window.location.href);
        addNotification({ type: 'success', message: t(tokens.notifications.linkCopied) })
    }, [addNotification, t])

    return <Card className={cn(styles.card, styles.row, className)}>
        <div className={cn(styles.infos, {
            [styles.centeredLogo]: withCenteredLogo
        })}>
            {offer.company.logoIcon && <div className={styles.logo}>
                <img src={getPicturePath(offer.company.logoIcon)} alt='logo' />
            </div>}
            <div className={styles.mainInfos}>
                {withMainTitle ? <h1>{offer.name}</h1> : <h3>{offer.name}</h3>}
                <div className={cn(styles.dotLine, {
                    [styles.mainTitle]: withMainTitle
                })}>
                    <p className={styles.companyName}>{offer.company.name}</p>
                    <Dot size={4} />
                    <p>{offer.company.city}</p>
                    <Dot size={4} />
                    <p className={styles.dates}>{t(tokens.card.offer.dates.row, {
                        start: (new Date(offer.start)).toLocaleDateString(),
                        end: (new Date(offer.end)).toLocaleDateString(),
                        duration: differenceInDays(new Date(offer.end), new Date(offer.start) + 1),
                        interpolation: { escapeValue: false }
                    })}</p>
                    {payed && <div className={styles.payed}><Dot size={10} />{t(tokens.card.offer.payed)}</div>}
                </div>
                <div className={styles.tags}>
                    <div className={styles.type}>
                        <Tag
                            label={t(tokens.card.offer[offer.internship ? OfferTypeEnum.INTERNSHIP : OfferTypeEnum.WORKSTUDY])}
                            radius={0}
                            secondary
                        />
                    </div>
                    {offer.activities.length > 0 && <div className={styles.activityList}>
                        <List
                            collection={offer.activities}
                            renderItem={activity => <Tag
                                label={activity.name}
                                color={activity.color}
                                secondary
                            />}
                        />
                    </div>}
                </div>
            </div>
        </div>
        <div className={styles.actions}>
            {withShare && <div className={styles.share}>
                <GrShareOption onClick={handleShare} />
            </div>}

            {withVerticalDivider && <div className={styles.divider} />}

            <div className={styles.cta}>
                <Button
                    label={withBackButton
                        ? t(tokens.card.offer.cta.button.back)
                        : t(tokens.card.offer.cta.button[withMainTitle ? 'main' : 'more'])
                    }
                    redirectTo={withBackButton
                        ? path.offer.replace(':id', `${offer.id}`)
                        : withMainTitle ? path.apply.replace(':id', `${offer.id}`) : undefined
                    }
                    {...withBackButton && {
                        icon: <FaArrowLeft />,
                        inverted: true,
                        transparent: true,
                        neutral: true,
                    }}
                />

                {withProgress && <div className={styles.progressBlock}>
                    <ProgressBar
                        width="100%"
                        value={(remainingDays * 100) / 80}
                    />
                    <p>{t(tokens.card.offer.cta.progress[remainingDays > 1 ? 'plural' : 'singular'], {
                        remainingDays
                    })}</p>
                </div>}
            </div>
        </div>
    </Card >
}

export default RowCard
