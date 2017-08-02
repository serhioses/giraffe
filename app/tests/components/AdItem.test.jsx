import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import {AdItem} from '../../js/dev/components/AdItem';

describe('AdItem component', () => {
    it('should exist', () => {
        expect(AdItem).toExist();
    });

    it('should render AdItem with proper ad properties', () => {
        var ad, adItem, el;

        ad = {
            id: 1,
            title: 'title 1',
            description: 'description 1',
            author: 'author',
            createdAt: 111
        };
        adItem = TestUtils.renderIntoDocument(<AdItem {...ad}/>);
        el = $(ReactDOM.findDOMNode(adItem));

        expect($(el).find('.ad-preview__title').text()).toEqual(ad.title);
        expect($(el).find('.ad-preview__desc').text()).toEqual(ad.description);
    });
});
