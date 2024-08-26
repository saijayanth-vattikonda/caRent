function isLoggedIn() {
  const variableValue = localStorage.getItem("isLoggedIn");
  return variableValue === "true";
}

const signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("signupPassword").value;
  const phone = document.getElementById("phone").value;
  // console.log(domainMatch);

  const result = await fetch("https://carent-api.vercel.app/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    $("#myModal1").modal("hide");
    alert("User created successfully!");
  } else {
    alert(result.error);
  }
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const result = await fetch("https://carent-api.vercel.app/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    $("#myModal").modal("hide");
    console.log("Got the token: ", result.data);
    alert("Success");
    localStorage.setItem("isLoggedIn", true);
    window.location.href = result.redirectTo;
    localStorage.setItem("username", result.username);
  } else {
    alert(result.error);
  }
}

const searchButton = document.getElementById("search-cars-button");
searchButton.addEventListener("click", function () {
  if (!isLoggedIn()) {
    console.log("Not Logged In!");
    $("#myModal").modal("show");
  }
});
