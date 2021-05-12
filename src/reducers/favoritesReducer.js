import { TOGGLE_FAVORITES, REMOVE_FAVORITES, ADD_FAVORITES } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        case REMOVE_FAVORITES:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }

        case ADD_FAVORITES:
            //console.log(action.payload);
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        default:
            return state;
    }
}

export default favoritesReducer;