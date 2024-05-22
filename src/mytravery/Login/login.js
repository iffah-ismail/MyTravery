function validateForm() {
    // Get the values of the input fields
// Get the values of the input fields
var username = document.getElementsByClassName("field")[0].value;
var password = document.getElementsByClassName("field")[1].value;

    // Validate the input fields
    if (username == "") {
      alert("Username must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }

    // Submit the form if all the fields are valid
    return true;
  }