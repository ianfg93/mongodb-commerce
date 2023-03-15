db.resumoProdutos.insert({ franquia: "McDonalds",
totalProdutos: db.produtos.count({}) });

db.resumoProdutos.find({ }, {
  franquia: 1,
  totalProdutos: 1,
  _id: false,
});