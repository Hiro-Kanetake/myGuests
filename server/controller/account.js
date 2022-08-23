const accountModel = require('../model/account');
const validation = require('./validation');

module.exports = {
    async createAccount(req, res) {
        const accountInfo = await req.body;
        if (validation.validateNewAccount(accountInfo)) {
            const idAndPin = {
                property_id: accountInfo.property_id,
                pincode: accountInfo.pincode
            }
            const [foundProperty] = await accountModel.checkPincode(idAndPin);
            if (!foundProperty) {
                res.status(404).send("PROPERTY ID OR PINCODE WAS NOT FOUND. TRY AGAIN");
            } else {
                const accountRegistInfo = {
                    first_name: accountInfo.first_name,
                    last_name: accountInfo.last_name,
                    position: accountInfo.position,
                    username: accountInfo.username,
                    property_id: accountInfo.property_id 
                }
                await accountModel.createAccount(accountRegistInfo);
                res.status(201).send("ACCOUNT CREATED")
            }
        } else {
            res.status(406).send("BAD DATA. TRY AGAIN")
        }
    },

    async authenticateAccount(req, res) {
        const loginInfo = req.body;
        if (!validation.validateCredential(loginInfo)) {
            res.status(406).send("BAD DATA. TRY AGAIN");
        } else {
            const [matchingAccount] = await accountModel.authenticateAccount(loginInfo);
            if (!matchingAccount) {
                res.status(404).send("ACCOUNT NOT FOUND");
            } else {
                res.status(200).json({ id: matchingAccount.id });
            }
        }
    },
}