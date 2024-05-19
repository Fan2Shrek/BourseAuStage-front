export const AlphabeticalSortAZ = ({property, reference, onClick, className}) => {
    return <p ref={reference} className={className} onClick={() => onClick && onClick(`&order[${property}]=asc`)}>AZ ({property})</p>
}

export const AlphabeticalSortZA = ({property, reference, onClick, className}) => {
    return <p ref={reference} className={className} onClick={() => onClick && onClick(`&order[${property}]=desc`)}>ZA ({property})</p>
}
