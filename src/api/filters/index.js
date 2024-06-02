import OfferTypeEnum from "../../enum/OfferTypeEnum"

export const notNull = ({ property }) => `&exists[${property}]=false`

export const futureDate = ({ property }) => {
    const now = new Date()

    return `&${property}[after]=${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

export const offerType = ({ type }) => `&isInternship=${type === OfferTypeEnum.INTERNSHIP}`
