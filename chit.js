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
    } else {

        return true;

    }
}

UsersInfo.push(FullName, UserName, FoneNumber, Password);
console.log(UsersInfo);

// Login form validation

function LoginValiDate() {
    const UName = document.getElementById("Lname").value;
    const UPassword = document.getElementById("Pword").value;
    if (UName == null || UName == "") {
        alert('Invalid Login ....Please check your username and password');
        return false;
    } else if (UPassword == null || UPassword.length < 6 || UPassword.length > 12) {
        alert('Invalid Login ....Please check your username and password');
        return false;
    }
}