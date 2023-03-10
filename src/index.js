import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ModeChange from './components/ModeChange';
import { UserContextProvider } from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <ModeChange />
      <App />
    </UserContextProvider>
  </BrowserRouter>
);