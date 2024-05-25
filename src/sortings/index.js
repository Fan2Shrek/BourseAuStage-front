export const alphabeticalSortAZ = ({ name, property, propertyTranslation }) => ({
    name,
    label: `${propertyTranslation} (A-Z)`,
    query: `&order[${property}]=asc`
})

export const alphabeticalSortZA = ({ name, property, propertyTranslation }) => ({
    name,
    label: `${propertyTranslation} (Z-A)`,
    query: `&order[${property}]=desc`
})
