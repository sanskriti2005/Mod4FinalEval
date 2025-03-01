import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/booksActions"


const initState = { loading: false, error: null, books:null, myBooks: [] }

export const bookReducer = (state=initState, action) => {
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return {...state, loading: action.payload}
        case FETCH_BOOKS_SUCCESS:
            return {...state, books: action.payload}
        case FETCH_BOOKS_FAILURE:
            return {...state, error: action.payload}
        default:
            return state

    }
}