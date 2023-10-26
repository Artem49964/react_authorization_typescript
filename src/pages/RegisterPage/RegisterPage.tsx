import {FC} from 'react';
import RegisterForm from "../../components/RegisterForm/RegisterForm";

interface IProps {

}

const RegisterPage: FC<IProps> = () => {
    return (
        <div>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;