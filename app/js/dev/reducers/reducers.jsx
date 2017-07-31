// import moment from 'moment';

import userAPI from '../api/userAPI';

// var initialAdsState = {
//     adsList: [],
//     totalPages: 1,
//     currentPage: 1
// };

export function userReducer (state = userAPI.getLoogedInUser(), action) {
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

            return [...state, ad];
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
            return [...state, ...action.ads];
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

// export function searchTextReducer (state = '', action) {
//     switch (action.type) {
//         case 'SET_SEARCH_TEXT': {
//             return action.searchText;
//         }
//     }

//     return state;
// }

// export function showCompletedReducer (state = false, action) {
//     switch (action.type) {
//         case 'TOGGLE_SHOW_COMPLETED': {
//             return !state;
//         }
//     }

//     return state;
// }

// export function todosReducer (state = [], action) {
//     switch (action.type) {
//         case 'ADD_TODO': {
//             return [
//                 ...state,
//                 action.todo
//             ];
//         }
//         case 'ADD_TODOS': {
//             return [
//                 ...state,
//                 ...action.todos
//             ];
//         }
//         // case 'TOGGLE_TODO': {
//         //     return state.map((todo) => {
//         //         var nextCompleted;

//         //         if (todo.id === action.id) {
//         //             nextCompleted = !todo.completed;
                    
//         //             return {
//         //                 ...todo,
//         //                 completed: nextCompleted,
//         //                 completedAt: nextCompleted ? moment().unix() : null
//         //             };
//         //         }

//         //         return todo;
//         //     });
//         // }
//         case 'UPDATE_TODO': {
//             return state.map((todo) => {
//                 if (todo.id === action.id) {
//                     return {
//                         ...todo,
//                         ...action.updates
//                     };
//                 }

//                 return todo;
//             });
//         }
//     }

//     return state;
// }
