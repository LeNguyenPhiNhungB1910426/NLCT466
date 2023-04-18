const { MongoAPIError } = require("mongodb")
const AccountService = require("../services/account.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.signup = async (req, res,next) => {
    try {
        const contactService = new AccountService(MongoDB.client);
        const documents = await contactService.signup(req.body);
        res.send(documents)
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};


exports.login = async (req, res, next) => {
    try {
        const contactService = new AccountService(MongoDB.client);
        const document = await contactService.login(req.body);
        console.log(document);
        if (!document) {
            
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};
