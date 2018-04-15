const plaid = require('plaid');
const keys = require('../config/keys');

const client = new plaid.Client(
    keys.plaidClientId,
    keys.plaidSecret,
    keys.plaidPublicKey,
    plaid.environments[keys.plaidEnv]
)

module.exports = app => {
    app.get('/', (req, res, next) => {
        res.render('client', {
            PLAID_PUBLIC_KEY: keys.plaidPublicKey,
            PLAID_ENV: keys.plaidEnv
        })
    })
}