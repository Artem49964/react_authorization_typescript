import {FC} from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

interface IProps {

}

const Header: FC<IProps> = () => {
    return (
        <div className={'Header'}>
            Logo
            <div>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
            </div>
        </div>
    );
};

export default Header;