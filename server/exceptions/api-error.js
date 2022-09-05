module.exports = class ApiError extends Error {
    status;
    customStatus

    constructor(status, message, customStatus) {
        super(message);
        this.status = status;
        this.customStatus = customStatus;
    }

    static BadRequest(message, customStatus) {
        return new ApiError(400, message, customStatus);
    }

    // static UnauthorizedError() {
    //     return new ApiError(401, 'Пользователь не авторизован')
    // }

    // static NoUser() {
    //     return new ApiError(402, 'Неверный пароль или логин')
    // }

    // static IncorrectPassword() {
    //     return new ApiError(403, 'Неверный пароль')
    // }

    static BadAccessToken () {
        return new ApiError(408, "Сессия истекла")
    }

    // static EmaiIsAlreadyInUse(email) {
    //     return new ApiError(409, `Пользователь с почтовым адресом ${email} уже существует`)
    // }

}
