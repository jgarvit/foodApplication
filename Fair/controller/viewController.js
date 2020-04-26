let planModel = require("../model/planModel");
function getTestPage(req, res) {
    res.render("test.pug", {
        title: "Test Page"
    })
}
async function getPlanListingPage(req, res) {
    const plans = await planModel.find();
    res.render("planListing.pug", {
        title: "Plans page",
        plans: plans
    })
}
async function getHomePage(req, res) {
    const plans = await planModel.find();
    res.render("home.pug", {
        title: "Home Page",
        plans:plans,page:"home"
    })
}
async function getLoginPage(req, res) {
    // const plans = await planModel.find();
    res.render("login.pug", {
        title: "Login Page",
    
    })
}
async function getSignupPage(req, res) {
    // const plans = await planModel.find();
    res.render("signup.pug", {
        title: "Signup Page",
    
    })
}
async function getResetPasswordPage(req, res) {
    // const plans = await planModel.find();
    res.render("resetPassword.pug", {
        title: "Reset Password Page",
    
    })
}
async function getForgetPasswordPage(req, res) {
    // const plans = await planModel.find();
    res.render("forgetPassword.pug", {
        title: "forget password page",
    
    })
}
module.exports.getTestPage = getTestPage;
module.exports.getPlanListingPage = getPlanListingPage;
module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;
module.exports.getSignupPage = getSignupPage;
module.exports.getResetPasswordPage = getResetPasswordPage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;



