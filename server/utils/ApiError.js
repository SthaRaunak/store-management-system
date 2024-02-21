class ApiError extends Error {
    constructor(
        statusCode,
        message = "Error: something went wrong",
        errors = [],
        stack
    ) {
        super(message); //passing the message to built in Error class (parent class)

        this.statusCode = statusCode || 500;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}
