'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from   'redux-thunk'
import createLogger    from   'redux-logger'
import rootReducer     from   './reducer'
import { Provider }    from   'react-redux';

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var createHashHistory = require('history/lib/createHashHistory');

import HelloWorld from './View/helloWorld';
import ShowMessage from './View/showMessage';
import Home from './view/home';

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

var store = configureStore();
var createComponent = (Component, props) => {
    return <Component {...props} />;
};
    ReactDOM.render(
        <Provider store={store}>
            <Router history={createHashHistory({queryKey: false})} createElement={createComponent}>
              <Route path="/" component={Home}>
                <Route path="app/helloWorld" component={HelloWorld}></Route>
                <Route path="app/showMessage" component={ShowMessage}></Route>
              </Route>
            </Router>
        </Provider>,
        document.getElementById("root")
    );
