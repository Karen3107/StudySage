import { Typography } from '@mui/material';
import React from 'react';

interface SettingsProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Dashboard of Page
const Settings: React.FC<SettingsProps> = () => {
  return (
    <>
      <Typography variant='h2'>Settings</Typography>
    </>
  )
}

export default Settings;