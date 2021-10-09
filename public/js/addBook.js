const { name } = require("ejs");

const form=document.getElementById('form');
const bname=document.getElementById('bname');
const email=document.getElementById('email');
const username=document.getElementById('username');
const date = document.getElementById('date');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     checkInputs();
//     var validation = true;

// });

function checkInput(){
    //get th evalues from the inputs
    const nameValue=bname.value.trim();
    const emailValue=email.value.trim();
    const usernameValue=username.value.trim();
    const dateValue = date.value.trim();
    if(nameValue===''){
        //show error
        //add error class
        setErrorFor(bname, 'Name cannot be blank');
        validation = false;}
        else{
        //add success class
        setSuccessFor(bname);
    }
    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
        validation = false;}
        else {
        //add success class
        setSuccessFor(email);
        }
    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
        var validation = false;}
        else{
        //add success class
        setSuccessFor(username);
    }

    if(dateValue===''){
        setErrorFor(date,'Date cannot be blank');
    }
    else{
        setSuccessFor(date);
    }

    return validation; 

}

function setErrorFor(input, message){
    const formControl= input.parentElement; //.form-control
    const small= formControl.querySelector('small');

    //add error message inside small tag
    small.innerText=message;

    //add error class
    formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
    
}
