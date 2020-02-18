

sankeyDraw(
  {
    'nodes': [
      {name: "Rua do Doutor Magalhaes Lemos"},
      {name: "Avenida da Boavista"},
      {name: "Rua de Santana"}

    ],
    'links': [
      {"source":"Rua do Doutor Magalhaes Lemos", "target": "Avenida da Boavista", "value": 3},
      {"source":"Avenida da Boavista", "target": "Rua de Santana", "value": 1},
      {"source": "Rua de Santana", "target":"Rua do Doutor Magalhaes Lemos", "value": 4}
    ],
    'sinksRight': false
  }
);
