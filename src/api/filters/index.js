import OfferTypeEnum from "../../enum/OfferTypeEnum"

export const notNull = ({ property }) => `&exists[${property}]=false`

export const futureDate = ({ property }) => {
    const now = new Date()

    return `&${property}[after]=${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

export const offerType = ({ type }) => `&isInternship=${type === OfferTypeEnum.INTERNSHIP}`

export const withCompany = (property, identifier) => {
    return identifier ? `&${property}=${identifier.toString()}` : ''
}

export const existsFilter = ({ name, property, propertyTranslation, value }) => ({
    name,
    label: propertyTranslation,
    query: value !== null ? `&exists[${property}]=${value}` : ''
})
