
function calculateMortgage() {
    let MortgageAmount = document.getElementById("Mortgage_Amount").value;
    let Mortgage_Term = document.getElementById("Mortgage_Term").value;
    let InterestRate = document.getElementById("Interest_Rate").value;
  
    let monthlyRate = InterestRate / 100 / 12;
    let totalPayments = Mortgage_Term * 12;
    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = MortgageAmount / totalPayments;
    } else {
      let factor = Math.pow(1 + monthlyRate, totalPayments);
      monthlyPayment = (MortgageAmount * (monthlyRate * factor)) / (factor - 1);
    }
  
    let totalRepayment = monthlyPayment * totalPayments;
  
    document.getElementById("monthlyRepayments").innerText =
      "£" + monthlyPayment.toFixed(3);
    document.getElementById("totalRepayment").innerText =
      "£" + totalRepayment.toFixed(3);
  }

function error() {
    let isValid = true;
  
    let inputField = document.getElementById("Mortgage_Amount");
    let inputTerm = document.getElementById("Mortgage_Term");
    let inputRate= document.getElementById("Interest_Rate");
    let inputRadio= document.getElementsByName("radioButtons");
  
    const errorAmount = document.getElementById("errorMortgageAmount");
    const errorTerm = document.getElementById("errorMortgageTerm");
    const errorRate = document.getElementById("errorMortgageRate");
    const errorRadio = document.getElementById("errorMortgageType");
  
    // Clear previous errors
    errorAmount.innerText = "";
    errorTerm.innerText = "";
    errorRate.innerText = "";
    errorRadio.innerText = "";
  
    if (inputField.value.trim() === "") {
      inputField.required = true;
      errorAmount.innerText = "This field is required";
      isValid = false;
    }
  
    if (inputTerm.value.trim() === "") {
      inputTerm.required = true;
      errorTerm.innerText = "This field is required";
      isValid = false;
    }
    if (inputRate.value.trim() === "") {
        inputRate.required = true;
        errorRate.innerText = "This field is required";
        isValid = false;
      }
     
      let isRadioChecked = false;
      for (let i = 0; i < inputRadio.length; i++) {
        if (inputRadio[i].checked) {
          isRadioChecked = true;
          break;
        }
      }
    
      if (!isRadioChecked) {
        errorRadio.innerText = "This field is required";
        isValid = false;
      }
      if (isValid) {
        calculateMortgage(); // run the calculator if form is valid
      }
    return false; // Only submits the form if everything is valid
  }
  function clearAll(){
   let inputs = document.getElementsByClassName("inputs")
    
  }
  

