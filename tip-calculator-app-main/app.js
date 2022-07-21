let bill = document.querySelector('.Bill')
let Five = document.querySelector('.five')
let Ten = document.querySelector('.ten')
let Fifteen = document.querySelector('.fifteen')
let Twenty = document.querySelector('.twenty')
let TwentyFive = document.querySelector('.twenty-five')
let custom = document.querySelector('.cust')
let ppl = document.querySelector('.ppl')

let Tip = document.querySelector('.Tip')
let Total = document.querySelector('.Total')
let Btn = document.querySelector('.btn')

let calcFunc = () => {

    let fivePcent = 5/100
    if ((bill.value == null || bill.value == "" || bill.value <= 0) && (ppl.value == null || ppl.value == "" || ppl.value <= 0)) {
        document.querySelector('.wrong').innerHTML = 'Pls input a Number greater than Zero';
        document.querySelector('.btv').innerHTML = 'Pls input the Number of people';
        console.log();

    }
    else if (ppl.value == null || ppl.value == "" || ppl.value <= 0) {
        document.querySelector('.btv').innerHTML = 'Pls input the Number of people';
    }
    else if (bill.value == null || bill.value == "" || bill.value <= 0){
        document.querySelector('.wrong').innerHTML = 'Pls input a Number greater than Zero';
    }

    else{
    Tip.innerHTML = `$${fivePcent * bill.value}`
    console.log(bill.value);
    
    Total.innerHTML = `$${fivePcent * bill.value * ppl.value}` 
    console.log(Btn.value);
    }

   
  
}
let ResetFunc = () => {
    Tip.innerHTML = "$0.00"
    Total.innerHTML = "$0.00"
    bill.value = ""
    ppl.value = "";
    custom.value = "";
    document.querySelector('.wrong').innerHTML = '';
    document.querySelector('.btv').innerHTML = '';
}

let customFunc = () => {
    if ((bill.value == null || bill.value == "" || bill.value <= 0) && (ppl.value == null || ppl.value == "" || ppl.value <= 0)) {
        document.querySelector('.wrong').innerHTML = 'Pls input a Number greater than Zero';
        document.querySelector('.btv').innerHTML = 'Pls input the Number of people';
        console.log();

    }
    else if (ppl.value == null || ppl.value == "" || ppl.value <= 0) {
        document.querySelector('.btv').innerHTML = 'Pls input the Number of people';
    }
    else if (bill.value == null || bill.value == "" || bill.value <= 0){
        document.querySelector('.wrong').innerHTML = 'Pls input a Number greater than Zero';
    }
    else if (custom.value == null || custom.value == "" || custom.value <= 0 ) {
        document.querySelector('.cus').innerHTML = 'Pls input a Number greater than Zero'
    }
    else{
        Tip.innerHTML = `$${(custom.value/100) * bill.value}`;
        Total.innerHTML = `$${(custom.value/100) * bill.value * ppl.value}`;
    }

   


}


Btn.addEventListener('click', ResetFunc)

custom.addEventListener('mouseout', customFunc)



// let calcBill = calcFunc(`$ ${bill.value}`)
// console.log(bill.value);


Five.addEventListener('click', calcFunc)

