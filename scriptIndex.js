const indicator = document.querySelector(".indicator");
      const input = document.querySelector(".input-box");
      const weak = document.querySelector(".weak");
      const medium = document.querySelector(".medium");
      const strong = document.querySelector(".strong");
      const text = document.querySelector(".text");

      function trigger() {
        const password = document.getElementById("password").value;

        if (password) {
          let hasLowerCase = /[a-z]/.test(password);
          let hasUpperCase = /[A-Z]/.test(password);
          let hasDigit = /\d/.test(password);
          let hasSpecialChar = /[!@#$%^&,*]/.test(password);

          weak.classList.toggle(
            "active",
            !hasLowerCase || !hasUpperCase || !hasDigit || !hasSpecialChar
          );
          medium.classList.toggle(
            "active",
            (hasLowerCase && hasUpperCase) ||
              (hasLowerCase && hasDigit) ||
              (hasUpperCase && hasDigit) ||
              (hasLowerCase && hasSpecialChar) ||
              (hasUpperCase && hasSpecialChar) ||
              (hasDigit && hasSpecialChar)
          );
          strong.classList.toggle(
            "active",
            hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar
          );

          indicator.style.display = "flex";
          text.style.display = "block";

          if (hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar) {
            text.textContent = "Your password is strong";
            text.className = "text strong";
          } else if (
            (hasLowerCase && hasUpperCase) ||
            (hasLowerCase && hasDigit) ||
            (hasUpperCase && hasDigit) ||
            (hasLowerCase && hasSpecialChar) ||
            (hasUpperCase && hasSpecialChar) ||
            (hasDigit && hasSpecialChar)
          ) {
            text.textContent = "Your password is medium";
            text.className = "text medium";
          } else {
            text.textContent = "Your password is weak";
            text.className = "text weak";
          }
        } else {
          indicator.style.display = "none";
          text.style.display = "none";
        }
      }

      function myMenuFunction() {
        var i = document.getElementById("navMenu");

        if (i.className === "nav-menu") {
          i.className += " responsive";
        } else {
          i.className = "nav-menu";
        }
      }

      var a = document.getElementById("loginBtn");
      var b = document.getElementById("registerBtn");
      var x = document.getElementById("login");
      var y = document.getElementById("register");

      function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
      }

      function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
      }

      document
        .getElementById("userName")
        .addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            window.location.href = "homepage.html";
            event.preventDefault();
          }
        });

      document
        .getElementById("password")
        .addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            window.location.href = "homepage.html";
            event.preventDefault();
          }
        });

      function registerUser() {
        window.location.href = "homepage.html";
      }

      function loginUser() {
        const username = document.getElementById("userName").value;
        if (username.trim() !== "") {
          window.location.href =
            "homepage.html?username=" + encodeURIComponent(username);
        } else {
          alert("Please enter a username.");
        }
      }