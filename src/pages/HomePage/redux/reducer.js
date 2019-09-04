import {GET_COLUMNS} from "./types";

export const HomePageReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COLUMNS:
            return { ...state, columns: action.payload };
        default:
            return state;
    }
};