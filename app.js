const button = document.getElementById('calculate')
const reset = document.getElementById('reset')
   
button.addEventListener('click', BMI)
reset.addEventListener('click', resetFields)

function BMI(){
   const h = document.getElementById('height').value;
   const w = document.getElementById('weight').value;
   const bmi = w/(h/100*h/100);
   const bmio = bmi.toFixed(2);
   document.getElementById('result').textContent = bmio;
}

function resetFields(){
    document.getElementById('height').value = undefined;
    document.getElementById('weight').value = undefined;
    document.getElementById('result').textContent = '';
}