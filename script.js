function error(){
    let inputField = document.getElementById("input");
    let errorMsg = document.getElementById("demo");

    if (inputField.value.trim() === "") { 
        inputField.required = true;  
        errorMsg.innerHTML = "This field is required"; 
        return false; 
    } else {
        errorMsg.innerHTML = ""; 
        return true; 
    }
}