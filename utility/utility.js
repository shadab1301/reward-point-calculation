export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          customerName: "Pranjal",
          purchaseDate: "2025-01-15",
          purchaseProduct: "Game",
          price: 100.2,
        },
        {
          id: 2,
          customerName: "Ashraf",
          purchaseDate: "2024-12-10",
          purchaseProduct: "Notebook",
          price: 100.4,
        },
        {
          id: 3,
          customerName: "Shivam",
          purchaseDate: "2025-01-05",
          purchaseProduct: "Headphone",
          price: 50.9,
        },
        {
          id: 4,
          customerName: "Madhulika",
          purchaseDate: "2024-10-25",
          purchaseProduct: "Chocolate",
          price: 60,
        },
        {
          id: 5,
          customerName: "Madhulika",
          purchaseDate: "2025-01-15",
          purchaseProduct: "Mobile",
          price: 200,
        },
        {
          id: 6,
          customerName: "Shivam",
          purchaseDate: "2025-01-20",
          purchaseProduct: "Adapter",
          price: 90,
        },
        {
          id: 7,
          customerName: "Pranjal",
          purchaseDate: "2024-12-22",
          purchaseProduct: "Battery",
          price: 50,
        },
        {
          id: 9,
          customerName: "Riya",
          purchaseDate: "2024-11-18",
          purchaseProduct: "Bottle",
          price: 11,
        },
        {
          id: 10,
          customerName: "Ashraf",
          purchaseDate: "2023-12-15",
          purchaseProduct: "Bottle",
          price: 110,
        },
        {
          id: 11,
          customerName: "Madhulika",
          purchaseDate: "2022-05-07",
          purchaseProduct: "Bottle",
          price: 119,
        },
        {
          id: 12,
          customerName: "Riya",
          purchaseDate: "2024-08-06",
          purchaseProduct: "Bottle",
          price: 140,
        },
      ]);
    }, 1000);
  });
};

export const calculateRewardPoints = (price) => {
  let tempPrice = Math.floor(price);
  let points = 0;
  if (price > 100) {
    points += (tempPrice - 100) * 2 + 50;
  } else if (tempPrice < 100 && tempPrice > 50) {
    points += (Math.min(100, tempPrice) - 50) * 1;
  }
  return points;
};

export const CalTotalRewardsByEachCustomer = (transactionList) => {
  const currentDate = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
  const dateRange = `${threeMonthsAgo.toLocaleDateString()} to ${currentDate.toLocaleDateString()}`;
 
  return transactionList.reduce((acc, transaction) => {
    const points = calculateRewardPoints(transaction.price);
    const customer_name = transaction.customerName;
    if (!acc[customer_name]) {
      acc[customer_name] = {
        rewardPoints: 0,
        totalTransactions: 0,
        totalSpent: 0,
      };
    }
    acc[customer_name].rewardPoints += points;
    acc[customer_name].totalTransactions += 1;
    acc[customer_name].totalSpent += transaction.price;
    acc[customer_name].dateRange = dateRange;
    return acc;
  }, {});
};


export const getlastThreeMonthsTransactions = (transactions) => {
  const currentDate = new Date();
  let threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.purchaseDate);
    return transactionDate >= threeMonthsAgo;
  });
};

export const groupDataByMonth = (data) => {
  const groupedData = {};
  data.forEach(({ customerName, purchaseDate, price }) => {
    const monthKey = purchaseDate.slice(0, 7); 
    const reward=calculateRewardPoints(price)
    if (!groupedData[monthKey]) groupedData[monthKey] = {};
    if (!groupedData[monthKey][customerName]) groupedData[monthKey][customerName] = {price:0,rewardPoints:0};

    groupedData[monthKey][customerName].price += price;
    groupedData[monthKey][customerName].rewardPoints += reward;
  });

  return groupedData;
};