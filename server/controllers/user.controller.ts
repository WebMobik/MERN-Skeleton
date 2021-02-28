import UserModel from '../models/User'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'
import { IRequest } from '../interfaces'
import { NextFunction, Response } from 'express'

const create = async (req: IRequest, res: Response) => {
    const user = new UserModel(req.body)

    try {
        await user.save()
        return res.status(200).json({
            message: 'Successfully signed up !'
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const userById = async (req: IRequest, res: Response, next: NextFunction, id: string) => {
    try { 
        const user = await UserModel.findById(id)
        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        req.profile = user
        next()
    } catch (err) {
        return res.status(400).json({
            error: 'Could not retrieve user'
        })
    }
}

const read = (req: IRequest, res: Response) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

// time not expected params
const list = async (req?: IRequest, res?: Response) => {
    try {
        const users = await UserModel.find().select('name email updated created')
        res.json(users)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const update = async (req: IRequest, res: Response) => {
    try { 
        const user = extend(req.profile, req.body)
        user.updated = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        console.log(user, 'that\'s all right');
        res.json(user)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req: IRequest, res: Response) => {
    try {
        const user = req.profile
        const deleteUser = await user.remove()
        deleteUser.hashed_password = undefined
        deleteUser.salt = undefined
        res.json(deleteUser)
    } catch (err) {
        return err.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {
    create,
    userById,
    read,
    list,
    update,
    remove
}
