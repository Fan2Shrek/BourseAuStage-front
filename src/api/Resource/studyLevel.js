class StudyLevel {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get(`/study_levels`);
    }
}

export default StudyLevel;
