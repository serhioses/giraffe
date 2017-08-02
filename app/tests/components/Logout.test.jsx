import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import {Logout} from '../../js/dev/components/Logout';

describe('Logout component', () => {
    it('should exist', () => {
        expect(Logout).toExist();
    });

    it('should dispatch LOGOUT action on click', () => {
        var spy, logout, button;

        spy = expect.createSpy();

        logout = TestUtils.renderIntoDocument(<Logout dispatch={spy} />);
        button = $(ReactDOM.findDOMNode(logout)).find('.user__logout')[0];

        TestUtils.Simulate.click(button);

        expect(spy).toHaveBeenCalled();
    });
});
