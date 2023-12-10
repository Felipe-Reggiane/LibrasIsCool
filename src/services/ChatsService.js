import { api } from "./Api";

const Authorization = localStorage.getItem("authorization");

export const getAllChatsTitles = async (authorization) => {
  try {
    const { data } = await api.get(`/users/chats`, {
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

export const getChatMessages = async (chatId, authorization) => {
  try {
    const { data } = await api.get(`/users/chats/${chatId}/messages`, {
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

export const postChatMessage = async (chatId, content, authorization) => {
  try {
    const { data } = await api.post(
      `/users/chats/${chatId}/messages`,
      { content },
      {
        headers: {
          Authorization: "Bearer " + authorization,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const createChat = async (title, authorization) => {
  try {
    const { data } = await api.post(
      `/users/chats`,
      { title },
      {
        headers: {
          Authorization: "Bearer " + authorization,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
