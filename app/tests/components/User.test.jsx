import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import configureStore from '../../js/dev/store/configureStore';
import User from '../../js/dev/components/User';
import Logout from '../../js/dev/components/Logout';
import Login from '../../js/dev/components/Login';

describe('User component', () => {
    it('should exist', () => {
        expect(User).toExist();
    });

    // it('should render user if it exists', () => {
    //     var user, store, provider, userHTML, logout;

    //     user = {
    //         name: 'Serg',
    //         password: '111',
    //         isLoggedIn: true
    //     };
    //     store = configureStore({user});
    //     provider = TestUtils.renderIntoDocument(<Provider store={store}><User/></Provider>);
    //     userHTML = TestUtils.scryRenderedComponentsWithType(provider, User)[0];
    //     logout = TestUtils.scryRenderedComponentsWithType(userHTML, Logout);

    //     expect(logout.length).toBe(1);
    // });

    it('should not render user if it does not exist', () => {
        var store, provider, userHTML, login;

        store = configureStore({});
        provider = TestUtils.renderIntoDocument(<Provider store={store}><User/></Provider>);
        userHTML = TestUtils.scryRenderedComponentsWithType(provider, User)[0];
        login = TestUtils.scryRenderedComponentsWithType(userHTML, Login);
        
        expect(login.length).toBe(1);
    });
});
