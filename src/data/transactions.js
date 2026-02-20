// src/data/transactions.js
const transactions = [
  {
    id: 1,
    beneficiary: "Ali Khan",
    account: "QA123456789",
    amount: 500,
    purpose: "Education",
    paymentMethod: "Bank Transfer",
    type: "Local",
    note: "Monthly tuition",
    status: "Pending",
    date: "2026-02-19",
  },
  {
    id: 2,
    beneficiary: "Sara Ahmed",
    account: "QA987654321",
    amount: 1500,
    purpose: "Business",
    paymentMethod: "Card",
    type: "International",
    note: "",
    status: "Completed",
    date: "2026-02-18",
  },
  {
    id: 3,
    beneficiary: "Mohammed Ali",
    account: "QA112233445",
    amount: 800,
    purpose: "Medical",
    paymentMethod: "Wallet",
    type: "Local",
    note: "Checkup",
    status: "Pending",
    date: "2026-02-17",
  },
];

export default transactions;
