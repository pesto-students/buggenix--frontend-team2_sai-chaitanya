import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import 'antd/dist/antd.css';

Sentry.init({
  dsn: "https://e259215cdad64fe5bb5dcd7be16f343c@o4504157959815168.ingest.sentry.io/4504157968007168",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain = "dev-sd1saebyup2pwl0w.us.auth0.com" clientId='dLYCZEjbhVid4W4KulF6QToqblkOQJjJ'  redirectUri='https://localhost:3001/dashboard'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
