import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ISignInUpForm } from './entities';
import PhoneNumberInput from '../reusableComponents/inputs/PhoneNumberInput';
import PasswordInput from '../reusableComponents/inputs/PasswordInput';

const SignInUpForm = ({
  form,
  handleChange,
  handleSubmit,
  isFormSubmitting,
  errorMessage,
  isSignInMode,
  setIsSignInMode,
}: ISignInUpForm) => {
  const formLabel = `Sign ${isSignInMode ? 'In' : 'Up'}`;
  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {formLabel}
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {isSignInMode ? null : (
            <TextField
              margin='normal'
              required
              fullWidth
              id='companyName'
              label='Company name'
              name='companyName'
              autoFocus
              value={form.companyName}
              onChange={(e) => {
                handleChange('companyName', e.target.value);
              }}
              disabled={isFormSubmitting}
            />
          )}
          <PhoneNumberInput
            value={form.phoneNumber}
            disabled={isFormSubmitting}
            handleChange={(value) => handleChange('phoneNumber', value)}
          />
          <PasswordInput
            value={form.password}
            disabled={isFormSubmitting}
            handleChange={(value) => handleChange('password', value)}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isFormSubmitting}
          >
            {formLabel}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignInMode((prev) => !prev);
                }}
                variant='body2'
              >
                {isSignInMode
                  ? "Don't have an account? Sign Up"
                  : 'Have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export { SignInUpForm };
