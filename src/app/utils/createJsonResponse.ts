export const createJsonResponse = {
    success(message: string, data: object) {
        return {
            success: true,
            error: false,
            message,
            data: data ? data : null
        }
    },

    error(message: string, err: object) {
        return {
            success: false,
            error: true,
            message,
            errorObj: err ? err : null
        }
    }
}