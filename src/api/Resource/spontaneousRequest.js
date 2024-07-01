class SpontaneousRequest {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getLast() {
        return this.apiClient.get(`/spontaneous_requests?page=1&itemsPerPage=8&exists[deletedAt]=false&order[id]=desc`);
    }
}

export default SpontaneousRequest;
