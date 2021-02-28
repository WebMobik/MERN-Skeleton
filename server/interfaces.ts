import { HashOptions } from 'crypto';
import { Document, Query } from 'mongoose'

interface IProfile extends Document {
    hashed_password?: string | undefined,
    salt?: HashOptions | undefined,
    updated?: number,
}

export interface IUserQuery extends Document {
    _id: string,
    authenticate?: any,
    name?: string,
    email?: string,
    password?: string,
    hashed_password?: string | undefined,
    salt?: HashOptions | undefined,
}

export interface IRequest {
    body?: IUserQuery,
    profile?: IProfile,
    auth?: Document,
    authenticate?: Function
}

export interface IUserApi<T = string> {
    token?: T,
    user?: {
        _id: T,
        email: T,
        password: T,
    }
    error?: T,
}
