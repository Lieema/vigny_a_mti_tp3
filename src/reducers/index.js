import { ADD_TWEET, DELETE_TWEET, UPDATE_TWEET } from "../constants/action-types";

const initialState = {
    tweets: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TWEET:
            return Object.assign({}, state, {
                tweets: state.tweets.concat(action.payload)
            })
        case DELETE_TWEET:
            return Object.assign({}, state, {
                    tweets: state.tweets.filter((value) => value.id !== action.payload.id
            )})
        case UPDATE_TWEET:
            var tweetos = []
            state.tweets.forEach(element => {
                if (element.id == action.payload.id)
                    tweetos.push(action.payload)
                else
                    tweetos.push(element)
                return element
            });
            return Object.assign({}, {tweets: tweetos})
    }
    return state
}

export default rootReducer