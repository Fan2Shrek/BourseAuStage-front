import { useTranslation } from 'react-i18next'

import ColumnCard from './column'
import RowCard from './row'

const OfferCard = ({
    row = false,
    payed = false,
    withCenteredLogo = false,
    withMainTitle = false,
    withHeader = false,
    withLocaltion = false,
    withDates = false,
    withDescription = false,
    withActivities = false,
    withShare = false,
    withVerticalDivider = false,
    withProgress = false,
    withBackButton = false,
    offer,
    className,
}) => {
    const { t } = useTranslation()

    return row
        ? <RowCard
            payed={payed}
            withMainTitle={withMainTitle}
            withCenteredLogo={withCenteredLogo}
            withShare={withShare}
            withVerticalDivider={withVerticalDivider}
            withProgress={withProgress}
            withBackButton={withBackButton}
            offer={offer}
            t={t}
            className={className}
        />
        : <ColumnCard
            withHeader={withHeader}
            withLocaltion={withLocaltion}
            withDates={withDates}
            withDescription={withDescription}
            withActivities={withActivities}
            offer={offer}
            t={t}
            className={className}
        />
}

export default OfferCard
