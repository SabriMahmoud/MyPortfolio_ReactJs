import ReactDOM from 'react-dom'
import React  from 'react';
import App from './App.jsx';
import './index.css'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from './reportWebVitals.js';

Sentry.init({
    dsn: "https://cf8c7a69e6aa4d4cb9386180738a4fdd@o1277095.ingest.sentry.io/6474411",
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
ReactDOM.render(<App/>, document.querySelector('#root')); 
reportWebVitals();