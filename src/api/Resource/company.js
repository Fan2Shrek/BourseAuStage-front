class Company {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getAll(){
        return this.apiClient.get('/companies');
    }

    async get(id){
        return this.apiClient.get(`/companies/${id}`);
    }

    async getPictures(id){
        return this.apiClient.get(`/companies/${id}/pictures`);
    }
}

export default Company;
