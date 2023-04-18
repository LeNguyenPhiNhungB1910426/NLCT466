import createApiClient from "./api.service";

class AccountService {
    constructor(baseUrl = "/api/account") {
        this.api = createApiClient(baseUrl);
    }
    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
    async signup(data) {
        return (await this.api.post("/signup", data)).data;
    }
}

export default new AccountService();