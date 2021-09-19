import { DARK_MODE, LIGHT_MODE, SET_SELECTED_COMM } from "./actions";

const initialState = {
    
    selectedCommunity : '',
    theme : 'dark',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case DARK_MODE:
            return{
                ...state,
                 theme : 'dark'
            };
        case LIGHT_MODE :
            return{
                ...state,
                theme : 'light'
            };
        case SET_SELECTED_COMM:
            return{
                ...state,
                selectedCommunity : action.payload
            }
        default:
            return state;
    }
}

export default reducer;