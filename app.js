const formInputs = document.querySelectorAll("input, button");
// console.log(formInputs);

formInputs.forEach(function (formInput) {
  formInput.addEventListener("focus", handleFocus);
});

formInputs.forEach(function (formInput) {
  formInput.addEventListener("blur", handleBlur);
});

function handleFocus() {
  let currentInput = event.target.closest("div");
  currentInput.classList.add("selected", "help-parent");

  // let theTargetValidity = event.target.validity.valid;
  // console.log(`The target is: ${theTargetValidity}`);
  //
  // let theTargetContent = event.target.value;
  // console.log(`The inner text is: ${theTargetContent}`);
}

function handleBlur() {
  let currentInput = event.target.closest("div");
  currentInput.classList.remove("selected", "help-parent");

  let theTargetContent = event.target.value;
  console.log(`The inner text is: ${theTargetContent}`);

  let theTargetValidity = event.target.validity.valid;
  console.log(`The target is: ${theTargetValidity}`);

  if (!theTargetValidity) {
    currentInput.classList.add("error");
  }
}

// To-do: button to validate inputs before submit.

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation

// email regexp /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
// [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// function showInputError() {
//   let currentInput = event.target.closest("div");
//   currentInput.classList.remove("selected", "help-parent");
// }
//
// function checkEmailIsVald() {
//   let emailField = document.querySelector("input[name='user_email']");
//   // console.log(emailField.checkValidity()); // works
//   // console.log(emailField.validity.valid); // also works
//
//   if (emailField.checkValidity) {
//     console.log(`Is valid? ${emailField.validity.valid}`);
//     // currentInput.classList.remove("help-parent");
//   }
// }

// checkEmailIsVald();
