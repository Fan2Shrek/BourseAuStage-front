export const getCookie = (name) => {
    const cookies = document.cookie.split('; ')
    const value = cookies.find(cookie => cookie.startsWith(`${name}=`))?.split('=')[1]

    if (value === undefined) {
        return null
    }

    return decodeURIComponent(value)
}

export const setCookie = (name, value, expire = null) => {
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expire ? `expires=${expire.toUTCString()};` : ''}`
}

export const eraseCookie = (name) => {
    document.cookie = `${name}=; Max-Age=-99999999;`;
}
