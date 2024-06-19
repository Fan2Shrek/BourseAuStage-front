import { apiBaseUrl } from "../tools"
import Company from "./Resource/company"
import Offer from "./Resource/offer"
import Request from "./Resource/request"
import Me from "./Resource/me"
import Skill from "./Resource/skill"
import { getCookie, setCookie } from "../utils/cookies"

class ApiClient {
    constructor() {
        this.baseUrl = apiBaseUrl;
        this.company = new Company(this);
        this.offer = new Offer(this);
        this.request = new Request(this);
        this.me = new Me(this);
        this.skill = new Skill(this);
    }

    async get(url) {
        const token = getCookie('token')

        return fetch(`${this.baseUrl}${url}`, token ? { headers: { Authorization: `Bearer ${token}` } } : null)
            .then(response => response.json())
    }

    async post(url, body, asFormData = false) {
        const headers = {
            accept: 'application/json',
        }

        if (!asFormData) {
            headers['Content-Type'] = 'application/json'
        }

        const token = getCookie('token')

        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : null
            },
            body: asFormData ? body : JSON.stringify(body)
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

    async login(email, password) {
        this.post('/login', { email, password })
            .then(response => {
                if (response.token) {
                    setCookie('token', response.token)
                }
            })
    }

    async logout() {
        setCookie('token', null)
    }
}

const apiClient = new ApiClient()

export default apiClient
