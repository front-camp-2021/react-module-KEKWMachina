import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RootProvider } from "./components/root-provider/root-provider";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </RootProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
