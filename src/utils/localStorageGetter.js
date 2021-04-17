/** @format */

export const getUserFromLocalStorage = () => {
  let localStorageUser;

  if (localStorage.getItem("user")) {
    localStorageUser = JSON.parse(localStorage.getItem("user"));
  } else {
    localStorageUser = "błąd";
  }
  return localStorageUser;
};
