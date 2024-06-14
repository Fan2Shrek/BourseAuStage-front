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

        this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTg0MDQ1MTYsImV4cCI6MTcxODc2NDUxNiwicm9sZXMiOlsiUk9MRV9TVFVERU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicmV2YS50b3duZUBob3RtYWlsLmNvbWEifQ.PqM3w9X9t9NrH0zCRe6jRIn4rUzVI0ZKP5URQ-AmF0S8FH6litpex7_cQIzPc1Xx2fu3FcaDnhhIEA78QlEp092IKD4VifxgbWlGCxTKLko9fm0r0OG-VSYLyhFwnYxZFGKU17NrBAq-c7tNiR3eJvxvkI6BWZGuegapwQLuX55x8M1Dpgl0TCifDFSy6vrR-EupAONCF4qih-hljJlOSq7m4S3UELq7fXREJiYHNPq8DFwyc9Xw-8-VfOamM7APkPdTRJRSoQNzWf6eqhLar75I4hqIRu9kk7VyPUPrfjm7PCH0YH2mLZfpVB81ZcNKKK1LPLGqH_ZBCgukglDCKg";
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
