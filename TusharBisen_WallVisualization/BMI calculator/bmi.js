const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height < 1 || isNaN(height)){
        results.textContent = `Please enter valid age ${height}`;
    }else if(weight === '' || weight < 1 || isNaN(weight)){
        results.textContent = `Please enter valid age ${weight}`;
    } else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        let fit; 
        if(bmi < 18.6){
            fit ='underweight';
        }else if(bmi > 18.6 && bmi < 24.9){
            fit = 'normal';
        }else{
            fit = 'overweight';
        }

        //show in result
        results.textContent = `BMI index is: ${bmi}
        Hence you are ${fit}`;
    }

   
})