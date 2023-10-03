import { messagesByDate } from "../utils/messagesByDate";

const mock = [
  {
    id: 1,
    title: "mensagem teste",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000), // Data de ontem
    messages: [
      {
        id: 1,
        content: "primeira mensagem",
      },
      {
        id: 2,
        content: "segunda mensagem",
      },
    ],
  },
  {
    id: 2,
    title: "teste",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // Data de 5 dias atrás
    messages: [
      {
        id: 1,
        content: "futebol",
      },
      {
        id: 2,
        content: "testar",
      },
    ],
  },
  {
    id: 3,
    title: "titulo",
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // Data de 20 dias atrás
    messages: [
      {
        id: 1,
        content: "gol",
      },
      {
        id: 2,
        content: "carro",
      },
    ],
  },
  {
    id: 4,
    title: "testando",
    date: new Date("2023-09-01"), // Data do mês passado
    messages: [
      {
        id: 1,
        content: "mês passado",
      },
      {
        id: 2,
        content: "outra mensagem",
      },
    ],
  },
];

// Adicionando um item de hoje
mock.push({
  id: 5,
  title: "outro teste",
  date: new Date(), // Data de hoje
  messages: [
    {
      id: 1,
      content: "mensagem de hoje",
    },
    {
      id: 2,
      content: "outra mensagem de hoje",
    },
  ],
});

// Adicionando um item de 2 dias atrás
mock.push({
  id: 6,
  title: "testeeee",
  date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Data de 2 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 2 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 2 dias atrás",
    },
  ],
});

// Adicionando um item de 15 dias atrás
mock.push({
  id: 7,
  title: "aaaaaa",
  date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // Data de 15 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 15 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 15 dias atrás",
    },
  ],
});

// Adicionando um item de 35 dias atrás
mock.push({
  id: 8,
  title: "aaaaaa",
  date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000), // Data de 35 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 35 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 35 dias atrás",
    },
  ],
});

// Adicionando um item de 40 dias atrás
mock.push({
  id: 9,
  title: "aaaaaa",
  date: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000), // Data de 40 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 40 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 40 dias atrás",
    },
  ],
});

// Adicionando um item de 60 dias atrás
mock.push({
  id: 10,
  title: "bbbbbb",
  date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // Data de 60 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 60 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 60 dias atrás",
    },
  ],
});

// Adicionando um item de 75 dias atrás
mock.push({
  id: 11,
  title: "cccccc",
  date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000), // Data de 75 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 75 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 75 dias atrás",
    },
  ],
});

// Adicionando um item de 100 dias atrás
mock.push({
  id: 12,
  title: "dddddd",
  date: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000), // Data de 100 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 100 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 100 dias atrás",
    },
  ],
});

// Adicionando um item de 120 dias atrás
mock.push({
  id: 13,
  title: "zzzzzzzz",
  date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // Data de 120 dias atrás
  messages: [
    {
      id: 1,
      content: "mensagem de 120 dias atrás",
    },
    {
      id: 2,
      content: "outra mensagem de 120 dias atrás",
    },
  ],
});

const mockFiltred = messagesByDate(mock);

export default mockFiltred;
