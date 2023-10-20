import { GET_USER_FAILURE, GET_USER_SUCCESS } from "./action";

export const INITIAL_STATE = {
  users: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...payload],
        error: "",
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default reducer;
