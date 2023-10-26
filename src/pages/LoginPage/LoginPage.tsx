import {FC} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";

interface IProps {

}

const LoginPage: FC<IProps> = () => {
    return (
       <div>
           <LoginForm/>
       </div>
    );
};

export default LoginPage;