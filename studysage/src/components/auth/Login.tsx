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
  Alert
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

interface LoginProps {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login: React.FC<LoginProps> = ({ setToken, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [showAlert, setShowAlert] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    // const response = await fetch('http://localhost:5005/user/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email, password
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
    //   localStorage.setItem('auth-token', data.token);
    //   setToken(data.token);
    //   localStorage.setItem('user', email);
    //   setUser(email);
    //   navigate('/dashboard');
    // }
    navigate('/');
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
            Log In
          </Typography>
          { showAlert && (<Alert severity='error' style={{ marginTop: '1rem' }}>{errorMsg}</Alert>) }
          <Box component='form' noValidate sx={{ mt: 1 }}>
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
            <Button
              type='button'
              name='login-btn'
              onClick={login}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/register' variant='body2'>
                  {'Don\'t have an account? Sign Up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
