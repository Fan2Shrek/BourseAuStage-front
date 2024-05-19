const getDomainName = (url) => {
    return url.replace(/(https?:\/\/)?(www\.)?/i, '').split('/')[0];
}

export default getDomainName
