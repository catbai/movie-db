import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";


const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // typeof window === "object" &&
    //   typeof window.devToolsExtension === "undefined" ? window.devToolsExtension() : f => f
  ));

export default store;