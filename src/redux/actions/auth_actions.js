import {CONSTANTS} from "../constants";

export const set_auth_tokens = data => ({
    type: CONSTANTS.SET_AUTH_CREDENTIALS,
    payload: data
})
export const log_out = data => ({
    type: CONSTANTS.CLEAR_ON_SIGNOUT
})
export const chair_out = data => ({
    type: CONSTANTS.CHAIR_OUT
})
export const chair_in = data => ({
    type: CONSTANTS.SET_CHAIR_CREDENTIALS,
    payload: data
})
export const set_company = data => ({
    type: "SET_COMPANY",
    payload: data
})
