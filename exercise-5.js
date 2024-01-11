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
    $sort: { "_id.year": -1, "_id.month": -1 },
  },
]);
