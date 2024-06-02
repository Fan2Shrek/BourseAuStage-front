class Request {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get(`/request`);
    }

    async getLast() {
        return this.apiClient.get(`/requests?page=1&itemsPerPage=8&exists[deletedAt]=false&order[id]=desc`);
    }
}

export default Request;
