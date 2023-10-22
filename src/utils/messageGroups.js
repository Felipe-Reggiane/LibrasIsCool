export function AgruparChatsPorData(chats) {
  const hoje = new Date();

  const grupos = [
    { groupTitle: "Hoje", chats: [] },
    { groupTitle: "Ontem", chats: [] },
    { groupTitle: "Há 7 dias", chats: [] },
    { groupTitle: "Há 30 dias", chats: [] },
    { groupTitle: "Há mais de 60 dias", chats: [] },
  ];

  chats.forEach((chat) => {
    const dataChat = new Date(chat.created_at);
    const diferencaDias = Math.floor((hoje - dataChat) / (1000 * 60 * 60 * 24));

    if (diferencaDias === 0) {
      grupos[0].chats.push(chat);
    } else if (diferencaDias === 1) {
      grupos[1].chats.push(chat);
    } else if (diferencaDias <= 7) {
      grupos[2].chats.push(chat);
    } else if (diferencaDias <= 30) {
      grupos[3].chats.push(chat);
    } else {
      grupos[4].chats.push(chat);
    }
  });

  return grupos.filter((grupo) => grupo.chats.length > 0);
}
