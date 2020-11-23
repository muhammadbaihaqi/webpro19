const correctUser = {
    username: "nf2019ti",
    password: "nf2019ti",
  };
  
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("login");
  
  loginBtn.addEventListener("click", function (event) {
  
    event.preventDefault();
  
    if (
      username.value === correctUser.username &&
      password.value === correctUser.password
    ) {
      alert("Berhasil login");
      document.body.innerHTML = "<h1>Login berhasil</h1>";
    } else {
      alert("login gagal");
    }
  });