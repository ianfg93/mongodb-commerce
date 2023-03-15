db.produtos.insert({ franquia: "McDonalds",
totalProdutos: db.produtos.count({}) });

db.produtos.find({ }, {
  franquia: 1,
  totalProdutos: 1,
  _id: false,
});