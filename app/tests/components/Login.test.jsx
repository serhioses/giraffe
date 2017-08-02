import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import {Login} from '../../js/dev/components/Login';

describe('Login component', () => {
    it('should exist', () => {
        expect(Login).toExist();
    });

    it('should dispatch ADD_USER action if valid data passed', () => {
        var name, password, spy, login, form;

        name = 'Serg';
        password = '111';
        spy = expect.createSpy();

        login = TestUtils.renderIntoDocument(<Login dispatch={spy} />);
        form = $(ReactDOM.findDOMNode(login)).find('form')[0];

        login.refs.name.value = name;
        login.refs.password.value = password;

        TestUtils.Simulate.submit(form);

        expect(spy).toHaveBeenCalled();
    });

    it('should not dispatch ADD_USER action if invalid data passed', () => {
        var name, password, spy, login, form;

        name = 'Serg';
        password = '';
        spy = expect.createSpy();

        login = TestUtils.renderIntoDocument(<Login dispatch={spy} />);
        form = $(ReactDOM.findDOMNode(login)).find('form')[0];

        login.refs.name.value = name;
        login.refs.password.value = password;

        TestUtils.Simulate.submit(form);

        expect(spy).toNotHaveBeenCalled();
    });
});
