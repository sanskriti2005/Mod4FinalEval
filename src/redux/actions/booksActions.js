import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

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
