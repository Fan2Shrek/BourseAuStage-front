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
}

export default Offer;
