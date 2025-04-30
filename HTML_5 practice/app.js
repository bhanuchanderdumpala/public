

    // Load data from localStorage on page load
    document.addEventListener("DOMContentLoaded", () => {
      var uname = localStorage.getItem('user_name');
      var pass = localStorage.getItem('pass');

      if (uname && pass) {
        document.querySelector("#userName").value = uname;
        document.querySelector("#pass").value = pass;
        document.querySelector("#remember").checked = true;
        welcomeMessage(uname);
      }
    });

    // Save data to localStorage on login
    function saveDetails() {
      var username = document.querySelector("#userName").value;
      var password = document.querySelector("#pass").value;
      var remember = document.querySelector("#remember").checked;

      if (remember) {
        localStorage.setItem('user_name', username);
        localStorage.setItem('pass', password);
      } else {
        localStorage.removeItem('user_name');
        localStorage.removeItem('pass');
      }

      welcomeMessage(username);
    }

    // Show welcome message
    function welcomeMessage(uname) {
      var msg = `Thanks for Logging In Mr/Mrs. ${uname}`;
      var block = document.querySelector("#welcomeblock");
      block.innerText = msg;
      block.style.display = 'block';
    }
 