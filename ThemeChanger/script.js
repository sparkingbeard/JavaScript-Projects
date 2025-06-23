const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        
        if(e.target.id === 'grey' || e.target.id === 'white' || e.target.id === 'blue' || e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    });
});