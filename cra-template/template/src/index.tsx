import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "index.css";
import App from "components/App";
import MsalProvider from "@intility/react-msal";
import * as serviceWorker from "serviceWorker";

if (process.env.environment !== "development") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_SENTRY_RELEASE,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
  });
}

const msal = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    // if multi-tenant, use https://login.microsoftonline.com/common
    authority:
      "https://login.microsoftonline.com/9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6",
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
  },
  endpoints: {
    "https://graph.microsoft.com": ["User.Read"],
  },
};

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider config={msal} forced>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
