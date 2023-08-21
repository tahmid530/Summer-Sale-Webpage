const promobutton = document.getElementById("promobutton").addEventListener("click",()=>{
    document.getElementById("codeAlert").style.display ="block"
    navigator.clipboard.writeText("SELL200")
    setTimeout(()=>{
        document.getElementById("codeAlert").style.display ="none"
    },2000)
})
//products

    const product1 = document.getElementById("product1")
    const product2 = document.getElementById("product2")
    const product3 = document.getElementById("product3")
    const product4 = document.getElementById("product4")
    const product5 = document.getElementById("product5")
    const product6 = document.getElementById("product6")
    const product7 = document.getElementById("product7") 
    const product8 = document.getElementById("product8")
    const product9 = document.getElementById("product9")

//product list
 const productList = document.getElementById("productList")
//Cupon Data
const inputCupon = document.getElementById("inputCupon")

// buttons
 const cuponButton = document.getElementById("cuponButton")
 const makePurchase = document.getElementById("makePurchase")
 const homeButton = document.getElementById("homeButton")

//process
    const  totalPrice =document.getElementById("totalPrice")
    const  discount =document.getElementById("discount")
    const  total =document.getElementById("total")



//product Functions
    product1.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 39.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Spoons = 39.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product2.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 25.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Plates = 25.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product3.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 49.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Home Cooker = 49.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product4.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 49.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Sports Back Cap = 49.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product5.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 69.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Full Jersey Set = 69.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product6.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 159.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Sports cates = 159.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product7.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 185.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Single Relax Chair = 185.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product8.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 299.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Children play = 299.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })
    product9.addEventListener('click',()=>{
        let getTPrice = parseFloat(totalPrice.innerText) + 339.00
        total.innerText = getTPrice +".00";
        totalPrice.innerHTML= getTPrice+".00"
        const addProduct = document.createElement("li")
        addProduct.innerText = "Flexible Sofa = 339.00 ৳"
        productList.appendChild(addProduct)
        disableBtnFunction()
    })

//buttonsFunction
const disableBtnFunction =()=>{
    if(parseFloat(totalPrice.innerHTML)<200){
        cuponButton.ariaDisabled= true
        cuponButton.style.backgroundColor="gray"
        cuponButton.style.borderColor="gray"
    }
    if(parseFloat(totalPrice.innerHTML)>200){
        cuponButton.ariaDisabled= false
        cuponButton.style.backgroundColor="#E527B2"
        cuponButton.style.borderColor="#E527B2"
    }
    if(parseFloat(totalPrice.innerHTML)===0){
        makePurchase.disabled= true
        makePurchase.style.backgroundColor="gray"
    }
    if(parseFloat(totalPrice.innerHTML)>0){
        makePurchase.disabled= false
        makePurchase.style.backgroundColor="#E527B2"
    }
}
disableBtnFunction()

cuponButton.addEventListener('click',()=>{
    if(parseFloat(totalPrice.innerHTML)>200){
        if(inputCupon.value=="SELL200"){
            let getTPrice = parseFloat(totalPrice.innerText)
            let getDisCount = (parseFloat(totalPrice.innerText)/100)*20
            let finalAmount = getTPrice - getDisCount
            console.log(finalAmount)
            discount.innerText= getDisCount.toFixed(2)
            total.innerText = finalAmount
        }
        else{
            alert("Give me a valid cupon code")
        }
    }
})

makePurchase.addEventListener('click',()=>{
    my_modal_1.showModal()
})

homeButton.addEventListener("click",()=>{
    window.location.reload()
})