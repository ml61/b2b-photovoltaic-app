import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './common/muiTheme';
import Layout from './components/Layout/Layout';
import { useAppSelector } from './hooks/hooks';
import Dashboard from './pages/Dashboard';
import Delivery from './pages/Delivery';
import Orders from './pages/Orders';
import Product from './pages/Product';
import Products from './pages/Products';
import SignInUp from './pages/SignInUp';
import Users from './pages/Users';

function App() {
  const { token } = useAppSelector((state) => state.userAuthSlice);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {token ? (
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/products' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<Product />} />
              <Route path='/users' element={<Users />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/delivery' element={<Delivery />} />
            </Route>
          </Routes>
        ) : (
          <SignInUp />
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
