document.addEventListener('DOMContentLoaded', function () {
    const btnCopy = document.getElementById('btn-copy');

    btnCopy.addEventListener('click', function () {
        const buttonText = btnCopy.textContent;

        navigator.clipboard.writeText(buttonText)
            .then(() => {
                btnCopy.textContent = 'Copied!';
                setTimeout(() => {
                    btnCopy.textContent = buttonText;
                }, 2000);
            })
            .catch(err => {
                console.error('Unable to copy text: ', err);
            });
    });
});

let total = 0;

function handleClick(target) {
    const selectedItemsField = document.getElementById('selected-items');
    const cardName = target.childNodes[5].innerText;
    const ol = document.createElement('ol');
    ol.innerText = cardName;
    selectedItemsField.appendChild(ol);

    const price = target.childNodes[7].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price); 

    const totalPriceField = (document.getElementById('total-price').innerText = total);



const btnPurchase = document.getElementById('btn-purchase');

if (total > 0) {
    btnPurchase.disabled = false;
    btnPurchase.style.backgroundColor = '#E527B2'
}


const btnApply = document.getElementById('btn-apply');

if (total >= 200) {
    btnApply.disabled = false;
    btnApply.style.backgroundColor = '#E527B2'
}
}



function cuponCode(data) {
    const couponField = document.getElementById('coupon-field')
    if (couponField.value === 'SELL200') {
        const totalValue = document.getElementById('total-price')
        const priceValueString = totalValue.innerText;
        const priceValue = parseFloat(priceValueString);
        const discountValue = (parseFloat(priceValue / 100)) * 20;
        const discount = priceValue - discountValue;


        const discountTotal = (document.getElementById('discount').innerText = discountValue.toFixed(2));

        const priceTotal = (document.getElementById('total').innerText = discount.toFixed(2));

    }
    else {
        alert('Invalid cupon code.')
    }
}



const btnPurchase1 = document.getElementById('btn-purchase').addEventListener('click', () => {
    my_modal_1.showModal()
});
const btnHome = document.getElementById('btn-home').addEventListener('click', () => {
    window.location.reload()
});