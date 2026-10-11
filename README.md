# [CryptoVault](https://cryptovault.jatinagrawal.co.in/): Comprehensive Cryptocurrency Management Platform 🚀

**CryptoVault** is an advanced web application designed to empower users with seamless cryptocurrency management and trading capabilities. Our platform combines cutting-edge technology with user-friendly features to provide a complete solution for both novice and experienced crypto enthusiasts.

## Features ✨

### AI Chat Bot 🤖
- **Real-Time Queries**: Leverage our AI Chat Bot to handle crypto-related questions, including current values and market data, using the Gemini and CoinGecko APIs.

### Buy & Sell Crypto 💸
- **User-Friendly Interface**: Facilitate smooth transactions with an intuitive interface that supports a wide array of cryptocurrencies for buying and selling.

### Portfolio Management 📊
- **Investment Tracking**: Equip users with robust tools to monitor their investments and track performance effectively.

### Advanced Wallet Functionality 🔒
- **Wallet to Wallet Transfer**: Securely transfer funds between wallets with ease.
- **Withdrawal to Bank Account**: Directly withdraw funds to bank accounts for convenience.
- **Add Balance to Wallet**: Easily top up wallet balances whenever needed.

### Transaction History 📜
- **Withdrawal History**: View and track past withdrawals for better financial management.
- **Wallet History**: Access detailed logs of all wallet transactions.
- **Search Coin**: Effortlessly search for any cryptocurrency, providing essential information for informed trading decisions.

### Robust Authentication and Security 🔐
- **User Authentication**: Simple and secure login and registration process.
- **Two-Factor Authentication**: Extra layer of security to protect user accounts.
- **Password Recovery**: Easy process for users to recover forgotten passwords.

## Cutting-Edge Technology Stack ⚙️

### Backend:
- **Spring Boot**: For robust and scalable application development.
- **MySQL DB**: Reliable database management.
- **Spring Security**: Enhanced security features for user data protection.
- **Java Mail Sender**: Efficient email notifications and communications.

### Frontend:
- **React**: A dynamic framework for building user interfaces.
- **Tailwind CSS**: Stylish and responsive design framework.
- **Redux**: State management for better performance.
- **Axios**: Simplified HTTP requests.
- **React-Router-Dom**: Smooth navigation and routing.
- **Shadcn UI**: Modern UI components for a sleek user experience.

### Payment Gateways:
- **Razorpay**: For secure payment processing.
- **Stripe**: Additional payment solution for global reach.

### APIs:
- **Gemini API**: Access to real-time market data.
- **CoinGecko API**: Comprehensive cryptocurrency information.

### Docker Deployment 🐳

1. Ensure you have Docker installed on your machine.
2. Clone the repository.
3. Navigate to the project directory.
4. Build the Docker image.
5. Run the Docker container.

## Local setup

The backend uses TiDB Cloud through its MySQL-compatible JDBC driver. Do not put
credentials in source files or Vite variables.

1. Copy `Backend/.env.example` to `Backend/.env` and fill in the TiDB connection
   details and API credentials. Use the TiDB connection host, port `4000`,
   username, and password from TiDB Cloud; the application connects to its
   `cryptovault` database (not TiDB's protected `sys` system database). Keep
   `sslMode=VERIFY_IDENTITY` in the JDBC URL.
2. In a terminal, run the backend from `Backend` with `mvn spring-boot:run`.
   It listens on port `5454` locally.
3. Copy `Frontend/.env.example` to `Frontend/.env`, then run `npm install` and
   `npm run dev` from `Frontend`.

Razorpay payments need both a test Key ID and its matching test Key Secret.
Set `FRONTEND_BASE_URL` to `http://localhost:5173` locally; on Render set it to
`https://crypto-vault-fawn.vercel.app` so completed payments return to the
deployed wallet.
Google sign-in additionally needs OAuth client credentials configured as
`SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENT_ID` and
`SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENT_SECRET`. Email/OTP
features need `MAIL_USERNAME` and `MAIL_PASSWORD`.

## Deployment

- **Render:** Create a Docker web service with `Backend` as its root directory;
  Render will build `Backend/Dockerfile`. Add `TIDB_JDBC_URL`,
  `TIDB_USERNAME`, `TIDB_PASSWORD`, and the API/payment/email credentials as
  Render environment variables. If setting `APP_CORS_ALLOWED_ORIGINS`, include
  the exact deployed Vercel origin (comma-separated if there is more than one);
  this value overrides the localhost and production defaults. Render's `PORT`
  is used automatically.
- **Vercel:** Import the repository with `Frontend` as the root directory and
  set `VITE_API_BASE_URL` to the deployed Render service URL, without a trailing
  slash. Redeploy after changing this build-time variable.

Keep `.env` files out of Git and never put private API/database credentials in
`VITE_*` variables; Vite embeds those values in browser assets.

## Usage 🚀

1. Open the application in your web browser: [CryptoVault](https://cryptovault.jatinagrawal.co.in/).
2. Create an account or log in to access all features.
3. Navigate through the dashboard to buy, sell, and manage your crypto portfolio.
4. Use the AI Chat Bot for real-time assistance and information.

## Contributing 🤝

We welcome contributions! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License 📄

This project is licensed under the [MIT License](LICENSE).

---
