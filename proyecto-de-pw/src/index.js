import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
=======
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


import { BrowserRouter, Route, Routes } from 'react-router-dom';

>>>>>>> a60ad26fe93fe4098aeb80ca8fd0a9872e4b2597

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
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
    
    

  </Routes>
  </BrowserRouter>
  <Footer/>
  </React.StrictMode>
);
>>>>>>> a60ad26fe93fe4098aeb80ca8fd0a9872e4b2597
