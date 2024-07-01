class Request {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async post(body) {
        return this.apiClient.post(`/requests`, body, false, {
            accept: 'application/ld+json',
            'Content-Type': 'application/ld+json',
        });
    }
}

export default Request;
