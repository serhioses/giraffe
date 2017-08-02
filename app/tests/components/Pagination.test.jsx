import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import {Pagination} from '../../js/dev/components/Pagination';

describe('Pagination component', () => {
    it('should exist', () => {
        expect(Pagination).toExist();
    });

    it('should dispatch SET_CURRENT_PAGE action on click', () => {
        var spy, pagination, button;

        spy = expect.createSpy();
        pagination = TestUtils.renderIntoDocument(<Pagination dispatch={spy} totalPages={5} currentPage={2} />);

        button = $(ReactDOM.findDOMNode(pagination)).find('button.pagination__item')[0];

        TestUtils.Simulate.click(button);

        expect(spy).toHaveBeenCalled();
    });

    it('should not dispatch SET_CURRENT_PAGE action on click if it is a current page', () => {
        var spy, pagination, button;

        spy = expect.createSpy();
        pagination = TestUtils.renderIntoDocument(<Pagination dispatch={spy} totalPages={5} currentPage={2} />);

        button = $(ReactDOM.findDOMNode(pagination)).find('.pagination__item--active')[0];

        TestUtils.Simulate.click(button);

        expect(spy).toNotHaveBeenCalled();
    });
});
