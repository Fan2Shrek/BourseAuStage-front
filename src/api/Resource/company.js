class Company {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get('/companies');
    }

    async get(id) {
        return this.apiClient.get(`/companies/${id}`);
    }

    async getPictures(id) {
        return this.apiClient.get(`/companies/${id}/pictures`);
    }

    async getHighlight() {
        return this.apiClient.get(`/companies/highlight`);
    }
}

export default Company;
