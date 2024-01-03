var loginUsersArr = [
  {
    username: "User1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
  },
  {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
  }
];

function signUp() {
  var inpUser = document.getElementById("inpUser").value;
  var inpPass = document.getElementById("inpPass").value;
  var inpAge = document.getElementById("inpAge").value;
  var male = document.getElementById("r1");
  var feMale = document.getElementById("r2");
  var Gender = male.checked ? male.value : (feMale.checked ? feMale.value : "");
  var inpPhone = document.getElementById("inpPhone").value;
  var regax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,16}$/;
  if (inpUser != "" && inpPass != "" && inpAge != "" && inpPhone != "" && Gender != "") {
    if (5 < inpUser.length < 10 && regax.test(inpPass) && inpPhone.length == 11 && 18 < inpAge < 60) {
      var obj = {
        username: inpUser,
        pass: inpPass,
        age: inpAge,
        gender: Gender,
        phone: inpPhone,
      }
      loginUsersArr.push(obj);
      console.log(loginUsersArr);
      alert("sign up successfully!!");
    } else {
      alert("the password must has special chars and from 8 to 16 and the user must be from 5 to 9 ")
    }
  } else {
    alert("please, fill out the data")
  }
}

function logIn() {
  var userLog = document.getElementById("userLog").value;
  var userPass = document.getElementById("userPass").value;
  var isValid = false;
  if (userLog != "" && userPass != "") {
    loginUsersArr.forEach((items) => {
      if (userLog === items.username && userPass === items.pass) {
        isValid = true;
      }
    })
  } else {
    alert("please, fill out the data !!")
  }
  if (isValid == true) {
    alert("login successfully!");
    window.location.assign("file:///C:/Users/IT/Desktop/mohamedZakaryia-(W%204)-0522012/ReviewPage.html")
  } else {
    alert("Not a user!")
  }
}

function forgetPass() {
  var userForg = document.getElementById("userForg").value;
  var passForg = document.getElementById("passForg").value;
  for (var i = 0; i < loginUsersArr.length; i++) {
    if (loginUsersArr[i].username == userForg) {
      loginUsersArr[i].pass = passForg;
      console.log(loginUsersArr);
      alert("Completed successfully!")
    }
    if (i == loginUsersArr.length) {
      alert("Not Found")
    }
  }
}