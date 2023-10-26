import {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces/auth.interface";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {authService} from "../../services/auth.service";
import {authActions} from "../../redux/slices/auth.slice";
import {useNavigate} from "react-router-dom";

interface IProps {

}

const LoginForm: FC<IProps> = () => {

    const {register, handleSubmit} = useForm<IAuth>({mode:'all'})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const login:SubmitHandler<IAuth> = async (user) => {
       const {meta:{requestStatus}} =  await dispatch(authActions.login(user))
        if(requestStatus === 'fulfilled') {
            navigate('/cars')
        }
    }


    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>login</button>

        </form>
    )}

export default LoginForm;