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

        this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTgxMzYyNTUsImV4cCI6MTcxODEzOTg1NSwicm9sZXMiOlsiUk9MRV9TVFVERU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicmV2YS50b3duZUBob3RtYWlsLmNvbSJ9.XnX8_kHzciMYQvzXdr2pfY_M8RaQJt6oPxWoO1BOEjUYKYUyADg72ZPYmZC8bqOtNhLf2jbboG2vgn6IxG5hb8yxvmu9f9ROqNoWfLCLSnlRv-jTjYMWefNEIqOH2Sr2ykljXYz-XxUWd1pzxw9rznMYqdwHwUldNe7tSbSSb8MbTxCqOBKYsthi7tDtre4SyImFSsObl1MbPUSyL9nsV43ugtytRYZB0Nb4yi1NkhSFYxfUEjUuwgo0aFNCSWu5VQ1OXJO0LwNL5iVUarjEp57kV7yy-7huRNou9aG6-HVeUZEalGmWnGDkkFWaJ0N9qTnaFgQoO2ehmIASeGXimg";
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
