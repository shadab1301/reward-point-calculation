import React from "react";
import { calculateRewardPoints } from "../../utility/utility";

const TransactionTable = ({ transactions = [] }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Purchased Product</th>
            <th>Product Price</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.customerName}</td>
              <td>{transaction.purchaseDate}</td>
              <td>{transaction.purchaseProduct}</td>
              <td>${transaction.price.toFixed(2)}</td>
              <td>{calculateRewardPoints(transaction.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
