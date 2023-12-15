function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    height = height.value / 100;
    let result = weight.value/ (height * height);
    if(result < 18.5){
        document.getElementById('result').innerText = 'Underweight!' 
    }
    else if(result>18.5 && result <24.9){
        document.getElementById('result').innerText = 'Normal!'
    }
    else if(result>25 && result <29.9){
        document.getElementById('result').innerText = 'overweight!'
    }
    else if(result>30 && result <35){
        document.getElementById('result').innerText = 'Obesity!'
    }
    else{
        document.getElementById('result').innerText = 'Severe Obesity!'

    }
}