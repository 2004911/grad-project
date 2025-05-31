document.getElementById("loghead").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredId = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  axios.get('../json_data/Department_Head_data.json')
    .then(response => {
      const { Username, Password } = response.data.hod;

      if (enteredId === Username && enteredPassword === Password) {

        window.location.href = "../log-uni/hod.html";

      } else {
        alert("Invalid ID or Password.");
      }
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
      alert("Login system error.");
    });
});
