// Paste the complete MQL here
db.getCollection("pizzaOrders").aggregate([
  {
    $group: {
      _id: {
        year: { $year: { $toDate: "$created_at" } },
        month: { $month: { $toDate: "$created_at" } },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  {
    $match: { "_id.month": 7, "_id.year": 2021 },
  },
]);
