import {GET_COLUMNS} from "./types";

export const getSelectedColumns = columns => {
    return {
        type: GET_COLUMNS,
        payload: columns
    }
};