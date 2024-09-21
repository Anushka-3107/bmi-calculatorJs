
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const comment = document.getElementById('comment');

let heightVal = 0;
let weightVal = 0;

const enterHeight = (e) => {
    console.log(e.target.value);
    heightVal = parseFloat(e.target.value);
}

const enterWeight = (e) => {
    console.log(e.target.value);
    weightVal = parseFloat(e.target.value);
    
}

const calculateBMI = () => {
    if(heightVal > 0 && weightVal > 0){
        const bmi = weightVal / (heightVal* heightVal);
        console.log('bmi:' , bmi);

        let bmiCategory = '';

        if(bmi < 18.5){
            bmiCategory += 'Underweight';
        }else if(bmi >= 18.5 && bmi < 24.9){
            bmiCategory += 'Normal Weight';
        }else if(bmi >= 25 && bmi < 29.9){
            bmiCategory += 'Overweight';
        }else{
            bmiCategory += 'Obesity';
        }
       
        comment.textContent = `your bmi is : ${bmi.toFixed(4)} , you are ${bmiCategory}`;
    }
    else{
        comment.textContent = 'Please enter valid height and weight';
    }

}

height.addEventListener('change', enterHeight);
weight.addEventListener('change',enterWeight);

btn.addEventListener('click', calculateBMI);