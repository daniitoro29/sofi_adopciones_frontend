// Nos da un estado global, que es un objeto de js
// Ese objeto puede ser modificado unicamente por reducer
// Reducer es una función

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk"; // Le permite a redux hacer operaciones asincronas

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
)

export default store;
