const UsersInfo = [];

// Sign-up form validation
const FormValidate = () => {
    const FullName = document.getElementById('Fname').value;
    const UserName = document.getElementById('Uname').value;
    const FoneNumber = document.getElementById('Pnum').value;
    const Password = document.getElementById('password').value;
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        if (FullName == null || FullName == '') {
            alert('Invalid Fullname');
            return false;
        } else if (UserName == null || UserName == '') {
            alert('Invalid Username');
            return false;
        } else if (FoneNumber.length > 11 || FoneNumber.length < 11) {
            alert('Invalid Phone-Number');
            return false;
        } else if (Password.length < 6 || Password.length > 12) {
            alert(
                'Invalid Password......password must be atleast 6 characters or atmost 12 characters'
            );
            return false;
        } else {
            return true;
        }
    });


};

FormValidate();


//UsersInfo.push(FullName, UserName, FoneNumber, Password);
//console.log(UsersInfo);

// Login form validation

/*const LoginValidate = () => {
    const UName = document.getElementById('Lname').value;
    const UPassword = document.getElementById('Pword').value;
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        if (UName == null || UName == '') {
            alert('Invalid Login ....Please check your username');
            return false;
        } else if (UPassword.length < 6 || UPassword.length > 12) {
            alert(
                'Invalid Password......password must be atleast 6 characters or atmost 12 characters'
            );
            return false;
        } else {
            return true;
        }
    });

};

LoginValidate(); */