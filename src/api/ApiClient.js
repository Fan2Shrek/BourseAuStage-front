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

        this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTgxMzk4ODEsImV4cCI6MTcxODE0MzQ4MSwicm9sZXMiOlsiUk9MRV9TVFVERU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicmV2YS50b3duZUBob3RtYWlsLmNvbSJ9.W6D-_pIKz_x3BhWd5x_7-74_BLuLQ9ilMWd_FjWrxMDn-l6gKYPKBTnGt7AJBev4mkU-l-zMXz8JeHoUyMagfbJ8HaKb8mLeQSUCsNwZ_Adx1ghruSeFEQjj_blS8cXZsR21mFd5RlmUCyhTSZTVpCNe01pci7A32D_snRhRLjrQmkumZk5BX7LSMugnVmEnat4NBPRX6I9e5ZINRc8W2g9nPXDOJb6vr4q8CvHJcLe-FPbOOvmKfRXCb-XVRRqqRKG_ENeZua-TGfJtwNOPK0re0pgPSKLHuqjF2d4ql_RZaFglO4gPgCP-sELmI2WEzM0PygcQ7b6_uQAL9iAWFw";
    }

    async get(url) {
        return fetch(`${this.baseUrl}${url}`, this.token ? {headers: {Authorization: `Bearer ${this.token}`}} : null)
            .then(response => response.json())
    }

    async post(url, body) {
        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.token ? `Bearer ${this.token}` : null
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

const apiClient = new ApiClient()

export default apiClient
