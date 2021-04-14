    var count = 1;
    var totalCredit = 0;
    var gradePoint = 0;
    var totalGradePoint = 0;
    var courseCount = 0;

    var serachField = document.getElementById("serach");

function addCourseInfo(){
    var score = document.getElementById("score").value;
    var code =  document.getElementById("code").value;
    var title = document.getElementById("title").value;
    var credit = document.getElementById("credit").value;

    //append course info to table
    var grade;
    var point;
    
    const testScore = Math.floor(score / 10);
        switch( Number(testScore) ) {
            case 7:case 8:case 9:case 10:
                grade = "A";
                point = 5;
                break;
            case 6: 
                grade = "B";
                point = 4;
                break;
            case 5:
                grade = "C";
                point = 3;
                break;
            case 4:
                if(score >= 40 && score <= 44) {
                    grade = "E";
                    point = 1;
                }
                else if(score >= 45 && score <= 49){
                    grade = "D";
                    point = 2;
                }
                break;
            default:
                    grade = "F";
                    point  = 0;
                break;
        }

    totalCredit += Number(credit);
    gradePoint = credit * point;
    totalGradePoint += gradePoint;
        var error_msg = document.querySelector(".error_msg");
        var form_err = false;

        // Validate form input fields
        if(code == "" && title == "" && credit == "" && score == ""){
            error_msg.innerHTML = "<p>" + "Form not valid. All Input Fields are REQUIRED!" + "</p>";
        }
        else if(code == ""){
            form_err = true;
            error_msg.innerHTML = "<p>" + "Course Code Input Field must NOT be empty!" + "</p>";
        }
        else if(title == ""){
            form_err = true;
            error_msg.innerHTML = "<p>" + "Course Title Input Field must NOT be empty!" + "</p>";
        }
        else if(credit == ""){
            form_err = true;
            error_msg.innerHTML = "<p>" + "Course Unit Input Field must NOT be empty!" + "</p>";
        }
        else if(credit > 6){
            form_err = true;
            error_msg.innerHTML = "<p>" + "A course CANNOT have more than 6 Credit Load!" + "</p>";
        }
        else if(score == ""){
            form_err = true;
            error_msg.innerHTML = "<p>" + "Course Score Input Field must NOT be empty!" + "</p>";
        }
        else if(score > 100){
            form_err = true;
            error_msg.innerHTML = "<p>" + "Score must NOT be more than 100!" + "</p>";
        }

        // append elements if no error encountered
        else if(!form_err){
            var tbody = document.querySelector("#coursesTable tbody");
            var tdCount = document.createElement("td");
            tdCount.textContent = count++;
            var tdCode = document.createElement("td");
            tdCode.textContent = code;
            var tdTitle = document.createElement("td");
            tdTitle.textContent = title;
            var tdCredit = document.createElement("td");
            tdCredit.textContent = credit;
            var tdScore = document.createElement("td");
            tdScore.textContent = score;
            var tdGrade = document.createElement("td");
            tdGrade.textContent = grade;
            
            var tr = document.createElement("tr");
            tr.appendChild(tdCount);
            tr.appendChild(tdCode);
            tr.appendChild(tdTitle);
            tr.appendChild(tdCredit);
            tr.appendChild(tdScore);
            tr.appendChild(tdGrade);

            tbody.appendChild(tr);
            error_msg.innerHTML = "<p style='color: green'>" + code + "'s Details Added Successfully!" + "</p>";  
        }
    }


var degreeClass;
// function to calculate and append the calculations
function calcGPA(){
    var message = document.querySelector(".error_msg");
    var gpa = (totalGradePoint / totalCredit).toFixed(2);
            // determine the degree class
            if(gpa >= 4.50 && gpa <= 5.00){
                degreeClass ="FIRST CLASS";
            }
            else if(gpa >= 3.50 && gpa <= 4.49){
                degreeClass = "SECOND CLASS UPPER";
            }
            else if(gpa >= 2.50 && gpa <= 3.49){
                degreeClass = "SECOND CLASS LOWER";
            }
            else if(gpa >= 1.50 && gpa <= 2.49){
                degreeClass = "THIRD CLASS";
            }
            else{
            degreeClass = "PASS";
        }

        // append the calculations to table
        var tbody = document.querySelector("#coursesTable tbody");

        var tdGPA = document.createElement("td");
        tdGPA.textContent = "Your GPA is: " + gpa;
        var tdEmpty = document.createElement("td");
        tdEmpty.textContent = "";
        var tdStrTC = document.createElement("td");
        tdStrTC.textContent = "Total Credit:";
        var tdTotalCredit = document.createElement("td");
        tdTotalCredit.textContent = totalCredit;
        var tdStrTGP = document.createElement("td");
        tdStrTGP.textContent = "Total Grade Point:";
        var tdTGP = document.createElement("td");
        tdTGP.textContent = totalGradePoint;

        var tr = document.createElement("tr");
        tr.appendChild(tdGPA);
        tr.appendChild(tdEmpty);
        tr.appendChild(tdStrTC);
        tr.appendChild(tdTotalCredit);
        tr.appendChild(tdStrTGP);
        tr.appendChild(tdTGP);
        
        tbody.appendChild(tr);
        tr.classList.add("color");
    
        message.innerHTML = "<p style='color: green'>" + "You have a " + degreeClass + " in this Semester" + "</p>";
}

function formClear(){
    // Clears the content of form fields
    document.getElementById("score").value = "";
    document.getElementById("code").value = "";
    document.getElementById("title").value = "";
    document.getElementById("credit").value = "";
    document.querySelector(".error_msg").value = "";
}

function checkCourseState() {
    courseCount += 1;

    if(courseCount == +serachField.value) {
        calcGPA();
    }
}

function tableUpdate(){ 

        // Update table
        addCourseInfo();
        // Clear form fields
        formClear();
        // focus to course code field
        document.getElementById("code").focus();
        // Check course state
        checkCourseState();
}

document.getElementById("updateButton").addEventListener("click", () => {
    tableUpdate();
});

document.getElementById("calcGPA").addEventListener("click", () => {
    calcGPA();
});