// Created by Nason
// June 2023
// Functionality to display a hidden message


document.addEventListener('DOMContentLoaded', function() 
 {

const submitButton = document.getElementById('submitButton');
const popUp = document.getElementById('popUp');

submitButton.addEventListener('click',function()
 {
    const inputField = document.getElementById('message').value;
    popUp.textContent = inputField;
    popUp.removeAttribute('hidden');
    });
});