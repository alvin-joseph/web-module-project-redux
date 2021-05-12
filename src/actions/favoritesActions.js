export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";

export const removeFavorites = (id) => {
    return({type: REMOVE_FAVORITES, payload:id});
}

export const addFavorites = favorite => {
    return ({
        type: ADD_FAVORITES,
        payload: favorite
    })
}

export const toggleFavorites = (toggle) => {
    return ({
        type: TOGGLE_FAVORITES,
        payload: toggle
    })
}