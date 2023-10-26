import {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces/auth.interface";
import {authValidator} from "../../validators/auth.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {authActions} from "../../redux/slices/auth.slice";
import {useNavigate} from "react-router-dom";

interface IProps {

}

const RegisterForm: FC<IProps> = () => {

    const {register, handleSubmit, formState:{errors, isValid}} = useForm<IAuth>({mode:'all', resolver:joiResolver(authValidator)})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {error} = useAppSelector(state => state.AuthReducer)

    const registerUser:SubmitHandler<IAuth> =  async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register(user))
        if(requestStatus === 'fulfilled') {
            navigate('/login')
        }
    }


    return (
        <form onSubmit={handleSubmit(registerUser)}>

            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            {Object.keys(errors).length>0 && <span>{Object.values(errors)[0].message}</span>}
            <button disabled={!isValid}>register</button>
            {error&&<span>{error.username[0]}</span>}

        </form>
    );
};

export default RegisterForm;