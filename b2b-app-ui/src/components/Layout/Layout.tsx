import { Box, Button } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import userAuthSlice from '../../store/reducers/authReducer';

const Layout = () => {
  const {
    user: { companyName, phoneNumber, role },
  } = useAppSelector((state) => state.userAuthSlice);
  const dispatch = useAppDispatch();

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Welcome to our shop {companyName}! Your active phone is: {phoneNumber}
          . Your role is {role}{' '}
        </div>
        <Button onClick={() => dispatch(userAuthSlice.actions.logout())}>
          Logout
        </Button>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
