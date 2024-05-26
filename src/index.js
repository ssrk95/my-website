import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ReactGA from 'react-ga4'
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize('G-TXCX1CQXYN');

ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });

root.render(
  <App/>
);
