# reward-point-calculation

This project is a React-based application that calculates and displays customer reward points based on their transactions over a three-month period. The application is built using [Vite](https://vitejs.dev/), a fast build tool for modern web projects.

## Features

- **Reward Calculation**: Automatically computes reward points for each transaction based on the specified criteria.
- **Monthly and Total Summaries**: Displays reward points earned per customer per month and the total over the three-month period.
- **Transaction Details**: Provides a detailed view of all transactions, including reward points earned per transaction.
- **Last three month transactions and reward Details**: Provides a detailed view of last three month transactions, including reward points earned per transaction.


## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shadab1301/reward-point-calculation
   cd reward-point-calculation
   
2. **Install Dependencies:**:
   npm install

## Usage
1. **Start the Development Server**:
   npm run dev

2. **Access the Application:**:
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



