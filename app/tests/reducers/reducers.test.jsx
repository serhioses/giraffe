import expect from 'expect';
import df from 'deep-freeze-strict';

import userAPI from '../../js/dev/api/userAPI';
import * as reducers from '../../js/dev/reducers/reducers';

describe('Reducers', () => {
    it('should exist', () => {
        expect(reducers).toExist();
    });

    describe('User reducers', () => {
        it('should add/login a user', () => {
            var user, action, result;

            user = {
                name: 'Serg',
                password: '111',
                isLoggedIn: true
            };
            action = {
                type: 'ADD_USER',
                name: user.name,
                password: user.password
            };


            result = reducers.userReducer(userAPI.getLoggedInUser(), df(action));

            expect(result).toEqual(user);
        });

        it('should not add/login a user if invalid data', () => {
            var user1, user2, action, result;

            user1 = {
                name: 'Serg',
                password: '111',
                isLoggedIn: true
            };
            user2 = {
                name: 'Serg',
                password: '123',
                isLoggedIn: true
            };
            action = {
                type: 'ADD_USER',
                name: user2.name,
                password: user2.password
            };

            userAPI.addUser(user1);

            result = reducers.userReducer(df(userAPI.getLoggedInUser()), df(action));

            expect(result).toEqual(null);
        });

        it('should log out a user', () => {
            var user, action;

            user = {
                name: 'Serg',
                password: '111',
                isLoggedIn: true
            };
            action = {
                type: 'ADD_USER',
                name: user.name,
                password: user.password
            };


            reducers.userReducer(userAPI.getLoggedInUser(), action);

            reducers.userReducer(userAPI.getLoggedInUser(), df({type: 'LOGOUT'}));

            expect(userAPI.getLoggedInUser()).toEqual(null);
            expect(userAPI.getUsers()[0].isLoggedIn).toEqual(false);
        });
    });

    describe('Ads reducers', () => {
        it('should create an ad', () => {
            var ad, action, result;

            ad = {
                id: 1,
                title: 'title',
                description: 'description',
                author: 'author',
                createdAt: 123
            };
            action = {
                type: 'CREATE_AD',
                ...ad
            };

            result = reducers.adsReducer(df([]), df(action));

            expect(result.length).toBe(1);
            expect(result[0].title).toEqual(ad.title);
            expect(result[0].description).toEqual(ad.description);
        });

        it('should edit an ad', () => {
            var ad, action, result;

            ad = {
                id: 1,
                title: 'title',
                description: 'description',
                author: 'author',
                createdAt: 123
            };
            action = {
                type: 'EDIT_AD',
                id: 1,
                title: 'new title',
                description: 'new description'
            };

            reducers.adsReducer(df([]), df({type: 'CREATE_AD', ...ad}));
            result = reducers.adsReducer(df([{...ad}]), df(action));

            expect(result[0].title).toEqual(action.title);
            expect(result[0].description).toEqual(action.description);
        });

        it('should add ads', () => {
            var ads, action, result;

            ads = [
                {
                    id: 1,
                    title: 'title',
                    description: 'description',
                    author: 'author',
                    createdAt: 123
                },
                {
                    id: 2,
                    title: 'title 2',
                    description: 'description 2',
                    author: 'author 2',
                    createdAt: 124
                }
            ];
            action = {
                type: 'ADD_ADS',
                ads
            };

            result = reducers.adsReducer(df([]), df(action));

            expect(result.length).toBe(2);
            expect(result[0].title).toEqual('title');
            expect(result[1].description).toEqual('description 2');
        });

        it('should delete an ad', () => {
            var ads, action, result;

            ads = [
                {
                    id: 1,
                    title: 'title',
                    description: 'description',
                    author: 'author',
                    createdAt: 123
                },
                {
                    id: 2,
                    title: 'title 2',
                    description: 'description 2',
                    author: 'author 2',
                    createdAt: 124
                }
            ];

            reducers.adsReducer(df([]), df({type: 'ADD_ADS', ads}));

            action = {
                type: 'DELETE_AD',
                id: 2
            };

            result = reducers.adsReducer(df(ads), df(action));

            expect(result.length).toBe(1);
            expect(result[0].title).toEqual('title');
        });
    });

    describe('Pagination reducers', () => {
        it('should update total pages', () => {
            var action = {
                type: 'UPDATE_TOTAL_PAGES',
                totalPages: 3
            },
                result = reducers.totalPagesReducer(1, action);

            expect(result).toBe(action.totalPages);
        });

        it('should set current page', () => {
            var action = {
                type: 'SET_CURRENT_PAGE',
                currentPage: 4
            },
                result = reducers.currentPageReducer(1, action);

            expect(result).toBe(action.currentPage);
        });
    });
});
