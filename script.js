let total = 0;

function handleClick(target) {
    const cardName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = cardName;
    const selectedItemsField = document.getElementById('selected-items');
    selectedItemsField.appendChild(li);

    const price = target.childNodes[7].innerText.split(' ')[0];
    sum = parseFloat(total) + parseFloat(price) + ' TK';

    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = sum;

}