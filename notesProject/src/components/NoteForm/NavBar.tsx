import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice';
import { RootState } from '../../features/store';

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);


    const handleLogout = () => {
        dispatch(logout()); 
        navigate('/login'); 
    };

  return (
    <div>
        {!isAuthenticated && <Link to={"/login"}><button>Login</button></Link>}
        <Link to={"/notes"}><button>notes</button></Link>
        <Link to={"/notes/new"}><button>Create</button></Link>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}

export default NavBar