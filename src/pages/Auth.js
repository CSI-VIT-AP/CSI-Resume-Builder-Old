import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        CSI CHAPTER
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette:{
        primary: {
            main:  '#BAFE66'

        },
        secondary:{
            main: "#111727"
        },
        typography: {
            body1: {
              fontWeight: 600 // or 'bold'
            }
          }
        
    }
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/b86c/d25d/d537ba27bbfd05063c6288ef85a45be8?Expires=1673827200&Signature=latmpkF4aHPFHs1g0eszgbeA~ajXGG0SQcI~eStzH4cwMECnQFfXi6wc9iwMoTlWShlKASZsADV0DYyrLjc-OSW4OeXxrjViEHdeUxLZ2WIJpYLK9Z07xnAKfCne3EGtaVt9y5HWlf8nWtk8nsJ6kHa9c4IFjIxBq3xc0Fwl0Sd2Bxv6vLFhRQVPHAUBFOD1ZCOAAiK6SZ5vy1X3s0jHUwFJYlAN5GsyTVotJ5YT6aa49BJU-Xr4jQU1q8ESOF-Rpdsh2exEMw4LW7x6enHhQwowOAAi3rR-JnotRtow8LB8R5Bwbv0VnsMf-wRQ~jH0vFl2B6hZliAaA6Et-NSLhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4" gutterBottom sx={{fontweight: 600}}>
              Resume Builder
            </Typography>
            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" sx={{color: "black"}} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" sx={{color: "black"}} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}