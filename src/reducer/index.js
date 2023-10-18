import { YES_SHOW, NO_SHOW, FETCH_SUCCESS } from '../actions'

const initialState = {
    yes: false,
    no: false,
    data: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(YES_SHOW): {
            return {
                ...state,
                yes: !state.yes
            }
        }
        case(NO_SHOW): {
            return {
                ...state,
                no: !state.no
            };
        }
        case(FETCH_SUCCESS): {
            return {
                ...state,
                data: action.payload,
            }
        }
        default:
            return(state);
    }
}

export default reducer;