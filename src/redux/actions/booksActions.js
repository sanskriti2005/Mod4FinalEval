import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST"

export const fetchBooks = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BOOKS_REQUEST, payload: true });
    const res = await axios
      .get("https://mod4finaleval-default-rtdb.firebaseio.com/books.json")
      .finally(dispatch({ type: FETCH_BOOKS_REQUEST, payload: false }));

    const data = await res.data;
    const arr = Object.entries(data).map(([key, value]) => {
      return { id: key, ...value };
    });

    dispatch({type: FETCH_BOOKS_SUCCESS, payload: arr})
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};

export const addBooksToUsersList = (bookObj, userId) => async (dispatch) => {
  try {
    const res = await axios.post(`https://mod4finaleval-default-rtdb.firebaseio.com//users/${userId}/myBooks/${bookObj.id}.json`, bookObj)
    dispatch({type:ADD_BOOK_TO_USER_LIST, dispatch: bookObj})
    alert('Book added to your list!')
  } catch (error) {
    console.log(error)
  }
}
