import Joi from "joi";

export const authValidator = Joi.object({
    username:Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base':'Юзернейм должен включать в себя только буквы. Минимум 2, максимум 20 букв'
    }),
    password:Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base':'Пароль должен включать в себя минимум: 1 букву, 1 цифру, 1 символ. Минимум 8, максимум 20 символов'
    })
})