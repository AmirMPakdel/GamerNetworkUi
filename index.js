import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import navigationReducer from './src/store/reducers/navigationReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    navReducer: navigationReducer
});

const store = createStore(rootReducer, composeEnhancers());

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
