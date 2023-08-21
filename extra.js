let total = 0;

function handleClick(target) {
    const cardName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = cardName;
    const selectedItemsField = document.getElementById('selected-items');
    selectedItemsField.appendChild(li);

    const price = target.childNodes[7].innerText.split(' ')[0];
    sum = 'Total price: ' + parseFloat(total) + parseFloat(price) + ' TK';

    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = sum;
    console.log(sum);
}







const card1 = document.getElementById('card-1').addEventListener('click',function () {
        
})
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const card5 = document.getElementById('card-5');
const card6 = document.getElementById('card-6');


const totalPrice = document.getElementById("total-price")
const discount = document.getElementById("discount")
const total = document.getElementById("total")









let total = 0;
function handleClick(target) {
    const selectedItemsField = document.getElementById('selected-items');
    const totalPriceField = document.getElementById('total-price');
    const cardName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = cardName;
    selectedItemsField.appendChild(li);

    
    const price = target.childNodes[7].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    console.log(total);

    
    //totalPriceField.innerText = sum;
    //console.log(sum);
}