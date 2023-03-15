db.produtos.find({ "valoresNutricionais.tipo": { $eq: "calorias", $lt: 500 } }, {
  nome: 1,
  _id: false,
});