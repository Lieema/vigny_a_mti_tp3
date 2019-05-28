import { ADD_TWEET, DELETE_TWEET, UPDATE_TWEET } from "../constants/action-types";

export function addTweet(payload) {
    return { type: ADD_TWEET, payload }
}

export function deleteTweet(payload) {
    return { type: DELETE_TWEET, payload }
}

export function updateTweet(payload) {
    return { type: UPDATE_TWEET, payload }
}