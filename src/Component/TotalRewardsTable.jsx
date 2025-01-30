import React from "react";
import { CalTotalRewardsByEachCustomer } from "../../utility/utility";

const TotalRewardsTable = ({ transactions = [] }) => {
  const totalRewards = CalTotalRewardsByEachCustomer(transactions);
  return (
    <div>
      <h2>Total Rewards</h2>
      <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Transactions</th>
            <th>Total Spent ($)</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(totalRewards).map(
            ([
              customerName,
              { rewardPoints, totalTransactions, totalSpent },
            ]) => (
              <tr key={customerName}>
                <td>{customerName}</td>
                <td>{totalTransactions}</td>
                <td>{totalSpent}</td>
                <td>{rewardPoints}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TotalRewardsTable;
