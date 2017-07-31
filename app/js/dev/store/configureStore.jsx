import * as redux from 'redux';
import thunk from 'redux-thunk';

import {userReducer, adsReducer, totalPagesReducer, currentPageReducer} from '../reducers/reducers';

export default (function () {
    var store;

    return function configure (initialState = {}) {
        var reducer;

        if (store) {
            return store;
        }

        reducer = redux.combineReducers({
            user: userReducer,
            ads: adsReducer,
            totalPages: totalPagesReducer,
            currentPage: currentPageReducer
        });

        store = redux.createStore(reducer, initialState, redux.compose(
            redux.applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));

        return store;
    };
}())
