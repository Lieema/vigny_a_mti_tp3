import { ADD_TWEET, DELETE_TWEET, UPDATE_TWEET } from "../constants/action-types";

const initialState = {
    tweets: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TWEET:
            state.tweets.push(action.payload)
            break
        case DELETE_TWEET:
            state.tweets.filter(function(value){
                return value.id != action.payload
            })
            break
        case UPDATE_TWEET:
            state.tweets.forEach(element => {
                if (element.id == action.payload.id) {
                    return payload
                }
                return element
            });
    }
    return state
}

export default rootReducer