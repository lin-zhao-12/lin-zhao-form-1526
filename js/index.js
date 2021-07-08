// DECLARING VARIABLES 
// Declare variables that will store references for 
let fm = document.getElementById('contact');
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let me = document.getElementById('message');
let sb = document.getElementById('submit-button');

function formValidator(ev){
  
    ev.preventDefault();

   
// Declare variable that will store regular expression for email


// Start with your function here (come up with the meaningful name).
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    let errors =[];
    let data = [];
   
    // Declare object that will store the form-data
    // Declare array that will store the errors

// FULL NAME

    // Check if fullname is not empty. If so:
    if (fn.value !== '') {
        // Pass the collected value to your object "data".
        data.fullName = fn.value;
    }
       
    // Otherwise: Create a corresponding error-messageand add it to your array "errors".
    else {
        errors.push('Full name is missing');
    }
    
// EMAIL
    
    var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var OK = regx.exec(em.value);
      // Check if email is not empty.
      // Check if email is valid.
       // If so: Pass the collected value to your object "data".
        if (em.value !== '' && OK) {
            data.email = em.value;
        }
         // Otherwise:
          // Create a corresponding error-message "Email is missing".
        else if (em.value == '') {

            errors.push('Email is missing');
        }
        // Create a corresponding error-message "Email is invalid".
        else{ 
            errors.push('Email is invalid');
        }
  
  
 // MESSAGE 
    
    // Check if message is not empty. If so: 
    if (me.value !== '') {
        // Pass the collected value to your object "data".
        data.message = me.value;
       
    }
       
    // Otherwise: Create a corresponding error-message and add it to your array "errors"
    else {
        errors.push('Message is missing');
    }


 // FEEDBACK AND ERROR
    // Check if there is anything in array errors
    if(errors.length !== 0){
       // If so:Print it in JavaScript console.
      console.log(errors);
    }
    // Otherwise:
    else{
       // Print the data in JavaScript console. Clear text-fields
       console.log(data);
       document.getElementById("contact").reset();
      
   
} 

}

// Register your form to "click" event.
fm.addEventListener('submit', formValidator);  
