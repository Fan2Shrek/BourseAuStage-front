class Company {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get('/companies');
    }

    async getCollaborators(id) {
        return this.apiClient.get(`/companies/${id}/collaborators`);
    }

    async get(id) {
        return this.apiClient.get(`/companies/${id}`);
    }

    async getPictures(id) {
        return this.apiClient.get(`/companies/${id}/pictures`);
    }

    async getHighlight() {
        return this.apiClient.get('/companies/highlight');
    }

    async getOffers(id) {
        return this.apiClient.get(`/companies/${id}/offers`);
    }

    async post(body) {
        return this.apiClient.post(`/register/company`, body, true);
    }
}

export default Company;
