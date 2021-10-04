import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const appId = "DGZ4Qz7jVhu9QfbGCDwdLPqto7FnJ1fy3fox2e5r";
const serverId = "https://mvioc5vgpjqk.moralishost.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverId}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
