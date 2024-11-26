const express =  require('express');

const route = express.Router();

const AdminCtl = require('../controllers/adminController');

const Admin = require('../models/Admin');

route.get("/",AdminCtl.dashboard);

route.get("/addAdmin",AdminCtl.addAdmin);

route.get("/viewAdmin",AdminCtl.viewAdmin);

route.post('/insertAdminData',Admin.uploadAdminImage,AdminCtl.insertAdminData);

module.exports = route;
