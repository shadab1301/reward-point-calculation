# reward-point-calculation

This project is a React-based application that calculates and displays customer reward points based on their transactions over a three-month period. The application is built using React Vite, a fast build tool for modern web projects.

## Problem statement
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).   Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

Assumption:- The record could be of many years so displaying the records of the latest three months in descending order and combined points as per customer ID for the last three months.

## Features

- **Reward Calculation**: Automatically computes reward points for each transaction based on the specified criteria.
- **Monthly and Total Summaries**: Displays reward points earned per customer per month and the total over the three-month period.
- **Transaction Details**: Provides a detailed view of all transactions, including reward points earned per transaction.
- **Last three month transactions and reward Details**: Provides a detailed view of last three month transactions, including reward points earned per transaction.


## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shadab1301/reward-point-calculation.git
   cd reward-point-calculation
   
2. **Install Dependencies:**:
   ```bash
   npm install

## Usage
1. **Start the Development Server**:
   ```bash
   npm run dev

3. **Access the Application:**:
      Open your browser and navigate to http://localhost:5173 to interact with the application.

## Reward Calculation Logic
The reward points are calculated based on the following criteria:

**.** 2 points for every dollar spent over $100 in each transaction.
**.** 1 point for every dollar spent between $50 and $100 in each transaction.
Example:

A $120 purchase earns:
2 points × $20 (amount over $100) = 40 points
1 point × $50 (amount between $50 and $100) = 50 points
Total: 90 points

##Launch the test runner.
```bash
   npm run test
** The testcases file can be found in '/workspaces/Assign/src/RewardPointsCaluclator/tests/testCases.test.js'

   The code has passed below test cases

    calculatePoints function
```bash
✓ should handle negative amount

✓ should handle decimal amount

✓ should handle large amount like 1,000,000

✓ should calculate points correctly for amount over $100 (2 ms)

✓ should calculate points correctly for amount between $50 and $100

✓ should calculate points correctly for amount exactly $50

✓ should handle amount less than $50

** processTransactions function
```bash
✓ should process transactions and calculate points correctly (1 ms)

✓ should handle empty transactions array
**fetchTransactions
 ```bash
   ✓ should fetch transaction data successfully (1 ms)

   ✓ should handle 404 error (49 ms)

   ✓ should handle 500 error (3 ms)

   ✓ should handle other fetch errors (2 ms)

   ✓ should handle network errors (3 ms)

##Build the app for production to the build folder.
```bash
npm run build

##Screen shots of application
###Application running state
####Assumption:- The record could be of many years so displaying the records of the latest three months in descending order and combined points as per customer ID for the last three months.



