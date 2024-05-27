import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
//   Alert
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

interface RegisterProps {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const Register: React.FC<RegisterProps> = ({ setToken, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
//   const [showAlert, setShowAlert] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    // const response = await fetch('http://localhost:5005/user/auth/register', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email, password, name
    //   }),
    //   headers: {
    //     'Content-type': 'application/json',
    //   }
    // });
    // const data = await response.json();
    // if (data.error) {
    //   setShowAlert(true);
    //   setErrorMsg(data.error);
    // } else if (data.token) {
    //   if (password !== confirmPassword) {
    //     setShowAlert(true);
    //     setErrorMsg('Passwords do not match. Please ensure both passwords are identical.');
    //   } else {
    //     localStorage.setItem('auth-token', data.token);
    //     setToken(data.token);
    //     localStorage.setItem('user', email);
    //     setUser(email);
    //     navigate('/dashboard');
    //   }
    // }
    navigate('/dashboard');
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          {/* { showAlert && (<Alert severity='error' style={{ marginTop: '1rem' }}>{errorMsg}</Alert>) } */}
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              name='name'
              autoComplete='name'
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirm-password'
              label='Confirm password'
              type='password'
              id='confirm-password'
              autoComplete='confirm-password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <Button
              type='button'
              name='register-button'
              onClick={register}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/login' variant='body2'>
                 {'Already have an account? Log In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
