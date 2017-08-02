import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import configureStore from '../../js/dev/store/configureStore';
import ConnectedAdList, {AdList} from '../../js/dev/components/AdList';
import AdItem from '../../js/dev/components/AdItem';

describe('AdList component', () => {
    it('should exist', () => {
        expect(AdList).toExist();
    });

    it('should render one AdItem component for each ad item', () => {
        var ads = [
            {
                id: 1,
                title: 'title',
                description: 'description',
                author: 'author',
                createdAt: 111
            },
            {
                id: 2,
                title: 'title 2',
                description: 'description 2',
                author: 'author 2',
                createdAt: 222
            }
        ],
            store = configureStore({
                ads
            }),
            provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedAdList/></Provider>),
            adList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedAdList)[0],
            adsComponents = TestUtils.scryRenderedComponentsWithType(adList, AdItem);

        expect(adsComponents.length).toBe(ads.length);
    });

    it('should render empty message if no ads', () => {
        var ads = [],
            adList = TestUtils.renderIntoDocument(<AdList ads={ads}/>),
            el = ReactDOM.findDOMNode(adList);

        expect($(el).find('.ads__empty').length).toBe(1);
    });
});
