'use strict'

interface IErrorMessage extends Error {
    code: number,
    errors: { message: string }
}

const getUniqueErrorMessage = (err: Error) => {
    try {
        const fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'))
        return fieldName.charAt(0).toUpperCase()
    } catch (err) {
        return 'Unique field already exists'
    }
}

const getErrorMessage = (err: IErrorMessage) => {
    let message = ''

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err)
                break
            default:
                message = 'Something went wrong'
        }
    } else {
        for (let errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message
        }
    }

    return message
}

export default {getErrorMessage}
