import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Main from './components/Main';
import Home from './components/Home';
import User from './components/User';
import CreateAd from './components/CreateAd';
import DeleteAd from './components/DeleteAd';
import Ad from './components/Ad';

import userAPI from './api/userAPI';
import adAPI from './api/adAPI';

import {addAds, updateTotalPages} from './actions/actions';
import configureStore from './store/configureStore';

var store = configureStore(),
    initialAds = adAPI.getAds();

store.subscribe(() => {
    var state = store.getState();

    console.log(state);

    adAPI.setAds(state.ads);
});

store.dispatch(addAds(initialAds));
store.dispatch(updateTotalPages(initialAds.length));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home}/>
            </Route>
            <Route path='edit/:id' component={CreateAd} />
            <Route path='edit' component={CreateAd} />
            <Route path='delete/:id' component={DeleteAd} />
            <Route path=':id' component={Ad} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
