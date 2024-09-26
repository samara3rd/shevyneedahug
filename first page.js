document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.querySelector('.button');  
    button.addEventListener('click', (e) => {  
       e.preventDefault();  
       alert('Button clicked!');  
       // You can add more functionality here  
       window.location.href = button.href;  
    });  
 });