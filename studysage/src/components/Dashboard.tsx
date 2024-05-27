import { Typography } from '@mui/material';
import React from 'react';

interface DashboardProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Dashboard of Page
const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <Typography variant='h2'>Dashboard</Typography>
    </>
  )
}

export default Dashboard;
