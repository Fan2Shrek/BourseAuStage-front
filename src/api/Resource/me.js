class Me {
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTgwNTM5OTMsImV4cCI6MTcxODA1NzU5Mywicm9sZXMiOlsiUk9MRV9TVFVERU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicGZlcnJ5QHlhaG9vLmNvbSJ9.J70xUkPEqaHzCKphB9s6iv2vMQWZkYBxTSLSDDlGwv2HAof935DuuNVnzAl1gsZMWucpguJ9VizOmaFq0yH8h7N18QoQDxGCTF_IDF88Q6UbXEuvC6NMZmLLCvzvDI5IMORDi6X6Q0dA0a5CRNmsAdJtG2EhjWi1MCP2UNph-lR0xVZ90kEyWr2-lx6SmHmkgj7puVuTmDeV68jUIXWNg8Mg-iHoHnsSMzRV_dMKamP-Lo4aQ_TFpxeft5Zfc26lqO3pGcs3uXsPvDWqFHOKGIIb8l6kuUdIuylQ2id7lhzlTRU28CmGEcnlea7HFAyb0YNHQW23KW4LAC2j6042iw";

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    getHeaders() {
        return {
            Authorization: `Bearer ${this.token}`
        };
    
    }

    async get() {
        return this.apiClient.get(`/me`, { headers: this.getHeaders() });
    }

    async post(body) {
        return this.apiClient.post(`/me`, body, { headers: this.getHeaders() });
    }
}

export default Me;  
