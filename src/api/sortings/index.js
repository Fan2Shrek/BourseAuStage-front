export const AscSort = ({ name, property, propertyTranslation, clarificationTranslation = null }) => ({
    name,
    label: `${propertyTranslation}${clarificationTranslation ? ` (${clarificationTranslation})` : ''}`,
    query: `&order[${property}]=asc`
})

export const DescSort = ({ name, property, propertyTranslation, clarificationTranslation = null }) => ({
    name,
    label: `${propertyTranslation}${clarificationTranslation ? ` (${clarificationTranslation})` : ''}`,
    query: `&order[${property}]=desc`
})
