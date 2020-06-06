// @ts-nocheck
var UsersInfo = [];

// Sign-up form validation


function FormValidate() {
    const FullName = document.getElementById("Fname").value;
    const UserName = document.getElementById("Uname").value;
    const FoneNumber = document.getElementById("Pnum").value;
    const Password = document.getElementById("password").value;
    if (FullName == null || FullName == "") {
        alert("Invalid Fullname");
        return false;
    } else if (UserName == null || UserName == "") {
        alert("Invalid Username");
        return false;
    } else if (FoneNumber.length > 11 || FoneNumber.length < 11) {
        alert("Invalid Phone-Number");
        return false;
    } else if (Password.length < 6 || Password.length > 12) {
        alert("Invalid Password......password must be atleast 6 characters or atmost 12 characters");
        return false;
    }

}

UsersInfo.push(FullName, UserName, FoneNumber, Password);
console.log(UsersInfo);

// Login form validation

function ValiDate() {
    const LoginName = document.getElementById("Lname").value;
    const LoginPassword = document.getElementById("pword").value;
}