import { Typography } from '@mui/material';
import React from 'react';

interface HomeProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Dashboard of Page
const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Typography variant='h2'>Home</Typography>
    </>
  )
}

export default Home;