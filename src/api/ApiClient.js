import { apiBaseUrl } from "../tools"
import { getCookie, setCookie } from "../utils/cookies"
import Company from "./Resource/company"
import Offer from "./Resource/offer"
import Request from "./Resource/request"
import Me from "./Resource/me"
import Skill from "./Resource/skill"
import Category from "./Resource/category"
import Student from "./Resource/student"
import Activity from "./Resource/activity"
import StudyLevel from "./Resource/studyLevel"
import SpontaneousRequest from "./Resource/spontaneousRequest"

class ApiClient {
    constructor() {
        this.baseUrl = apiBaseUrl;
        this.company = new Company(this);
        this.offer = new Offer(this);
        this.request = new Request(this);
        this.spontaneousRequest = new SpontaneousRequest(this);
        this.me = new Me(this);
        this.skill = new Skill(this);
        this.category = new Category(this);
        this.activity = new Activity(this);
        this.studyLevel = new StudyLevel(this);
        this.student = new Student(this);

        this.token = getCookie('token')
    }

    async get(url) {
        return fetch(`${this.baseUrl}${url}`, this.token ? { headers: { Authorization: `Bearer ${this.token}` } } : null)
            .then(response => response.json())
    }

    async post(url, body, asFormData = false, additionnalHeaders = {}) {
        const headers = {
            accept: 'application/json',
            ...(asFormData ? {} : { 'Content-Type': 'application/json' }),
            ...additionnalHeaders,
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

    async login(email, password) {
        return this.post('/login', { email, password })
            .then(response => {
                if (response.token) {
                    const decodedToken = JSON.parse(atob(response.token.split('.')[1]));
                    setCookie('token', response.token, new Date(decodedToken.exp * 1000))
                    this.token = response.token
                }

                return response
            })
            .then(async (response) => {
                if (response.token) {
                    return {
                        ...response,
                        user: await this.me.get().then(user => user)
                    }
                }

                return response
            })
    }
}

const apiClient = new ApiClient()

export default apiClient
