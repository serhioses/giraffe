import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import {Ad} from '../../js/dev/components/Ad';

describe('Ad component', () => {
    it('should exist', () => {
        expect(Ad).toExist();
    });

    it('should properly render ad properties', () => {
        var ads, params, ad, el;

        ads = [
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
        ];
        params = {id: ads[1].id};
        ad = TestUtils.renderIntoDocument(<Ad ads={ads} params={params} user={{}} />);
        el = ReactDOM.findDOMNode(ad);

        expect($(el).find('.title').text()).toEqual(ads[1].title);
        expect($(el).find('.ad__desc').text()).toEqual(ads[1].description);
    });
});
