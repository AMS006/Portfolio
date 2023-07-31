import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ModeChange from './components/ModeChange';
import { UserContextProvider } from './UserContext';
import Download from './components/Download';

const root = ReactDOM.createRoot(document.getElementById('root'))
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <UserContextProvider>
      <ModeChange />
      <App />
      <Download />
    </UserContextProvider>
  </BrowserRouter>
);