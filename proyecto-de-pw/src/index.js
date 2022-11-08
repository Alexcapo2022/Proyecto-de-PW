import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginaPrincipal from './pages/PaginaPrincipal'
import Login from './pages/Login'
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
  <BrowserRouter>
  <Routes>
    <Route path='/PaginaPrincipal' element={<PaginaPrincipal />}/>
    <Route path='/' element={<Login />}/>
    <Route path='*' element={<NotFoundPage />}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
