db.produtos.updateMany({}, {
  $set: { criadoPor: "Ronald McDonald" },
},
{
  upsert: true,
});

db.produtos.find({}, {
  nome: 1,
  criadoPor: 1,
  _id: false,
});