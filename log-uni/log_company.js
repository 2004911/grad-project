document.getElementById("log_company").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredId = document.getElementById("orgname").value;
  const enteredEmail = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  axios.get('../json_data/companies.json')
    .then(response => {
      const companyList = response.data.companies;

      const foundCompany = companyList.find(company =>
        company.CompanyID.toString() === enteredId &&
        company.Email === enteredEmail &&
        company.Password === enteredPassword
      );

      if (foundCompany) {
        window.location.href = "../jobs/jobs.html";
      } else {
        alert("Invalid ID, Email, or Password.");
      }
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
      alert("Login system error.");
    });
});

