const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const {errorsStatus} = require("../SharedData/sharedData");

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                switch (errors?.errors[0]?.param){
                    case "email": return next(ApiError.BadRequest('Вы ввели неправильный email', errorsStatus.validationEmail))
                    case "password": return next(ApiError.BadRequest('Пароль должен быть длинной от 3 до 32 символов', errorsStatus.validationPassword))
                    default: return next(ApiError.BadRequest('Ошибка при валидации'))
                }
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            return res.json({users});
        } catch (e) {
            next(e);
        }
    }

    async deleteUserById(req, res, next) {
        try {
            const userId = req.query.id;
            if (!userId) {
                return next(ApiError.BadRequest('Попытка удаления несуществующего id'))
            }
            const result = await userService.deleteUserById(userId);
            console.log("RESULT", result);
            return res.json({result});
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new UserController();
