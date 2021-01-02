import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
//
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

// Creates our store to use our reducers and the chrome extension to debug the redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // Connects the store to our application
  <Provider store={store}>
    <Header />
    <App />
  </Provider>,
  document.getElementById("root")
);
