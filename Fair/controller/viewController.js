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
async function getProfilePage(req, res) {
    const user = req.user;
    res.render("profilePage.pug", {
      title: "Profile Page",
      user
    })
  }
  async function getManagePlansPage(req, res) {
    const user = req.user;
    res.render("managePlans.pug", {
      title: "Manage Plans Page",
      user
    })
  } 
  
  async function getCreatePlansPage(req, res) {
    const user = req.user;
    res.render("createPlans.pug", {
      title: "Create Plan Page",
      
    })
  } 
  
  
module.exports.getTestPage = getTestPage;
module.exports.getPlanListingPage = getPlanListingPage;
module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;
module.exports.getSignupPage = getSignupPage;
module.exports.getResetPasswordPage = getResetPasswordPage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;
module.exports.getProfilePage = getProfilePage;
module.exports.getManagePlansPage = getManagePlansPage;
module.exports.getCreatePlansPage = getCreatePlansPage;



