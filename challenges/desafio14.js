db.produtos.updateMany({ ingredientes: "picles" }, {
  $push: { valoresNutricionais: { $each: [], $slice: 3 } } },
{
  upsert: true,
});

db.produtos.find({ ingredientes: "picles" }, {
  nome: 1,
  ingredientes: 1,
  valoresNutricionais: 1,
  _id: false,
});