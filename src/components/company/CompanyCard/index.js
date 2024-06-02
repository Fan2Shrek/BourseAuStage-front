import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './CompanyCard.module.scss'
import cn from "../../../utils/classnames"
import tokens from '../../../translations/tokens'
import getPicturePath from '../../../utils/getPicturePath'
import apiClient from '../../../api/ApiClient'
import Card from "../../ui/atoms/Card"
import Tag from '../../ui/atoms/Tag'
import List from '../../ui/atoms/List'

const CompanyCard = ({ company, className }) => {
    const [internshipNumber, setInternshipNumber] = useState(0)
    const [workStudiesNumber, setWorkStudiesNumber] = useState(0)
    const { t } = useTranslation()

    useEffect(() => {
        apiClient.company.getOffers(company.id)
            .then(data => {
                const offers = data['hydra:member'] ?? []

                setInternshipNumber(offers.filter(offer => offer.internship).length)
                setWorkStudiesNumber(offers.filter(offer => !offer.internship).length)
            })
    }, [company]);

    return <Card className={cn(styles.card, className)}>
        <div className={styles.logo}>
            <img src={getPicturePath(company.logoIcon)} alt='logo' />
        </div>
        {internshipNumber + workStudiesNumber > 0 && <div className={styles.offersRecap}>
            <Tag
                label={[
                    internshipNumber > 0
                        ? `${internshipNumber} ${t(tokens.card.company.internship[internshipNumber > 1 ? 'plural' : 'singular'])}`
                        : false,
                    workStudiesNumber > 0
                        ? `${workStudiesNumber} ${t(tokens.card.company.workStudy[workStudiesNumber > 1 ? 'plural' : 'singular'])}`
                        : false,
                ].filter(el => el).join(', ')}
                radius={0}
                secondary
            />
        </div>}
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
