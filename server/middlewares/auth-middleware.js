const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');
const {errorsStatus} = require("../SharedData/sharedData");

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next( ApiError.BadRequest(`Пользователь не авторизован`,  errorsStatus.unauthorized));
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next( ApiError.BadRequest(`Пользователь не авторизован`,  errorsStatus.unauthorized));
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.BadAccessToken());
        }

        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.BadRequest(`Пользователь не авторизован`,  errorsStatus.unauthorized));
    }
};
