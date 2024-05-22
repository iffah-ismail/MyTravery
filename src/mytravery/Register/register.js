function validateForm() {
    // Get the values of the input fields
    var fields = document.getElementsByClassName("field");
    var error = "";
  
    // Validate each field
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].value == "") {
        error += "The " + fields[i].placeholder + " field must be filled out.\n";
      }
    }
  
    // Display the error messages
    if (error != "") {
      alert(error);
      return false;
    }
  
    // Submit the form if all the fields are valid
    return true;
  }
  