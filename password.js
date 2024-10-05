// Retrieve HTML elements from the HTML document using their IDs and store them in a constant variable
const lent = document.getElementById('length')
const display = document.getElementById('display')
const button = document.getElementById('button')
const msg = document.getElementById('msg')

//function for copying the generated password
function copy(){
    navigator.clipboard.writeText(display.value)
    msg.innerHTML = "Copied!";
    setTimeout(() => {
        msg.innerHTML = "";
      }, 900);
}

//Eventlistener for visual feedback when entering length of password
lent.addEventListener('input', () =>{
    let lent2 = parseInt(lent.value)
    if(isNaN(lent2) || lent2 < 5 || lent2 > 15){
        lent.style.borderBottom = '3px solid red';
    }
    else{
        lent.style.borderBottom = '3px solid green';
    }
})

//Eventlistener for generating password when the button is clicked
button.addEventListener('click', () =>{
    let lent2 = parseInt(lent.value)

    //conditional for verifying the length of the password 
    if(isNaN(lent2) || lent2 < 5 || lent2 > 15){
        alert('Password length must be a number between 5 and 15.');
        return;
    }

    //List of all the characters that make up the generated password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';

    //declaring a new variable = a 32bit array whose length is the same as the user's input (length)  
    const cryptoRandomValues = new Uint32Array(lent2);

    //Populating the new variable with 32bit integers using the 'crypto.getRandomValues' method
    crypto.getRandomValues(cryptoRandomValues);

    //Loop for creating the password using modular indexing
    for(let i = 0; i < lent2; i++){
        password += characters.charAt(cryptoRandomValues[i] % characters.length);
    }

    //Displaying of generated password
    display.value = password
})