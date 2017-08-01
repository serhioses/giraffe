import expect from 'expect';

import userAPI from '../../js/dev/api/userAPI';

describe('userAPI', () => {
    beforeEach(() => {
        window.localStorage.removeItem('users');
    });

    it('should exist', () => {
        expect(userAPI).toExist();
    });

    describe('getUsers', () => {
        it('should return an empty array for bad localStorage data', () => {
            expect(userAPI.getUsers()).toEqual([]);
        });

        it('should return proper array for valid data in localStorage', () => {
            var mockUsers = [{name: 'Serg', password: '111', isLoggedIn: true}];

            userAPI.setUsers(mockUsers);

            expect(userAPI.getUsers()).toEqual(mockUsers);
            expect(JSON.parse(window.localStorage.getItem('users'))).toEqual(mockUsers);
        });
    });

    describe('setUsers', () => {
        it('should not set invalid users data', () => {
            var badUsersData = {name: 'Serg', password: '111', isLoggedIn: true};

            userAPI.setUsers(badUsersData);

            expect(window.localStorage.getItem('users')).toEqual(undefined);
        });

        it('should set valid users data', () => {
            var validUsersData = [{name: 'Serg', password: '111', isLoggedIn: true}];

            userAPI.setUsers(validUsersData);

            expect(userAPI.getUsers()).toEqual(validUsersData);
            expect(JSON.parse(window.localStorage.getItem('users'))).toEqual(validUsersData);
        });
    });

    describe('addUser', () => {
        it('should not add/login user if existing name specified and passwords do not match', () => {
            var users = [{name: 'Serg', password: '111', isLoggedIn: true}];

            userAPI.setUsers(users);

            expect(userAPI.addUser({name: 'Serg', password: '112'})).toEqual(null);
        });

        it('should leave only one user logged in', () => {
            var users = [
                {name: 'Serg', password: '111', isLoggedIn: false},
                {name: 'Natasha', password: '111', isLoggedIn: true},
            ],
                newUser = {name: 'Michael', password: '111', isLoggedIn: true},
                allUsers,
                countLoggedUsers = 0, loggedUserName;

            userAPI.setUsers(users);
            userAPI.addUser(newUser);

            allUsers = userAPI.getUsers();

            allUsers.forEach((u) => {
                if (u.isLoggedIn) {
                    countLoggedUsers += 1;
                    loggedUserName = u.name;
                }
            });

            expect(allUsers.length).toBe(3);
            expect(countLoggedUsers).toBe(1);
            expect(loggedUserName).toEqual(newUser.name);
        });
    });

    describe('logout', () => {
        it('should set isLoggedIn property of each user to false', () => {
            var users = [
                {name: 'Serg', password: '111', isLoggedIn: false},
                {name: 'Natasha', password: '111', isLoggedIn: true},
            ],
                countLoggedUsers = 0;

            userAPI.setUsers(users);

            userAPI.logout();

            userAPI.getUsers().forEach((u) => {
                if (u.isLoggedIn) {
                    countLoggedUsers += 1;
                }
            });

            expect(countLoggedUsers).toBe(0);
        });
    });

    describe('getLoggedInUser', () => {
        it('should return null if no users in localStorage', () => {
            expect(userAPI.getLoggedInUser()).toEqual(null);
        });

        it('should return logged in user if it exists in localStorage', () => {
            var users = [
                {name: 'Serg', password: '111', isLoggedIn: false},
                {name: 'Natasha', password: '111', isLoggedIn: true},
            ];

            userAPI.setUsers(users);

            expect(userAPI.getLoggedInUser().name).toEqual('Natasha');
        });
    });
});
