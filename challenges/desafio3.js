db.produtos.find({}, {
  nome: 1,
  vendidos: 1,
  _id: false,
}).sort({ vendidos: -1 }).limit(1);
