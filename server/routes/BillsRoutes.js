
const router = require('express').Router();
const BillModel = require('../models/Bills')

router.post("/createBill", async (req,res) => {

    const newBill = BillModel(req.body)
    newBill.save()
})

module.exports = router;