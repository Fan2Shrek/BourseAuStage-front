class Offer {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async get(id) {
        return this.apiClient.get(`/offers/${id}`);
    }

    async getLast() {
        return this.apiClient.get(`/offers?page=1&itemsPerPage=8&exists[deletedAt]=false&order[id]=desc`);
    }

    async getAll(query) {
        return this.apiClient.get(`/offers?${query}`);
    }

    async getRequests(id) {
        return this.apiClient.get(`/offers/${id}/requests`);
    }

    async getStats() {
        return this.apiClient.get(`/stats`);
    }

    async post(body) {
        return this.apiClient.post('/offers', body);
    }
}

export default Offer;
