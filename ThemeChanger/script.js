// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");

// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){

//         if(e.target.id === 'grey' || e.target.id === 'white' || e.target.id === 'blue' || e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     });
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        switch (e.target.id) {
            case 'grey':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                document.body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                document.body.style.backgroundColor = e.target.id;
                break;
            default:
                console.log('error');
        }
    });
});