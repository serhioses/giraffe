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
