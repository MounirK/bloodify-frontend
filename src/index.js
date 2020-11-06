import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Countdown from './components/Countdown/Countdown';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
