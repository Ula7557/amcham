import {CONSTANTS} from "../constants";

const INITIAL_STATE = {
    language: "en",
    banner: [],
    why_join_us: [],
    modal: false,
    user: [],
    chairModal: false,
    pages: []
}

export default (state = INITIAL_STATE, {payload, type}) => {
    switch (type) {
        case CONSTANTS.CHANGE_LANGUAGE:
            return {
                ...state,
                language: payload,
            };
        case CONSTANTS.SET_USER:
            return {
                ...state,
                user: payload,
            };
        case CONSTANTS.SET_BANNER:
            return {
                ...state,
                banner: payload,
            };
        case CONSTANTS.SET_PAGES:
            return {
                ...state,
                pages: payload,
            };
        case CONSTANTS.SET_WHY:
            return {
                ...state,
                why_join_us: payload,
            };
        case CONSTANTS.SET_MODAL:
            return {
                ...state,
                modal: payload,
            };
        case CONSTANTS.SET_CHAIR_MODAL:
            return {
                ...state,
                chairModal: payload,
            };
        default:
            return state;
    }
};
