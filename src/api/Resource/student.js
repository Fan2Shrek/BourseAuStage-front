class Student {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async post(body) {
        return this.apiClient.post('/register/student', body, true);
    }
}

export default Student
