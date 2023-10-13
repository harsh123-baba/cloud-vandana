let display_string = "";
function display(event){
    let str = event.innerText;
    if(str ==  "="){
        display_string = solve();
    }
    else if(str == "AC"){
        display_string = "";
    }
    else{
        if(checkValidity(str)){
            display_string += str;
        }
    }
    document.getElementById("result-string").innerHTML = display_string;
}

function checkValidity(str){
    // check if last char is already an operator
    if(str == '+' || str == '-' || str == '÷' || str == 'x'){
        let lstChar = display_string[display_string.length-1];
        // console.log("here", lstChar);
        if(display_string.length > 1 && (lstChar == '+' || lstChar == '-' || lstChar == '÷' || lstChar == 'x')){
            // console.log(str);
            display_string[display_string.length-1] = str;
            // console.log(display_string)
            return false;
        }
        else{
            return true;
        } 
    }
    else{
        return true;
    }
}

function solve(){
    var eqn = "";
    for(var i = 0; i < display_string.length;i++){
        if(display_string[i] == "÷"){
            eqn += "/"
        }
        else if(display_string[i] == 'x'){
            eqn += '*';
        }
        else{
            eqn += display_string[i];
        }
    }
    // console.log(eqn);
    return eval(eqn);   

}