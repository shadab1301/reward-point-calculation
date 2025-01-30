import { groupDataByMonth } from "../../../utility/utility";

const MonthlyRewardTable = ({ transactions = [] }) => {
  const MonthlyRewardData = groupDataByMonth(transactions);
  const months = Object.keys(MonthlyRewardData).sort((a,b)=>new Date(b)-new Date(a));
  const customers = Array.from(
    new Set(months.flatMap((month) => Object.keys(MonthlyRewardData[month])))
  );

  return (
    <div className="container">
      <h2>Users Monthly Rewards</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Month</th>
            {customers.map((customer) => (
              <th key={customer + "-points"} className="border p-2">{customer} (Reward Points)</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {months.map((month) => (
            <tr key={month} className="text-center">
              <td className="border p-2">{month}</td>
              {customers.map((customer) => (
                <td key={customer + "-points"} className="border p-2">
                  {MonthlyRewardData[month][customer]?.rewardPoints ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyRewardTable;
