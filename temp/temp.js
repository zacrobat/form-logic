const formInputs = document.querySelectorAll("input, button");
// console.log(formInputs);

function addHighlight() {
  let currentInput = event.target.closest("div");
  currentInput.classList.add("selected", "help-parent");
}

formInputs.forEach(function (formInput) {
  formInput.addEventListener("focus", addHighlight);
});

function removeHighlight() {
  let currentInput = event.target.closest("div");
  currentInput.classList.remove("selected", "help-parent");
}

formInputs.forEach(function (formInput) {
  formInput.addEventListener("blur", removeHighlight);
});

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

https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

1919

Minimum eight characters, at least one letter and one number:

"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

Minimum eight characters, at least one letter, one number and one special character:

"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

Share
Improve this answer
Follow
edited Sep 14, 2018 at 10:41
user avatar
Wiktor Stribiżew
569k3434 gold badges389389 silver badges487487 bronze badges
answered Jan 30, 2014 at 12:44
user avatar
Srinivas
19.6k11 gold badge1212 silver badges44 bronze badges

    89
    "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" does not allow symbols as one of the 8 characters –
    Wee
    Jan 6, 2015 at 2:30
    33
    I found the following allowed for all characters (special & punctuation), without making them mandatory: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$" –
    Gavin
    Jun 6, 2020 at 21:00
    @Gavin With this regex the string "DdBxgyZv2FBaa" is valid but should not detected as valid, because there is no special character. –
    Maisen1886
    Jun 13 at 12:20
