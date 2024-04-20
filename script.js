const inputs = document.querySelectorAll("input:not([type='submit'])");

inputs.forEach(input =>{
     // Add event listener for invalid inputs for all inputs
    input.addEventListener('invaid', addErrorMessage);
    // Check validity on every blur
    input.addEventListener('blur',(Event) =>{
        input.checkValidity();
    })
    // Remove existing error messages on focus
    input.addEventListener('focus',removeErrorMessage);
})

function addErrorMessage(e){
    var name = e.target.getAttribute("name");
}

var error_icon = document.createElement('span');
error_icon.setAttribute("data-id", name);
error_icon.classList.add('error-icon');
error_icon.innerHTML= "<img src='icon-error.svg' alt=''>";  ``


