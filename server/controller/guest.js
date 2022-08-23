const guestModel = require('../model/guest');
const validation = require('./validation');

module.exports = {
    async addGuest(req, res) {
        const newGuestInfo = await req.body;
        if (validation.validateNewGuest(newGuestInfo)) {
            await guestModel.addGuest(newGuestInfo);
            res.status(201).send("NEW GUEST ADDED");
        } else {
            res.status(406).send("BAD DATA. TRY AGAIN");
        }
    },

    async getGuest(req, res) {
        const viewGuestCredential = await req.body;
        if (validation.validateViewCredential(viewGuestCredential)) {
            const [permissionToView] = await guestModel.viewGuestCredential(viewGuestCredential);
            if (!permissionToView) {
                res.status(404).send("SORRY YOU ARE NOT PERMITTED TO VIEW INFORMATION");
            } else {
                const property_id = {
                    property_id: viewGuestCredential.property_id,
                }
                const allGuests = await guestModel.getGuest(property_id);
                res.status(200).json(allGuests);
            }
        } else {
            res.status(406).send("BAD DATA. TRY AGAIN");
        }
    }

}