import {CONSTANTS} from '../constants';

const INITIAL_STATE = {
    user_token: "",
    user_signature: "",
    chair_token: {committee_id: 0},
    company: ""
}
export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case "SET_COMPANY":
            return {
                ...state,
                company: payload
            };
        case CONSTANTS.SET_AUTH_CREDENTIALS:
            return {
                ...state,
                user_token: payload.user_token,
                user_signature: payload.user_signature
            };
        case CONSTANTS.SET_CHAIR_CREDENTIALS:
            return {
                ...state,
                chair_token: payload,
            };
        case CONSTANTS.CLEAR_ON_SIGNOUT:
            return {
                ...state,
                user_token: "",
                user_signature: "",
                chair_token: {committee_id: 0}
            };
        case CONSTANTS.CHAIR_OUT:
            return {
                ...state,
                chair_token: null
            };
        default:
            return state;
    }
}
