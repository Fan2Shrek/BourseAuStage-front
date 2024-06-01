export const alphabeticalSortAZ = ({ name, property, propertyTranslation, clarificationTranslation = null }) => ({
    name,
    label: `${propertyTranslation}${clarificationTranslation ? ` (${clarificationTranslation})` : ''}`,
    query: `&order[${property}]=asc`
})

export const alphabeticalSortZA = ({ name, property, propertyTranslation, clarificationTranslation = null }) => ({
    name,
    label: `${propertyTranslation}${clarificationTranslation ? ` (${clarificationTranslation})` : ''}`,
    query: `&order[${property}]=desc`
})
