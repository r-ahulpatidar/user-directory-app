// Get Action name constant
export const GET_COUNTRY_LIST_ACTION = "GET_COUNTRY_ACTION";
export const GET_COUNTRY_SUCCESS = `${GET_COUNTRY_LIST_ACTION}_SUCCESS`;
export const GET_COUNTRY_FAILURE = `${GET_COUNTRY_LIST_ACTION}_FAILURE`;

// action creators for method "GET"
export const getCountryListAction = () => ({
  type: GET_COUNTRY_LIST_ACTION,
});

export const getCountryListSuccessAction = (payload) => ({
  type: GET_COUNTRY_SUCCESS,
  payload: payload,
});

export const getCountryListFailureAction = (payload) => ({
  type: GET_COUNTRY_FAILURE,
  payload: payload,
});
