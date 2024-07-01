class Activity {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get('/activities');
    }
}

export default Activity;
