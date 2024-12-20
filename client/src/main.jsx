import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const frontend = process.env.FRONTEND_URL;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-adr7kqmqs2cdpsbl.us.auth0.com"
     clientId="I4z5hQHzqxtgJIxFUjpSl8hxa39iiQCE"
     authorizationParams={{
       redirect_uri: "https://homzy-7dbv.onrender.com",
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
