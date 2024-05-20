import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const root = createRoot(document.getElementById('root'));


// const providerConfig = {
//   domain: process.env.REACT_APP_AUTH0_DOMAIN,
//   clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
//   authorizationParams={{
//     redirect_uri: window.location.origin
//   }>}
//   //   audience: process.env.REACT_APP_AUTH0_AUDIENCE,
//   // },
// };

console.log(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`)
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      // audience: `https://${process.env.REACT_APP_AUTH0_AUDIENCE}/api/v2/`, // TODO audience not found but exists... i think it should be this one but maby connect with application?
      audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
      scope: "read:messages"
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();