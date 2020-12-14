import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    hotels:[],
    hotel:{}
}

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case 'SET_HOTELS':
            return {...state, hotels: action.payload}
        case 'SET_HOTEL_BY_ID':
            return {...state, hotel: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store