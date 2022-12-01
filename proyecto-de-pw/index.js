import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginaPrincipal from './src/pages/PaginaPrincipal'
import Login from './src/pages/Login'
import NavBar from './src/components/NavBar';
import NotFoundPage from './src/pages/NotFoundPage';
import Reviews from './src/pages/Reviews';
import Registro from './src/pages/Registro';
import Footer from './src/components/Footer';
import About from './src/pages/About';
import ArmadoPrincipiantes from './src/pages/ArmadoPrincipiantes';
import Support from './src/pages/Support';
import Guides from './src/pages/SupportElements/Guides';
import Faq from './src/pages/SupportElements/Faq';
import SubmitTicket from './src/pages/SupportElements/SubmitTicket';
import RankingPerifericos from './src/pages/RankingPerifericos';
import RankingPc from './src/pages/RankingPc';
import User from './src/pages/User';
import ArmadoAvanzado from './src/pages/ArmadoAvanzado'
import Carrito from './src/pages/Carrito';
import Compra from './src/pages/Compra';
import BeginnerRecommendation from './src/pages/BeginnerRecommendation'



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
