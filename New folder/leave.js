const button = document.querySelector("#submitBtn");
//getting the element from the html file
const usernameE1 = document.querySelector("#username");
// const passwordE1 = document.querySelector("#Password");
const form = document.querySelector("#container1");

button.addEventListener("click", function (e) {
  checkUsername();
  console.log("aplle");
  //   let isPasswordValid = checkPassword(),
  //     isUsernameValid = checkUsername();
  //   let isFormValid = isPasswordValid && isUsernameValid; //submit to server if the form is valid
  //   if (isFormValid) {
  //     confirm("Are you sure you want to login."); //to get final confirmation or to reset the data if the information is wrong.
  //     return true;
  //   } else {
  //     e.preventDefault(); //prevent the form from submitting
  //   }
});

//function to validate the username
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameE1.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments
  if (!isRequired(username)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameE1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else if (!isUsernameValid(username)) {
    showError(usernameE1, "Username is not valid! ");
    //calling the showsuccess function with two arguments
  } else {
    showSuccess(usernameE1);
    valid = true;
  }
  return valid;
};

//Regular expression to validate the student name pattern
const isUsernameValid = (username) => {
  const re =
    /^([A-Z]{1}[a-zA-Z]+)(\s[A-Z]{1}[a-zA-Z]+)?(\s[A-Z]{1}[a-zA-Z]+)?$/;
  return re.test(username);
};

//reusable code
//Function to check whether the input section is empty or not
const isRequired = (value) => (value === "" ? false : true);
//Function to check the length of the the character in the input section
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

//reusable code
//Regulating the css classes according to the validation
const showError = (input, message) => {
  //get the form field element
  const formField = input.parentElement;
  //add the error class
  formField.classList.remove("success");
  formField.classList.add("error");
  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the form field element
  const formField = input.parentElement;
  //remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");
  //hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// function readFormData() {
//   var formData = {};
//   formData["id"] = document.getElementById("id").value;
//   formData["name"] = document.getElementById("name").value;
//   formData["email"] = document.getElementById("email").value;
//   return formData;
// }

// function insertNewRecord(data) {
//   var table = document
//     .getElementById("stdList")
//     .getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.lenght);
//   cell1 = newRow.insertCell(0);
//   cell1.innerHTML = data.id;
//   cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.name;
//   cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.email;
//   cell4 = newRow.insertCell(3);
//   cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
//   cell5 = newRow.insertCell(4);
//   cell5.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
// }

// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("id").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("name").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("email").value = selectedRow.cells[2].innerHTML;
// }

// var selectedRow = null;

// function resetForm() {
//   document.getElementById("id").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   selectedRow = null;
// }

// function updateFormData(formData) {
//   selectedRow.cells[0].innerHTML = formData.id;
//   selectedRow.cells[1].innerHTML = formData.name;
//   selectedRow.cells[2].innerHTML = formData.email;
// }
// function onDelete(td) {
//   if (confirm("Are You Sure to DELETE this record")) {
//     row = td.parentElement.parentElement;
//     document.getElementById("stdList").deleteRow(row.rowIndex);
//     resetForm();
//   }
// }

// //validation

// function validate() {
//   isValid = true;
//   if (document.getElementById("name").value == "") {
//     isValid = false;
//     document.getElementById("nameValidationError").classList.remove("hide");
//   } else {
//     isValid = true;
//     if (
//       document.getElementById("nameValidationError").classList.contains("hide")
//     );
//     document.getElementById("nameValidationError").classList.add("hide");
//   }
//   return isValid;
// }
