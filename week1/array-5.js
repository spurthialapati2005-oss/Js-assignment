//Bank Transaction Analyzer
const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];

//1. filter() all credit transactions
let creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log(creditTransactions);

//2. map() to extract only transaction amounts
let transactionAmounts = transactions.map(txn => txn.amount);
console.log(transactionAmounts);

//3. reduce() to calculate final account balance
let finalBalance = transactions.reduce((balance, txn) => {
    return txn.type === "credit" ? balance + txn.amount : balance - txn.amount;
}, 0);
console.log(finalBalance);

//4. find() the first debit transaction
let firstDebit = transactions.find(txn => txn.type === "debit");
console.log(firstDebit);

//5. findIndex() of transaction with amount 10000
let result5 = transactions.findIndex(txn => txn.amount === 10000);
console.log(result5);