class Me {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async get() {
        return this.apiClient.get(`/me`);
    }

    async post(body) {
        return this.apiClient.post(`/me`, body);
    }
}

export default Me;  
