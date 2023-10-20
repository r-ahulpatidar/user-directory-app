import { GET_POST_FAILURE, GET_POST_SUCCESS } from "./action";

export const INITIAL_STATE = {
  posts: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
        error: "",
      };

    case GET_POST_FAILURE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default reducer;
