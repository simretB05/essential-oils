
const loginRegister = document.querySelector('.login-form__toggleRegister-btn')
const login = document.querySelector('.login-form__toggleLogin-btn')
const loginForm = document.getElementById('login-btn')
const registerForm = document.getElementById('regiter-btn')
const loginBtn = document.querySelector('.login-form__boxBtn')

loginRegister.addEventListener('click', () => {
  registerForm.classList.add('move-in')
  loginForm.classList.add('move-out')
  loginBtn.classList.add('slide')
});
login?.addEventListener('click', () => {
  registerForm.classList.remove('move-in')
  loginForm.classList.remove('move-out')
  loginBtn.classList.remove('slide')
});


//listenning to input for authentication

// function registor() {
//   let userFullName = document.getElementById(userName).value
//   let userEmail = document.getElementById(userEmail).value
//   let userPassword = document.getElementById(userPassword).value

//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(userEmail, userPassword)
//     .then((success) => {
//       let user = firebase.auth().currentUser;
//       let uid;
//       if (user != null) {
//         uid = user.uid;
//       }
//       let firebaseRef = firebase.database().ref();
//       let userData = {
//         userFullName: userFullName,
//         userEmail: userEmail,
//         userPassword: userPassword,
//       };
//       firebaseRef.child(uid).set(userData);
//       //this function will be load a pop up with the message below
//       // you can use sweetAlert form more information https://sweetalert.js.org/docs/#icon
//       swal(
//         "Your Account Created",
//         "Your account was created successfully, you can log in now."
//       ).then((value) => {
//         setTimeout(function () {

//           window.location.replace("../pages/page-login.html");
//         }, 1000);
//       });
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       swal({
//         type: "error",
//         title: "Error",
//         text: "Error",
//       });
//     });
// }

// function signIn() {
//   let userSIEmail = document.getElementById("userSIEmail").value;
//   let userSIPassword = document.getElementById("userSIPassword").value;
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(userSIEmail, userSIPassword)
//     .then((success) => {
//       swal({
//         type: "successfull",
//         title: "Succesfully signed in",
//       }).then((value) => {
//         setTimeout(function () {
//           window.location.replace("../pages/page-login.html"); ////this is also to set after
//         }, 1000);
//       });
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       swal({
//         type: "error",
//         title: "Error",
//         text: "Error",
//       });
//     });
// }

// let btnUp = document.getElementById("submitData");
// btnUp.addEventListener("click", registor);
// let btnIn = document.getElementById("signIn");
// btnIn.addEventListener("click", signIn);


