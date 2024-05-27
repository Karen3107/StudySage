import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';

import Login from './components/auth/Login.tsx';
import Register from './components/auth/Register.tsx';
import Dashboard from './components/Dashboard.tsx';
import Chatbox from './components/Chatbox.tsx';
import Home from './components/Home.tsx';
import Results from './components/Results.tsx';
import Settings from './components/Settings.tsx';

// import { postApiCall } from './util/apiCall';

const PageList = () => {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const logout = async () => {
    // postApiCall('user/auth/logout', {});
    setToken(null);
    setUser(null);
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  // hides register and login buttons when at /register or /login
  const AuthButtons = () => {
    const location = useLocation();
    const shouldDisplayButtons = !['/register', '/login'].includes(location.pathname);

    return shouldDisplayButtons
      ? (
      <>
        <div style = {{ display: 'flex', flexDirection: 'row', columnGap: '1rem', justifyContent: 'flex-end' }}>
        <Link to='/register'>
          <Button variant='contained' name='redirect-register-btn'>Register</Button>
        </Link>
        <Link to='/login'>
          <Button variant='contained' name='redirect-login-btn'>Log In</Button>
        </Link>
        </div>
      </>
        )
      : null;
  };

  useEffect(() => {
    if (!token && window.location.pathname === '/hostListing') {
      if (localStorage.getItem('auth-token') !== null && localStorage.getItem('user') !== null) {
        setUser(localStorage.getItem('user'))
        setToken(localStorage.getItem('auth-token'))
      } else {
        navigate('/login');
      }
    }
  }, [token]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', height: '100vh'}}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem'}}>
            <div>
              Study Sage Logo
            </div>
            <Button onClick={() => navigate('/home')}>
              Home
            </Button>
            <Button onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button onClick={() => navigate('/chatbox')}>
              ChatBox
            </Button>
            <Button onClick={() => navigate('/results')}>
              Results
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Button onClick={() => navigate('/settings')}>
              Settings
            </Button>
          </div>

        </div>
        <div>

          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem' }}>
            {token
              ? (
              <>
                <div style = {{ display: 'flex', flexDirection: 'row', columnGap: '1rem', justifyContent: 'flex-start' }}>
                  <Link to='/hostListing'>
                    <Button variant='contained'name='host-btn'>Host Listings</Button>
                  </Link>
                  <Link to='/'>
                    <Button variant='contained' name='redirect-all-listing-btn'>All Listings</Button>
                  </Link>
                </div>
                <a href='#' onClick={logout}>
                  <Button variant='outlined' name='logout-btn'>Logout</Button>
                </a>
              </>
                )
              : (
              <>
                <AuthButtons/>
              </>
                )
            }
          </div>
          <Routes>
            <Route path='/register' element={<Register setToken={setToken} setUser={setUser}/>} />
            <Route path='/login' element={<Login setToken={setToken} setUser={setUser}/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/chatbox' element={<Chatbox/>} />
            <Route path='/results' element={<Results/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default PageList;
