var userAPI = {
    getUsers: function () {
        var stringUsers = localStorage.getItem('users'),
            users = [];

        try {
            users = JSON.parse(stringUsers);
        } catch (err) {

        }

        return Array.isArray(users) ? users : [];
    },
    setUsers: function (users) {
        if (!Array.isArray(users)) {
            return;
        }

        localStorage.setItem('users', JSON.stringify(users));

        return users;
    },
    addUser: function (user) {
        var users = this.getUsers(),
            i;

        for (i = 0; i < users.length; i += 1) {
            if (users[i].name === user.name) {
                if (users[i].password !== user.password) {
                    return {};
                }
            }
        }

        users = users.map((u) => {
            if (u.name !== user.name) {
                return {
                    ...u,
                    isLoggedIn: false
                };
            }

            return u;
        });

        this.setUsers([...users, user]);

        return user;
    },
    logout: function () {
        var users = this.getUsers().map((user) => {
            return {
                ...user,
                isLoggedIn: false
            };
        });

        this.setUsers(users);
    },
    getLoggedInUser: function () {
        var users = this.getUsers(),
            i;

        for (i = 0; i < users.length; i += 1) {
            if (users[i].isLoggedIn) {
                return users[i];
            }
        }

        return {};
    }
};

export default userAPI;
