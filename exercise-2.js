// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_amount: -1 } }, // เพราะว่าเราเปลี่ยน key จาก total_price มาเป็น total_amount ดังนั้นเวลา .sort ต่อท้ายจึงต้องใช้ total_amount
]);
