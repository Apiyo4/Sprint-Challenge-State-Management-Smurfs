import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {combineReducers, createStore,compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { dataReducer, formReducer } from './state/reducers.js';


const monsterReducer = combineReducers({
    data: dataReducer,
    formData: formReducer 
})
const store = createStore(monsterReducer, 
    compose(
      applyMiddleware(thunk /* ,etc , other middlewares */),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
    );

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById("root"));
