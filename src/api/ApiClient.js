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

        this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTgyMTIyNDIsImV4cCI6MTcxODIxNTg0Miwicm9sZXMiOlsiUk9MRV9TVFVERU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicmV2YS50b3duZUBob3RtYWlsLmNvbSJ9.Qccq3yQCf2Dp-8Vd6GiaehhaBUYCq_OR0TOaj99Jflsjo3NthJH6qCizKTANmUL79Zipp5QhYsuPBBluQBcOAxG6VrhPn6UiDkhg-RT9yEZglfB_N5Yamay_N9o_DfYqb8O0DkQW-XNcY-XKSm180mrGLxct0mlWi1Saj06AGX5AFlUcJwIwdxBUrpa7Ckjev_oqR4f_EKlAiSQ97p56r6sRhXQfZQm4LO9TQ03tP_Wb_3HP6vREggSTzWhW1fWzbOu1x5n66KdeJGZXnUX6bW9kk3N4uku-nW70Apm93EceHY4JuxoRpnbFfs7QSOVg5-QHc8F__Y7faVPZBzDh-A";
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
