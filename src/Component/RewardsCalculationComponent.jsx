import React, { useEffect, useState } from "react";
import TransactionTable from "./TransactionTable";
import LastThreeMonthTranTable from "./LastThreeMonthTranTable";
import TotalRewardsTable from "./TotalRewardsTable";
import LoadingSpinner from "./Loader/loader";
import { fetchData } from "../../utility/utility";
import MonthlyRewardTable from "./Test/MonthlyBasisReward";

const RewardsCalculation = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setTransactions(data);
      } catch (err) {
       console.log({error:err})
      } finally {
        setLoading(false);
      }
    };
    fetchTransactionData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1>Reward Points Dashboard</h1>
          {/* Transactions Table */}
          <TransactionTable transactions={transactions} />
          {/* Last Three Months Rewards Table */}
          <LastThreeMonthTranTable transactions={transactions} />
          {/* Total Rewards Table */}
          <TotalRewardsTable transactions={transactions} />
          {/* Monthly Rewards Table */}
          <MonthlyRewardTable transactions={transactions} />
        </>
      )}
    </div>
  );
};

export default RewardsCalculation;
