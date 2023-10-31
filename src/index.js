import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { UserProvider } from "./Context/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
