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
    total = parseFloat(total) + parseFloat(price) + ' TK'

    const totalPriceField = (document.getElementById('total-price').innerText = total);
}

const btnPurchase = document.getElementById('btn-purchase').addEventListener('click', () => {
    my_modal_1.showModal()
});
const btnHome = document.getElementById('btn-home').addEventListener('click', () => {
    window.location.reload()
});

//btnPurchase.addEventListener('click', () => {
   /// my_modal_1.showModal()
//});

//btnPurchase.addEventListener('click',()=>{
   // my_modal_1.showModal()
//})