module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadAccessToken () {
        return new ApiError(408, "Сессия истекла")
    }

    static EmaiIsAlreadyInUse(email) {
        return new ApiError(409, `Пользователь с почтовым адресом ${email} уже существует`)
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}
