import createApiClient from "./api.service";

class ContactService {
    constructor(baseUrl = "/api/congvan") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data, {

            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async getFile(link){
        return (await this.api.post(`/getFile/`, link,{responseType: 'blob'})).data;
    }
}

export default new ContactService();