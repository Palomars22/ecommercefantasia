import './index.css';

import App from 'App';
import Header from 'components/Header/header';
import Erro from 'pages/Erro/erro';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import store from './store/modules';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<App />} />         
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </Provider>
);
