#Reward Points Calculator

##Project Overview

This project calculates reward points for a retailer's customers based on their recorded purchases. The rewards program awards points as follows:

2 points for every dollar spent over $100 in a transaction.

1 point for every dollar spent between $50 and $100 in a transaction.

For example, a $120 purchase earns (2 x $20) + (1 x $50) = 90 points.

Given a record of transactions over multiple years, the application displays records from the latest three months in descending order and calculates the combined reward points per customer.

###Running the Project

####Clone the Repository


```javascript
https://github.com/vibhavawasthi/Assignment_Infosys;

**Install Dependencies**
```javascript
npm install

**Run the Application in Development Mode**
```javascript
npm start

**Run the Test Cases**
```javascript
npm test

**The test cases file can be found at:**
```javascript
/workspaces/Assign/src/RewardPointsCaluclator/tests/testCases.test.js

**Test Cases**

**calculatePoints function**

✅ Should handle negative amount

✅ Should handle decimal amount

✅ Should handle large amounts like 1,000,000

✅ Should calculate points correctly for amounts over $100

✅ Should calculate points correctly for amounts between $50 and $100

✅ Should calculate points correctly for amount exactly $50

✅ Should handle amounts less than $50

**processTransactions function**

✅ Should process transactions and calculate points correctly

✅ Should handle an empty transactions array

**fetchTransactions**

✅ Should fetch transaction data successfully

✅ Should handle 404 error

✅ Should handle 500 error

✅ Should handle other fetch errors

✅ Should handle network errors

**Build the Application for Production**
```javascript
npm run build

**Application Screenshots**

**Application Running State**

(Include relevant screenshots here)

Assumption

The record could span multiple years; however, only the latest three months' data is displayed in descending order, with points calculated per customer ID for the last three months.

License

This project is open-source and available for use under the MIT License.

Contact

For any queries or contributions, feel free to reach out!





