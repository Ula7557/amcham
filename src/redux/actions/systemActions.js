import {CONSTANTS} from "../constants";

export const change_language = data => ({
    type: CONSTANTS.CHANGE_LANGUAGE,
    payload: data
});
export const set_banner = data => ({
    type: CONSTANTS.SET_BANNER,
    payload: data
});
export const set_why = data => ({
    type: CONSTANTS.SET_WHY,
    payload: data
});
export const set_modal = data => ({
    type: CONSTANTS.SET_MODAL,
    payload: data
});
export const set_chair_modal = data => ({
    type: CONSTANTS.SET_CHAIR_MODAL,
    payload: data
});
export const set_user = data => ({
    type: CONSTANTS.SET_USER,
    payload: data
});
export const set_pages = data => ({
    type: CONSTANTS.SET_PAGES,
    payload: data
});

