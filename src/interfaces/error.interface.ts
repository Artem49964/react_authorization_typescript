interface IError {
    detail?:string
    error:string
}

export interface IErrorAuth extends IError{
    username:string[]
}