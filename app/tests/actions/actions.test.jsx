import expect from 'expect';

import * as actions from '../../js/dev/actions/actions';

describe('Actions', () => {
    it('should exist', () => {
        expect(actions).toExist();
    });

    describe('User actions', () => {
        it('should generate ADD_USER action', () => {
            var action = {
                type: 'ADD_USER',
                name: 'Serg',
                password: '111'
            },
                result = actions.addUser(action.name, action.password);

            expect(result).toEqual(action);
        });

        it('should generate LOGOUT action', () => {
            var action = {
                type: 'LOGOUT'
            },
                result = actions.logout();

            expect(result).toEqual(action);
        });
    });

    describe('Ad actions', () => {
        it('should generate CREATE_AD action', () => {
            var action = {
                type: 'CREATE_AD',
                title: 'title',
                description: 'description',
                author: 'author'
            },
                result = actions.createAd(action.title, action.description, action.author);

            expect(result).toInclude({
                type: action.type,
                title: action.title
            });
        });

        it('should generate EDIT_AD action', () => {
            var action = {
                type: 'EDIT_AD',
                id: 1,
                title: 'title',
                description: 'description'
            },
                result = actions.editAd(action.id, action.title, action.description);

            expect(result).toEqual(action);
        });

        it('should generate ADD_ADS action', () => {
            var action = {
                type: 'ADD_ADS',
                ads: []
            },
                result = actions.addAds(action.ads);

            expect(result).toEqual(action);
        });

        it('should generate DELETE_AD action', () => {
            var action = {
                type: 'DELETE_AD',
                id: 1
            },
                result = actions.deleteAd(action.id);

            expect(result).toEqual(action);
        });
    });

    describe('Pagination actions', () => {
        it('should generate UPDATE_TOTAL_PAGES action', () => {
            var action = {
                type: 'UPDATE_TOTAL_PAGES',
                totalPages: Math.ceil(11 / 5)
            },
                result = actions.updateTotalPages(11);

            expect(result).toEqual(action);
        });

        it('should generate SET_CURRENT_PAGE action', () => {
            var action = {
                type: 'SET_CURRENT_PAGE',
                currentPage: 3
            },
                result = actions.setCurrentPage(3);

            expect(result).toEqual(action);
        });
    });
});
