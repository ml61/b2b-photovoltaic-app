import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ISignInUpForm, SignInUpType } from './entities';
import PhoneNumberInput from '../reusableComponents/inputs/PhoneNumberInput';
import PasswordInput from '../reusableComponents/inputs/PasswordInput';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Alert } from '@mui/material';

const SignInUpForm = ({
  handleSubmit,
  isFormSubmitting,
  errorMessage,
  isSignInMode,
  setIsSignInMode,
}: ISignInUpForm) => {
  const methods = useFormContext<SignInUpType>();
  const { errors } = methods.formState;
  const formLabel = `Sign ${isSignInMode ? 'In' : 'Up'}`;

  return (
    <Container component='main' maxWidth='xs'>
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
        <Box
          component='form'
          onSubmit={methods.handleSubmit(handleSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          {isSignInMode ? null : (
            <Controller
              name='companyName'
              control={methods.control}
              rules={{
                required: { value: true, message: 'Company name is required' },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='companyName'
                  label='Company name'
                  name='companyName'
                  autoFocus
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  disabled={isFormSubmitting}
                  error={!!errors.companyName}
                  helperText={errors.companyName?.message}
                />
              )}
            />
          )}
          <Controller
            name='phoneNumber'
            control={methods.control}
            rules={{
              required: { value: true, message: 'Phone number is required' },
              maxLength: {
                value: 13,
                message: 'Phone number length should be 13',
              },
              minLength: {
                value: 13,
                message: 'Phone number length should be 13',
              },
              pattern: {
                value: /^\+?3?8?(0\d{9})$/,
                message: 'Phone number pattern is +380XXXXXXXXX',
              },
            }}
            render={({ field, fieldState }) => (
              <PhoneNumberInput
                value={field.value}
                disabled={isFormSubmitting}
                handleChange={(value) => {
                  field.onChange(value);
                }}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />

          <Controller
            name='password'
            control={methods.control}
            rules={{
              required: { value: true, message: 'Password is required' },
              minLength: { value: 5, message: 'Password min length is 5' },
            }}
            render={({ field, fieldState }) => (
              <PasswordInput
                value={field.value}
                disabled={isFormSubmitting}
                handleChange={(value) => {
                  field.onChange(value);
                }}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <LoadingButton
            loading={isFormSubmitting}
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {formLabel}
          </LoadingButton>
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
          {errorMessage && (
            <Alert sx={{ marginTop: '1rem' }} severity='error'>
              {errorMessage}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};
export { SignInUpForm };
