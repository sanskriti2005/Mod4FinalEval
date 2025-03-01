import { LOGIN_USER, REGISTER_USER } from "../actions/authActions";

const initState = { user: localStorage.getItem("user") || [] };
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case LOGIN_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
