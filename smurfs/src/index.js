import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {combineReducers, createStore,compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


const monsterReducer = combineReducers({
    data: reducer,
})
const store = createStore(monsterReducer, {},
    compose(
      applyMiddleware(thunk /* ,etc , other middlewares */),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
    );

ReactDOM.render(
<Provider>
<App />
</Provider>,
 document.getElementById("root"));
