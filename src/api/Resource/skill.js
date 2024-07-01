class Skill {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get(`/skills`);
    }
}

export default Skill;
