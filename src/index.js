import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, HashRouter, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { configureStore } from './store/configureStore';
import App from './containers/App/App';
import "semantic-ui-css/semantic.min.css";


export const history = createHistory();
const store = configureStore(history);

// const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={ store }>
        <Router history = { history }>
            <Route path = '/' component={ App } />
        </Router>
    </Provider>
, document.getElementById('root'));
