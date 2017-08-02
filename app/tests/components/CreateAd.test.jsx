import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import ConnectedCreateAd, {CreateAd} from '../../js/dev/components/CreateAd';

describe('CreateAd component', () => {
    it('should exist', () => {
        expect(CreateAd).toExist();
    });

    it('should dispatch CREATE_AD action on submit', () => {
        var user, spy, createAd, title, description, form;

        user = {name: 'Serg', password: '111', isLoggedIn: true};
        spy = expect.createSpy();
        createAd = TestUtils.renderIntoDocument(<CreateAd dispatch={spy} user={user} params={{}} />);

        title = 'Test title';
        description = 'Test desc';

        createAd.refs.title.value = title;
        createAd.refs.description.value = description;

        form = $(ReactDOM.findDOMNode(createAd)).find('form')[0];
        TestUtils.Simulate.submit(form);

        expect(createAd.refs.title.value).toEqual(title);
        expect(createAd.refs.description.value).toEqual(description);
        expect(spy).toHaveBeenCalled();
    });

    it('should not dispatch CREATE_AD action on submit if title or description is empty', () => {
        var spy, createAd, title, description, form;

        spy = expect.createSpy();
        createAd = TestUtils.renderIntoDocument(<CreateAd dispatch={spy} params={{}} />);

        title = '';
        description = 'Test desc';

        createAd.refs.title.value = title;
        createAd.refs.description.value = description;

        form = $(ReactDOM.findDOMNode(createAd)).find('form')[0];
        TestUtils.Simulate.submit(form);
        
        expect(spy).toNotHaveBeenCalled();
    });

    it('should dispatch EDIT_AD action on submit', () => {
        var ads, spy, createAd, form, newTitle, newDescription;

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

        spy = expect.createSpy();
        createAd = TestUtils.renderIntoDocument(<CreateAd dispatch={spy} params={{id: 1}} ads={ads} />);

        newTitle = 'New title';
        newDescription = 'New description';

        createAd.refs.title.value = newTitle;
        createAd.refs.description.value = newDescription;

        form = $(ReactDOM.findDOMNode(createAd)).find('form')[0];
        TestUtils.Simulate.submit(form);

        expect(spy).toHaveBeenCalled();
    });
});
