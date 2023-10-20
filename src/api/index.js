import { COUNTRIES_API, POSTS_API, USERS_API } from "../config";

// fetch the data for all users
export const getUserApi = async () => {
  const response = await fetch(USERS_API, {
    method: "GET",
  });
  return await response.json();
};

// fetch the data for single users
export const getSingleUserApi = async (userId) => {
  const response = await fetch(`${USERS_API}/${userId}`, {
    method: "GET",
  });
  return await response.json();
};

// fetch the data for all posts
export const getPostApi = async () => {
  const response = await fetch(POSTS_API, {
    method: "GET",
  });
  return await response.json();
};

// get all countries list
export const getCountriesApi = async () => {
  const response = await fetch(COUNTRIES_API, {
    method: "GET",
  });
  return await response.json();
};

// get time for selected country
export const getTimeForSelectedCountry = async (selectedCountry) => {
  const response = await fetch(`${COUNTRIES_API}/${selectedCountry}`, {
    method: "GET",
  });
  return await response.json();
};
