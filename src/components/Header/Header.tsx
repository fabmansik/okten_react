import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {authService} from "../../services/authService";
import {authActions} from "../../redux/slices/authSlice";

const Header = () => {
    const {me} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const location = useLocation()
    console.log(location)
    if (authService.getAccessToken() && !me) {
        dispatch(authActions.me())
    }
    return (
        <header>
            <Link to={'/'}>
                <h2>Redux Toolkit Homework</h2>
            </Link>
            <br/>
            <div className={'links'}>
                {me ?
                    <div>
                        {location.pathname === '/'?
                            <h4>
                                <Link to={'cars'}>Cars</Link>
                            </h4> :
                            <h4>
                                {me.username}--- {new Date(me.last_login).toJSON()}
                            </h4>}
                    </div> : <div>
                        <h4><Link to='login'>Login</Link></h4>
                        <h4><Link to='register'>Register</Link></h4>
                    </div>}

            </div>
        </header>
    );
};

export default Header;