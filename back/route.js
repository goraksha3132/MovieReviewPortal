const express = require('express')

const studentcontroller = require ('./controller')

const route = express.Router()

route.post('/register',studentcontroller.adduser)
route.get('/findall',studentcontroller.getdata)
route.put('/update/:email',studentcontroller.updateuser)
route.delete('/delete/:email',studentcontroller.deleteuser)


module.exports = route;