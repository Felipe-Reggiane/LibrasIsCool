import { api } from "./Api";

const Authorization = localStorage.getItem("authorization");

export const loginUser = async (name, password) => {
  try {
    const { data } = await api.post(`/users/login`, {
      name,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const registerUser = async (name, password) => {
  try {
    const { data } = await api.post(`/users/register`, {
      name,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getToken = async () => {
  try {
    const { data } = await api.post(`/token`, {
      headers: {
        Authorization: "Bearer " + Authorization,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getUserInfo = async (authorization) => {
  try {
    const { data } = await api.get(`users/info`, {
      headers: {
        Authorization: "Bearer " + authorization,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
