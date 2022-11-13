import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginaPrincipal from './pages/PaginaPrincipal'
import Login from './pages/Login'
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';
import Reviews from './pages/Reviews';
import Registro from './pages/Registro';
import Footer from './components/Footer';
import About from './pages/About';
import ArmadoPrincipiantes from './pages/ArmadoPrincipiantes';
import Support from './pages/Support';
import Guides from './pages/SupportElements/Guides';
import Faq from './pages/SupportElements/Faq';
import SubmitTicket from './pages/SupportElements/SubmitTicket';
import RankingPerifericos from './pages/RankingPerifericos';
import RankingPc from './pages/RankingPc';
import User from './pages/User';
import ArmadoAvanzado from './pages/ArmadoAvanzado'
import Carrito from './pages/Carrito';
import Compra from './pages/Compra';
import BeginnerRecommendation from './pages/BeginnerRecommendation'


import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    
  <BrowserRouter>
  <Routes>
    <Route path='/PaginaPrincipal' element={<PaginaPrincipal />}/>
    <Route path='/ArmadoPrincipiantes' element={<ArmadoPrincipiantes />}/>
    <Route path='/' element={<Login />}/>
    <Route path='/Registro' element={<Registro />}/>
    <Route path='/About' element={<About />}/>
    <Route path='*' element={<NotFoundPage />}/>
    <Route path='/Reviews' element={<Reviews/>}/>
    <Route path='/Support' element={<Support/>}/>
    <Route path='/Support/Guides' element={<Guides/>}/>
    <Route path='/Support/Faq' element={<Faq/>}/>
    <Route path='/Support/SubmitTicket' element={<SubmitTicket/>}/>
    <Route path='/RankingPerifericos' element={<RankingPerifericos/>}/>
    <Route path='/RankingPc' element={<RankingPc/>}/>
    <Route path='/User' element={<User/>}/>
    <Route path='/ArmadoAvanzado' element={<ArmadoAvanzado/>}/>
    <Route path='/Carrito' element={<Carrito/>}/>
    <Route path='/Compra' element={<Compra/>}/>
    <Route path='/ArmadoPrincipantes/Recomendacion' element={<BeginnerRecommendation/>}/>
    
    

  </Routes>
  </BrowserRouter>
  <Footer/>
  </React.StrictMode>
);
