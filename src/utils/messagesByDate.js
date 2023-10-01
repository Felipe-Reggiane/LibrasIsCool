export function messagesByDate(dataList) {
  const hoje = new Date();
  const umDia = 24 * 60 * 60 * 1000; // Um dia em milissegundos

  const categorias = [
    { title: "Hoje", data: [] },
    { title: "Ontem", data: [] },
    { title: "Últimos 7 dias", data: [] },
    { title: "Últimos 30 dias", data: [] },
  ];

  const categoriasPorMes = {};

  dataList.forEach((item) => {
    const dataItem = new Date(item.date);
    const diferencaEmDias = Math.floor((hoje - dataItem) / umDia);

    if (diferencaEmDias === 0) {
      categorias[0].data.push(item);
    } else if (diferencaEmDias === 1) {
      categorias[1].data.push(item);
    } else if (diferencaEmDias <= 7) {
      categorias[2].data.push(item);
    } else if (diferencaEmDias <= 30) {
      categorias[3].data.push(item);
    } else {
      const ano = dataItem.getFullYear();
      const mes = dataItem.toLocaleString("default", { month: "long" });
      const chave = `${mes} de ${ano}`;

      if (!categoriasPorMes[chave]) {
        categoriasPorMes[chave] = { title: `${mes} de ${ano}`, data: [] };
      }

      categoriasPorMes[chave].data.push(item);
    }
  });

  // Ordenar as categorias por data
  for (const categoria in categoriasPorMes) {
    categoriasPorMes[categoria].data.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  return [...categorias, ...Object.values(categoriasPorMes)];
}
