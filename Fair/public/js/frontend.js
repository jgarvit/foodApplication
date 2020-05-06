let d = document;
let loginBtn = d.querySelector(".login-button");
let signupForm = d.querySelector(".signup");
let forgetForm = d.querySelector(".forget");
let logoutBtn = d.querySelector(".logout");
let createBtn = d.querySelector(".create");
let resetPasswordForm = d.querySelector(".reset");


async function loginHelper(email, password) {
  console.log(email);
  console.log(password);

  const response = await axios.post("/api/users/login", {
    email,
    password,
  });
  if (response.data.status == "successfull") {
    alert("Login Successfull");
    // console.log(response.data);
    // localStorage.setItem('user',response.data)
    window.location = "/profilePage";
  } else {
    alert("Try again");
  }
}
async function logoutHelper() {
  let response = await axios.get("/api/users/logout");
  if (response.data.status === "logged Out") {
    location.assign("/");
  } else {
    alert("some error ocurred");
  }
}
async function signupHelper(email, password, confirmPassword, name) {
  console.log(email);
  const response = await axios.post("/api/users/signup", {
    email,
    password,
    confirmPassword,
    name,
  });
  if (response.data.status == "user signed up") {
    alert("signup successfull");
    window.location = "/";
  } else {
    alert("try again");
  }
}
async function forgetHelper(email) {
  // console.log(email);
  const response = await axios.patch("/api/users/forgetPassword", { email });
  if (response.data.status) {
    alert("Email send to user");
  }
}
async function createPlanHelper(
  name,
  description,
  ratingsAverage,
  price,
  discount
) {
  const response = await axios.post("/api/plans", {
    name,
    description,
    ratingsAverage,
    price,
    discount,
  });
  if (response.data.status == "New Plan Created") {
    alert("plan created successfully");
    window.location = "/managePlans";
  } else {
    alert("try again");
  }
}
async function resetPasswordHelper(password, confirmPassword, resetToken) {
  const response = await axios.patch(`/api/users/resetPassword/${resetToken}`,
    {
      password, confirmPassword
    })
  if (response.data.success == "user password updated login with new password") {
    alert("Your password has been reset");
    location.assign("/login");
  } else {
    alert("something went wrong")
  }
}

if (signupForm) {
  signupForm.addEventListener("click", function (e) {
    // console.log("clicker")
    e.preventDefault();
    const email = d.querySelector("#email").value;
    const password = d.querySelector("#password").value;
    const confirmPassword = d.querySelector("#confirmPassword").value;
    const name = d.querySelector("#name").value;
    // console.log(email);
    signupHelper(email, password, confirmPassword, name);
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = d.querySelector("input[type=email]").value;
    let password = d.querySelector("input[type=password]").value;
    loginHelper(email, password);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    // /api/users/logout
    e.preventDefault();
    logoutHelper();
  });
}

if (createBtn) {
  createBtn.addEventListener("click", function (e) {
    // console.log("clicker")
    e.preventDefault();
    const name = d.querySelector("#name").value;
    const description = d.querySelector("#description").value;
    const ratingsAverage = d.querySelector("#rating").value;
    const price = d.querySelector("#price").value;
    const discount = d.querySelector("#discount").value;

    console.log(name);
    createPlanHelper(name, description, ratingsAverage, price, discount);
  });
}

if (forgetForm) {
  console.log("i was inside forgetform");
  forgetForm.addEventListener("click", function (e) {
    e.preventDefault();
    let email = d.querySelector(".email").value;
    forgetHelper(email);
  });
}

if (resetPasswordForm) {
  console.log("inside reset pass form");
  resetPasswordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let password = d.querySelector(".password").value;
    let confirmPassword = d.querySelector(".confirmPassword").value;
    let token = d.querySelector("button[data-token]");
    resetPasswordHelper(password, confirmPassword, token);

  })
}

// if (updateProfile) {
// }
