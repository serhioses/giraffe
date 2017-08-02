import React from 'react';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import configureStore from '../../js/dev/store/configureStore';
import Home from '../../js/dev/components/Home';
import User from '../../js/dev/components/User';
import AdList from '../../js/dev/components/AdList';
import Pagination from '../../js/dev/components/Pagination';

describe('Home component', () => {
    it('should exist', () => {
        expect(Home).toExist();
    });

    it('should render User', () => {
        var store = configureStore(),
            provider = TestUtils.renderIntoDocument(<Provider store={store}><Home/></Provider>),
            home = TestUtils.scryRenderedComponentsWithType(provider, Home)[0],
            user = TestUtils.scryRenderedComponentsWithType(home, User);

        expect(user.length).toBe(1);
    });

    it('should render AdList', () => {
        var store = configureStore(),
            provider = TestUtils.renderIntoDocument(<Provider store={store}><Home/></Provider>),
            home = TestUtils.scryRenderedComponentsWithType(provider, Home)[0],
            adList = TestUtils.scryRenderedComponentsWithType(home, AdList);

        expect(adList.length).toBe(1);
    });

    it('should render Pagination', () => {
        var store = configureStore(),
            provider = TestUtils.renderIntoDocument(<Provider store={store}><Home/></Provider>),
            home = TestUtils.scryRenderedComponentsWithType(provider, Home)[0],
            pagination = TestUtils.scryRenderedComponentsWithType(home, Pagination);

        expect(pagination.length).toBe(1);
    });
});
