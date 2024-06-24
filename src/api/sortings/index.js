export const ascSort = ({ name, property, propertyTranslation, clarificationTranslation = null }) => ({
    name,
    label: `${propertyTranslation}${clarificationTranslation ? ` (${clarificationTranslation})` : ''}`,
    query: `&order[${property}]=asc`
})

export const descSort = ({ name, property, propertyTranslation, clarificationTranslation = null }) => ({
    name,
    label: `${propertyTranslation}${clarificationTranslation ? ` (${clarificationTranslation})` : ''}`,
    query: `&order[${property}]=desc`
})
