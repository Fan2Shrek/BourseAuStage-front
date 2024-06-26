class Category {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll() {
        return this.apiClient.get('/company_categories');
    }
}

export default Category;
