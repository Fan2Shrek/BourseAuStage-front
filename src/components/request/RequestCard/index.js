import { useTranslation } from 'react-i18next';
import { differenceInDays, differenceInYears } from 'date-fns';

import styles from './RequestCard.module.scss';
import cn from '../../../utils/classnames';
import tokens from '../../../translations/tokens';
import getPicturePath from '../../../utils/getPicturePath';
import OfferTypeEnum from '../../../enum/OfferTypeEnum';
import Tag from '../../ui/atoms/Tag';
import Card from '../../ui/atoms/Card';
import Dot from '../../ui/atoms/Dot';

const RequestCard = ({ request, className }) => {
    const { t } = useTranslation();

    return <Card className={cn(styles.card, className)}>
        <div className={styles.avatar}>
            <img
                alt='avatar'
                src={request.student.avatar
                    ? getPicturePath(request.student.avatar)
                    : '/images/avatar.png'
                }
            />
        </div>
        <div className={styles.mainInfos}>
            <h3>{request.name}</h3>
            <div className={styles.dotLine}>
                <p>{t(tokens.card.request.studentLine, {
                    firstName: request.student.firstName,
                    age: differenceInYears(new Date(request.student.birthdayAt), new Date()) * -1,
                })}</p>
                <Dot size={4} />
                <p>{request.location}</p>
            </div>

            <div className={styles.moreInfos}>
                <div className={styles.type}>
                    <Tag
                        label={t(tokens.card.request[request.internship ? OfferTypeEnum.INTERNSHIP : OfferTypeEnum.WORKSTUDY])}
                        radius={0}
                        secondary
                    />
                </div>
                <p>{t(tokens.card.request.dates, {
                    start: (new Date(request.start)).toLocaleDateString(),
                    end: (new Date(request.end)).toLocaleDateString(),
                    duration: differenceInDays(new Date(request.end), new Date(request.start) + 1),
                    interpolation: { escapeValue: false }
                })}</p>
            </div>
        </div>
    </Card>
}

export default RequestCard;
