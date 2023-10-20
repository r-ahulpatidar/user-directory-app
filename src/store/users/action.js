// Get Action name constatnt
export const GET_USER_ACTION = "GET_USER_ACTION";
export const GET_USER_SUCCESS = `${GET_USER_ACTION}_SUCCESS`;
export const GET_USER_FAILURE = `${GET_USER_ACTION}_FAILURE`;

// action creators for method "PRODUCT
export const getUserAction = () => ({
  type: GET_USER_ACTION,
});

export const getUserSuccessAction = (payload) => ({
  type: GET_USER_SUCCESS,
  payload: payload,
});

export const getUserFailureAction = (payload) => ({
  type: GET_USER_FAILURE,
  payload: payload,
});
