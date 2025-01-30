import React from "react";
import { CalTotalRewardsByEachCustomer, getlastThreeMonthsTransactions } from "../../utility/utility";

const LastThreeMonthTranTable = ({ transactions = [] }) => {
  const lastThreeMonthsRewards = CalTotalRewardsByEachCustomer(
    getlastThreeMonthsTransactions(transactions)
  );

  return (
    <div>
       <h2>Last Three Months Rewards</h2>
      <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Transactions</th>
            <th>Total Spent ($)</th>
            <th>Reward Points</th>
            <th>Date Range</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(lastThreeMonthsRewards).map(
            ([
              customerName,
              { rewardPoints, totalTransactions, totalSpent,dateRange },
            ]) => (
              <tr key={customerName}>
                <td>{customerName}</td>
                <td>{totalTransactions}</td>
                <td>${totalSpent.toFixed(2)}</td>
                <td>{rewardPoints}</td>
                <td>{dateRange}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LastThreeMonthTranTable;