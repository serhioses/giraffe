import expect from 'expect';

import adAPI from '../../js/dev/api/adAPI';

describe('adAPI', () => {
    beforeEach(() => {
        window.localStorage.removeItem('ads');
    });

    it('should exist', () => {
        expect(adAPI).toExist();
    });

    describe('getAds', () => {
        it('should return an empty array for bad localStorage data', () => {
            expect(adAPI.getAds()).toEqual([]);
        });

        it('should return proper array for valid data in localStorage', () => {
            var mockAds = [{
                id: 1,
                title: 'title',
                description: 'description',
                author: 'author',
                createdAt: 123,
            }];

            adAPI.setAds(mockAds);

            expect(adAPI.getAds()).toEqual(mockAds);
            expect(JSON.parse(window.localStorage.getItem('ads'))).toEqual(mockAds);
        });
    });

    describe('setAds', () => {
        it('should not set invalid ads data', () => {
            var badAdsData = {title: 'title', description: 'description'};

            adAPI.setAds(badAdsData);

            expect(window.localStorage.getItem('ads')).toEqual(undefined);
        });

        it('should set valid ads data', () => {
            var validAdsData = [
                {
                    id: 1,
                    title: 'title',
                    description: 'description',
                    author: 'author',
                    createdAt: 123,
                },
                {
                    id: 2,
                    title: 'title 2',
                    description: 'description 2',
                    author: 'author 2',
                    createdAt: 124,
                }
            ];

            adAPI.setAds(validAdsData);

            expect(adAPI.getAds()).toEqual(validAdsData);
            expect(JSON.parse(window.localStorage.getItem('ads'))).toEqual(validAdsData);
        });
    });
});
