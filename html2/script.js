var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function setModalValue() {
    document.getElementById("modal-name").innerHTML = document.getElementById("name").value;
    document.getElementById("modal-email").innerHTML = document.getElementById("email").value;

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


    document.getElementById("modal-q1").innerHTML = question1;
    document.getElementById("modal-q2").innerHTML = question2;
    document.getElementById("modal-q3").innerHTML = question3;

    document.getElementById("modal-q4").innerHTML = document.getElementById("row5").value;

}

function openModal() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
    let myForm = document.getElementById("customerForm");
    myForm.reset();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        let myForm = document.getElementById("customerForm");
        myForm.reset();
    }
}



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
    
    setModalValue();
    openModal();

}
