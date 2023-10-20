import { GET_COUNTRY_FAILURE, GET_COUNTRY_SUCCESS } from "./action";

export const INITIAL_STATE = {
  countries: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: [...state.countries, ...payload],
        error: "",
      };

    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default reducer;
