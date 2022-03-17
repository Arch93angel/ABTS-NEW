import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';







function Header() {

    const { authData, setAuth } = useAuth();

    const logout = () => {
        setAuth(null);
    }

    return (
        <div className='header text-white'>
            <nav className='d-flex flex-row justify-content-between'>
                <div className='header-logo'>
                    <Link to={'/homepage'}>
                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646815446/ABTS/logo/balance_of_trade_pqrrzs.png" alt="ABTS" height={"50px"} width={'150px'} />
                    </Link>
                </div>
                <span className='header-brand-name text-white'>AFRICAN BALANCE OF TRADE SUMMIT</span>

                <div className='d-flex flex-row px-2 py-1 text-white'>

                    <a href="/" className='mx-4 header-nav-items'>Dashboard</a>
                    <a href="/groups" className='mx-4 header-nav-items'>Groups</a>
                    <a href="/events" className='mx-4 header-nav-items'>Events</a>
                    <a href="#partner" className='mx-4 header-nav-items'>Partners</a>
                    <a href="#blog" className='mx-4 header-nav-items'>Support</a>
                </div>
                {!authData ?
                    <div className='account'>
                        <a href="/login" className='mx-4 header-nav-items'>Log-In</a>
                    </div>
                    : <span>{authData.user.username}<a href="/login" className='mx-4 header-nav-items' onClick={() => logout()} >Log-out</a> </span>}
            </nav>
        </div>
    )
}

export default Header