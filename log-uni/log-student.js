document.getElementById("log_student").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredId = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  axios.get('../json_data/login_student.json')
    .then(response => {
      const students = response.data.students;

      const foundStudent = students.find(student =>
        student.StudentID.toString() === enteredId &&
        student.Password === enteredPassword
      );

      if (foundStudent) {
        localStorage.setItem('loggedStudentID', foundStudent.StudentID);
        localStorage.setItem('loggedStudentName', foundStudent.Name || '');

        window.location.href = "../log-uni/students.html";
      } else {
        alert("Invalid ID or Password.");
      }
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
      alert("Login system error.");
    });
});

