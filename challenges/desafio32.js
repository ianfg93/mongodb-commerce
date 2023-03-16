db.produtos.find({ vendidos: { $mod: [5, 0] } },
{ nome: 1, _id: false, vendidos: 1 });
