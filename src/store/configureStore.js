import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './reducers';
// import rootSaga from './sagas';

export const configureStore = (initialState = {}) => {
    // const SagaMiddleware = createSagaMiddleware();
    // const applyMiddleware = [routerMiddleware(history), sagaMiddleware()];

    const composeEnchancer = process.env.NODE_ENV !== 'production'
        && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
    
        // const enchancer = composeEnchancer(applyMiddleware(...middleware));

        const store = createStore(
            rootReducer,
            // enchancer
        );

        // sagaMiddleware.run(rootSaga);

        return store;
};
