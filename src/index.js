import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { UserProvider } from "./Context/context";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <UserProvider>
    <App />
    </UserProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
