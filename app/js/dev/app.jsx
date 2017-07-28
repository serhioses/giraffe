import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import User from './components/User';
import CreateAd from './components/CreateAd';
import DeleteAd from './components/DeleteAd';
import Ad from './components/Ad';
import {Provider} from 'react-redux';
// import TodoApp from 'TodoApp';

import userAPI from './api/userAPI';
import adAPI from './api/adAPI';

import {addAds} from './actions/actions';
import configureStore from './store/configureStore';

var store = configureStore(),
    initialAds = adAPI.getAds();

store.subscribe(() => {
    var state = store.getState();

    console.log(state);

    adAPI.setAds(state.ads);
});

store.dispatch(addAds(initialAds));

// ReactDOM.render(
//     <Provider store={store}>
//         <TodoApp/>
//     </Provider>,
//     document.getElementById('app')
// );
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home}/>
            </Route>
            <Route path='edit' component={CreateAd} />
            <Route path='delete/:id' component={DeleteAd} />
            <Route path=':id' component={Ad} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
