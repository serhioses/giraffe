// import firebase, {firebaseRef} from 'app/js/dev/firebase/';
// import moment from 'moment';

export function addUser (name, password) {
    return {
        type: 'ADD_USER',
        name,
        password
    };
}

export function logout () {
    return {
        type: 'LOGOUT'
    };
}

export function createAd (id, title, description, author) {
    return {
        type: 'CREATE_AD',
        id,
        title,
        description,
        author,
        createdAt: new Date()
    };
}

export function editAd (id, title, description) {
    return {
        type: 'EDIT_AD',
        id,
        title,
        description
    };
}

export function addAds (ads) {
    return {
        type: 'ADD_ADS',
        ads
    };
}

export function deleteAd (id) {
    return {
        type: 'DELETE_AD',
        id
    };
}

export function updateTotalPages (totalAds) {
    return {
        type: 'UPDATE_TOTAL_PAGES',
        totalPages: Math.ceil(totalAds / 5)
    };
}

export function setCurrentPage (currentPage) {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    };
}

// export function setSearchText (searchText) {
//     return {
//         type: 'SET_SEARCH_TEXT',
//         searchText
//     };
// }

// export function addTodo (todo) {
//     return {
//         type: 'ADD_TODO',
//         todo
//     };
// }

// export function startAddTodo (text) {
//     return (dispatch, getState) => {
//         var todo, todoRef;

//         todo = {
//             text,
//             completed: false,
//             createdAt: Date.now() / 1000,
//             completedAt: null
//         };
//         todoRef = firebaseRef.child('todos').push(todo);
        
//         return todoRef.then(() => {
//             dispatch(addTodo({
//                 ...todo,
//                 id: todoRef.key
//             }));
//         });
//     };
// }

// export function addTodos (todos) {
//     return {
//         type: 'ADD_TODOS',
//         todos
//     };
// }

// export function toggleShowCompleted () {
//     return {
//         type: 'TOGGLE_SHOW_COMPLETED'
//     };
// }

// export function updateTodo (id, updates) {
//     return {
//         type: 'UPDATE_TODO',
//         id,
//         updates
//     };
// }

// export function startUpdateTodo (id, completed) {
//     return (dispatch, getState) => {
//         var todoRef = firebaseRef.child(`todos/${id}`),
//             updates = {
//                 completed,
//                 completedAt: completed ? moment().unix() : null
//             };

//         return todoRef.update(updates).then(() => {
//             dispatch(updateTodo(id, updates));
//         });
//     };
// }
