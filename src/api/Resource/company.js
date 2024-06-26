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
        return this.apiClient.get(`/companies/${id}/pictures?order[position]=asc`);
    }

    async getHighlight() {
        return this.apiClient.get('/companies/highlight');
    }

    async getOffers(id) {
        return this.apiClient.get(`/companies/${id}/offers?exists[deletedAt]=false`);
    }

    async post(body) {
        return this.apiClient.post(`/register/company`, body, true);
    }

    async update(id, body) {
        return this.apiClient.post(`/companies/${id}`, body, true);
    }
}

export default Company;
