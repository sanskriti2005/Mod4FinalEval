import { ADD_BOOK_TO_USER_LIST, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_MY_BOOKS, UPDATE_BOOK_STATUS } from "../actions/booksActions"


const initState = { loading: false, error: null, books:null, myBooks: [] }

export const bookReducer = (state=initState, action) => {
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return {...state, loading: action.payload}
        case FETCH_BOOKS_SUCCESS:
            return {...state, books: action.payload, myBooks: []}
        case FETCH_BOOKS_FAILURE:
            return {...state, error: action.payload}
        case FETCH_MY_BOOKS:
            return {...state, myBooks: action.payload}
        case ADD_BOOK_TO_USER_LIST:
            let updatedMyBooks = [...state.myBooks, action.payload]
            return {...state, myBooks: updatedMyBooks }

        case UPDATE_BOOK_STATUS:
            let updated = state.myBooks.map((book) => book.id === action.payload.bookId ? {...book, status: "Read"} : book)
            return {...state, myBooks: updated}
        default:
            return state

    }
}