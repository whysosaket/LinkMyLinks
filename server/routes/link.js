require('dotenv').config();

const expess = require('express');
const router = expess.Router();
const User = require("../models/User");
const { body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = process.env.JWT_SECRET;


router.route('/fetchalllinks')
.get(fetchuser, (req, res)=>{

})

router.route('/addlink')
.post(fetchuser, (req, res)=>{

})

router.route('/updatelink')
.post(fetchuser, (req, res)=>{

})

module.exports = router;