import { api } from "./Api";

export const getAllChatsTitles = async (userId) => {
  try {
    const { data } = await api.get(`/users/${userId}/chats`);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getChatMessages = async (userId, chatId) => {
  try {
    const { data } = await api.get(`/users/${userId}/chats/${chatId}/messages`);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const postChatMessage = async (userId, chatId, content) => {
  try {
    const { data } = await api.post(
      `/users/${userId}/chats/${chatId}/messages`,
      {
        content,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const createChat = async (userId, title) => {
  try {
    const { data } = await api.post(`/users/${userId}/chats`, {
      title,
    });

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
