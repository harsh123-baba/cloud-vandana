function submitFunc(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById('email').value;
    let row5 = document.getElementById("suggestion").value;
    if(name == ""){
        console.log("name")
        alert("Please fill your name");
        return;
    }
    else if(email == ""){
        alert("Please fill your email");
        return;
    }
    else if(row5 == ""){
        alert("Please fill your suggestion");
        return;
    }
    else{
        let name = document.getElementById('name').value;
        let email = document.getElementById("email").value;
        let question1 = "No";
    if (document.getElementById("row2-yes").checked) {
        question1 = "Yes";
    }

    let question2 = "No";
    if (document.getElementById("row3-yes").checked) {
        question2 = "Yes";
    }

    let question3 = "Unsatified";
    if (document.getElementById("row4-satisfied").checked) {
        question3 = "Satisfied";
    }
    if (document.getElementById("row4-undecided").checked) {
        question3 = "Undecided";
    }

    let question4 = document.getElementById("suggestion").value;
    let popup = "Name : "+ name+ 
    "\nEmail : " + email+
    "\nIs this first time You are using our products & service? : "+ question1+
    "\nWould you suggestion to your friends and collegue? : "+ question2+
    "\nHow satified are you with our company overall? : "+ question3+
    "\nDo you have suggetion to improve our service? : "+ question4
    alert(
        popup
    )
    reset();
    }
}

function reset(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("row2-yes").checked =true;
    document.getElementById("row3-yes").checked =true;
    document.getElementById("row4-satisfied").checked =true;
    document.getElementById('suggestion').value = ""; 
}


