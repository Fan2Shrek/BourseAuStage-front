class Offer {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async get(id) {
        return this.apiClient.get(`/offers/${id}`);
    }
}

export default Offer;
