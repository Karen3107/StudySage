import { Typography } from '@mui/material';
import React from 'react';

interface ChatboxProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Dashboard of Page
const Chatbox: React.FC<ChatboxProps> = () => {
  return (
    <>
      <Typography variant='h2'>ChatBox</Typography>
    </>
  )
}

export default Chatbox;