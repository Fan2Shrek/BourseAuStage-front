import {apiBaseUrl} from "../tools"

class ApiClient {
    constructor() {
        this.baseUrl = apiBaseUrl
    }

    async get(url) {
        return fetch(`${this.baseUrl}${url}`)
            .then(response => response.json())
    }

    async post(url, body) {
        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
    }

    async delete(url) {
        return fetch(`${this.baseUrl}${url}`, {
            method: 'DELETE',
            headers: {
                accept: 'application/json',
            },
        })
            .then(response => response.json())
    }
}

export default new ApiClient()
