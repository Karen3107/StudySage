import React from 'react';
import { Button } from '@mui/material';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard.tsx';
import Chatbox from './components/Chatbox.tsx';
import Home from './components/Home.tsx';
import Results from './components/Results.tsx';

// import { postApiCall } from './util/apiCall';

const PageList = () => {
  const navigate = useNavigate();

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
            <div style = {{ display: 'flex', flexDirection: 'row', columnGap: '1rem', justifyContent: 'flex-start' }}>
              <Link to='/chatbox'>
                <Button variant='contained'name='host-btn'>Chat bot</Button>
              </Link>
              <Link to='/results'>
                <Button variant='contained' name='redirect-all-listing-btn'>Results</Button>
              </Link>
            </div>
          </div>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/chatbox' element={<Chatbox/>} />
            <Route path='/results' element={<Results/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default PageList;
