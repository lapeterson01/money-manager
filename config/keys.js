require('dotenv').config({ path: '../.env' });

module.exports = {
    plaidClientId: process.env.PLAID_CLIENT_ID,
    plaidPublicKey: process.env.PLAID_PUBLIC_KEY,
    plaidSecret: process.env.PLAID_SECRET,
    plaidEnv: process.env.PLAID_ENV
}