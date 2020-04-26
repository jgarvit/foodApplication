const express = require("express");
const viewRouter = express.Router();
const { getTestPage, getPlanListingPage, getHomePage, getLoginPage, getSignupPage, getResetPasswordPage, getForgetPasswordPage} = require("../controller/viewController");

viewRouter.get("/test", getTestPage);
viewRouter.get("/plans", getPlanListingPage);
viewRouter.get("/home", getHomePage);
viewRouter.get("/login", getLoginPage);
viewRouter.get("/signup", getSignupPage);
viewRouter.get("/resetPassword", getResetPasswordPage);
viewRouter.get("/forgetPassword", getForgetPasswordPage);


module.exports = viewRouter;