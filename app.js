let billValue = "";
let procentageValue = "";
let customProcentageValue = "";
let numberOfPeople = "";

const activeButtonCheck = document.querySelectorAll('.btnProcentage');

const billInput = document.querySelector('#bill');
const customInput = document.querySelector('#custom');
const peopleInput = document.querySelector('#number-of-people');

const tipAmount = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('#totalAmount');

billInput.addEventListener('input', (event)=>{
    event.preventDefault(event);
    billValue = event.target.value;

    calculate();
    calculateCustom();
});

peopleInput.addEventListener('input', (event)=>{
    event.preventDefault(event);
    numberOfPeople = event.target.value;

    calculate();
    calculateCustom();

});

/***************** Procentage Inputs ******************/ 

function procentage(event){
 procentageValue = event.id;
    activeToggler();
    event.classList.toggle('button-active');

 calculate();
}

customInput.addEventListener('input', (event)=>{
    event.preventDefault(event);
    customProcentageValue = event.target.value;
 
    procentageValue = "";
    activeToggler();
    calculateCustom();

});

/******************* Calculation functions *****************/
function calculate(){

    if(billValue!="" && procentageValue!="" && numberOfPeople!=""){
        //Tip Amount
        tipAmount.innerText ='$' +  (( billValue * (procentageValue / 100) ) / numberOfPeople ).toFixed(2);
       
        //Total
        totalAmount.innerText ='$' +  ((( billValue * (procentageValue / 100) ) / numberOfPeople) + (billValue / numberOfPeople)).toFixed(2);
    }else{
        return;
    }
}

function calculateCustom(){

    if(billValue!="" && customProcentageValue!="" && numberOfPeople!=""){
        //Tip Amount
        tipAmount.innerText = '$' + (( billValue * (customProcentageValue / 100) ) / numberOfPeople ).toFixed(2);
       
        //Total
        totalAmount.innerText ='$' + ((( billValue * (customProcentageValue / 100) ) / numberOfPeople) + (billValue / numberOfPeople)).toFixed(2);
    }else{
        return;
    }
}
/******* Changes color of button when clicked*/
function activeToggler(){
    activeButtonCheck.forEach(button =>{
       const check = button.classList.contains('button-active');
       if(check === true){
            button.classList.toggle('button-active')
       }else{
        return;
       }
    })
}
function reset(){
    tipAmount.innerText = '$ 0.00';
    totalAmount.innerText = '$ 0.00';
    billInput.value = "";
    peopleInput.value = "";
    customInput.value = "";
    billValue = "";
    procentageValue = "";
    customProcentageValue = "";
    numberOfPeople = "";
    activeToggler();
}