import userAPI from '../api/userAPI';

export function userReducer (state = userAPI.getLoggedInUser(), action) {
    switch (action.type) {
        case 'ADD_USER': {
            let user = userAPI.addUser({
                name: action.name,
                password: action.password,
                isLoggedIn: true
            });

            return user ? user : null;
        }
        case 'LOGOUT': {
            userAPI.logout();

            return null;
        }
    }

    return state;
}

export function adsReducer (state = [], action) {
    switch (action.type) {
        case 'CREATE_AD': {
            let ad = {
                title: action.title,
                description: action.description,
                author: action.author,
                createdAt: action.createdAt,
                id: action.id
            };

            return [ad, ...state];
        }
        case 'EDIT_AD': {
            return state.map((ad) => {
                if (+ad.id === +action.id) {
                    return {
                        ...ad,
                        title: action.title,
                        description: action.description
                    };
                }

                return ad;
            });
        }
        case 'ADD_ADS': {
            return [...action.ads, ...state];
        }
        case 'DELETE_AD': {
            return state.filter((ad) => {
                return parseInt(ad.id, 10) !== parseInt(action.id, 10);
            });
        }
    }

    return state;
}

export function totalPagesReducer (state = 1, action) {
    switch (action.type) {
        case 'UPDATE_TOTAL_PAGES': {
            return action.totalPages
        }
    }
    return state;
}

export function currentPageReducer (state = 1, action) {
    switch (action.type) {
        case 'SET_CURRENT_PAGE': {
            return action.currentPage
        }
    }

    return state;
}
