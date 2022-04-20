const { Router } = require('express')
const express=require('express')
const router=express.Router()

const userController=require("../Controller/userController")
const {authentication, authorization} =require("../Middleware/middleware")
const productController = require("../Controller/productController")
const cartController = require("../Controller/cartController")
const orderController = require("../Controller/orderController")

router.post("/register",userController.registerUser)

router.post("/login",userController.loginUser)

router.get("/user/:userId/profile",authentication,authorization,userController.getProfile)

router.put("/user/:userId/profile",authentication,authorization, userController.updateProfile)

// PRODUCT API  

router.post("/products",productController.registerProducts)

router.get("/products",productController.getproducts)

router.get("/products/:productId",productController.getProduct)

router.put("/products/:productId",productController.Updatedetails)

router.delete("/products/:productId",productController.deleteProduct)

// Cart Api ----------------------------------------------------------

router.post("/users/:userId/cart",authentication,authorization,cartController.createCart)
router.put("/users/:userId/cart",authentication,authorization,cartController.updatedCart)
router.get("/users/:userId/cart",authentication,authorization,cartController.getcartById)
router.delete("/users/:userId/cart",authentication,authorization,cartController.emptyCart)

//Order Api----------------------------------------------------------

router.post("/users/:userId/orders",authentication,authorization,orderController.createOrder)
router.put("/users/:userId/orders",authentication,authorization,orderController.updateOrder)

module.exports=router