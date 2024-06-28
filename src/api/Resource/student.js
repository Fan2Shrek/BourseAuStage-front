class Student {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async register(body) {
        return this.apiClient.post('/register/student', body, true);
    }
}

export default Student
