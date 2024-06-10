import { apiBaseUrl } from "../tools"
import Company from "./Resource/company"
import Offer from "./Resource/offer"
import Request from "./Resource/request"
import Me from "./Resource/me"

class ApiClient {
    constructor() {
        this.baseUrl = apiBaseUrl;
        this.company = new Company(this);
        this.offer = new Offer(this);
        this.request = new Request(this);
        this.me = new Me(this);
    }

    async get(url, options = {}) {
        return fetch(`${this.baseUrl}${url}`, options)
            .then(response => response.json())
    }

    async post(url, body, options = {}) {
        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...options,
            body: JSON.stringify(body)
        })
            .then(response => console.log(response.status) && response.json())
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

const apiClient = new ApiClient()

export default apiClient
