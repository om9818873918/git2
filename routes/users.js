const express = require("express");
const router= express.Router();
const userController= require("../controller/users_controller");




router.get('/profile',userController.profile);
router.get('/sign_in',userController.sign_in);
router.get('/sign_up',userController.sign_up);



module.exports=router;