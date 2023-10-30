let displayValue="";
function appendToDisplay(value){
    displayValue +=value;
    document.getElementById("display").value=displayValue;
}
function cLearDisplay(){
    displayValue ="";
    document.getElementById("display").value=displayValue;
}
function calculateResult(){
    try{
        displayValue =eval(displayValue);
        document.getElementById("display").value=displayValue;
    } catch(error){
        getElementById("display").value ="error";
    }
}












