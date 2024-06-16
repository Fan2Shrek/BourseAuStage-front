import { apiBaseUrl } from "../tools"
import Company from "./Resource/company"
import Offer from "./Resource/offer"
import Request from "./Resource/request"
import Me from "./Resource/me"
import Skill from "./Resource/skill"

class ApiClient {
    constructor() {
        this.baseUrl = apiBaseUrl;
        this.company = new Company(this);
        this.offer = new Offer(this);
        this.request = new Request(this);
        this.me = new Me(this);
        this.skill = new Skill(this);

        this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTg0NTUzNzEsImV4cCI6MTcxODgxNTM3MSwicm9sZXMiOlsiUk9MRV9TVFVERU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEB0ZXN0dC5jb20ifQ.nDnndEKoO3snsQb4GZ28whn8OocsoRacZ58sfoqbR7HS6UgSACilKJ28X_z8T7fOTWUyAdva1gK3oCwn6jrwJVWSsrEalrOOrugD120JA5jRXju3qmeoB4r2q9U3HppQed_8p53WmUzJsHtbECW9ZbAEhhOnHgeQZZo2ec1lY-uQIuxjJPeyliu833FVqhfdaA8jG4aLjj-QEpmnfcw1IFDqicrqo3sE0ejNlNFGcDkQ_FYNLYpBs5NkQ5Bm7S9lH7C6-7vy-XUt8vnQXYM3FsNlpjXepDs9pYIjGkFMo_Yrv8P4m5bxzPKCFUr4BJomLmHavnw3v5eXPVTE9W8Dpg";
    }

    async get(url) {
        return fetch(`${this.baseUrl}${url}`, this.token ? {headers: {Authorization: `Bearer ${this.token}`}} : null)
            .then(response => response.json())
    }

    async post(url, body, asFormData = false) {
        const headers = {
            accept: 'application/json',
        }

        if (!asFormData) {
            headers['Content-Type'] = 'application/json'
        }

        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                ...headers,
                Authorization: this.token ? `Bearer ${this.token}` : null
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
}

const apiClient = new ApiClient()

export default apiClient
