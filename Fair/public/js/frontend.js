let d = document;
let loginBtn = d.querySelector(".login-button");
let signupForm = d.querySelector(".signup");
let forgetForm = d.querySelector(".forget");
let logoutBtn=d.querySelector(".logout");


async function loginHelper(email, password) {
  console.log(email);
  console.log(password);

  const response = await axios.post("/api/users/login", {
    email, password
  })
  if (response.data.status == "successfull") {
    alert("Login Successfull")
    window.location = '/profilePage';
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
    email, password, confirmPassword, name
  });
  if (response.data.status == "user signed up") {
    alert("signup successfull")
    window.location = '/home';
  } else {
    alert("try again")

  }
}
async function forgetHelper(email) {
  const response = await axios.post("/api/users/forgetPassword", {
    email
  });
  if (response.data.staus) {
    alert("Email send to user");
  }
}

if (signupForm) {
  signupForm.addEventListener("click", function (e) {
    // console.log("clicker")
    e.preventDefault();
    const email = d.querySelector("#email").value;
    const password = d.querySelector("#password").value
    const confirmPassword = d.querySelector("#confirmPassword").value;
    const name = d.querySelector("#name").value;
    // console.log(email);
    signupHelper(email, password, confirmPassword, name);

  })
}

if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = d.querySelector("input[type=email]").value;
    let password = d.querySelector("input[type=password]").value;
    loginHelper(email, password)
  })
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    // /api/users/logout
    e.preventDefault();
    logoutHelper();
  })
}

if (forgetForm) {
  forgetForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let email = d.querySelector("input[type=email]").value;
    forgetHelper(email)
  })

}