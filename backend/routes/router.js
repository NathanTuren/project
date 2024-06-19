const express = require('express')
const router = express.Router()

//get this route
router.get('/Data', (req, res)=>{
    const BillData = [
        {
            "Name": "Nate",
            "id": 1,
            "Phone": "1231231231",
            "Paid": true
          },
          {
            "Name": "Mi",
            "id": 2,
            "Phone": "6786786788",
            "Paid": true
          },
          {
            "Name": "Ma",
            "id": 3,
            "Phone": "3452355432",
            "Paid": false
          }
    ]
    res.send(BillData);
})

//exporting router
module.exports = router