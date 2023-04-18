const {ObjectId} = require("mongodb");

class AccountService {
    constructor(client) {
        this.Account = client.db().collection("accounts");
    }

    extractConactData(payload){
        const account = {
            _id: payload.TenDangNhap,
            TenDangNhap: payload.TenDangNhap,
            MatKhau: payload.MatKhau
        };

        Object.keys(account).forEach(
            (key) => account[key] === undefined && delete account[key]
        );
        return account;
    }

    async signup(payload) {
        const account = this.extractConactData(payload);
        const result = await this.Account.insertOne(
            account
        );
        return result.value;
    }



    async login(payload) {
        const account = this.extractConactData(payload);
        const rs= await this.Account.findOne({
            "TenDangNhap": account.TenDangNhap,
            "MatKhau": account.MatKhau
        });

        return rs;
    }
}

module.exports = AccountService; 