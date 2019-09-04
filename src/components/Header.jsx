import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/'
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
    // asi utilizaas user en vez de props.user
    const { user } = props;
    //const hasUser = Object.keys(user) > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {user == undefined ?
                        <img src={userIcon} alt="" /> :
                        <img src={gravatar(user.email)} alt={user.email} />

                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {user ?
                        <li><a href="/">{user.name}</a></li> :
                        null
                    }
                    {user ?
                        <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
                        :
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    }
                </ul>
            </div>
        </header>
    );
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);