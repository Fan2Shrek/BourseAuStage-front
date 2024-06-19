export const getCookie = (name) => {
    const cookies = document.cookie.split('; ')
    const value = cookies.find(cookie => cookie.startsWith(`${name}=`))?.split('=')[1]

    if (value === undefined) {
        return null
    }

    return decodeURIComponent(value)
}

export const setCookie = (name, value, days) => {
    let expire = null

    if (days) {
        expire = new Date()
        expire.setDate(expire.getDate() + days)
    } else if (value === null) {
        expire = new Date()
    }

    document.cookie = `${name}=${encodeURIComponent(value)}; ${expire ? `expires=${expire.toUTCString()};` : ''}`
}
