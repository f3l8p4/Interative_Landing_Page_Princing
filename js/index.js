let range  = document.getElementById('range')
let pageviews = document.getElementById("pageviews")
let price = document.getElementById("value")
let biling = document.getElementsByClassName("billing")
let dot = document.getElementsByClassName("dot")
let yearlyBilling = false
biling.addEventListener("click",function(){
    if (dot.style.float == "right") {
      yearlyBilling = false
      dot.style.float = "left"
      biling.classList.add("form-active")
    } else {
      yearlyBilling = true
      dot.style.float = "right"
      biling.classList.remove("form-active")
    }
  })
/*const allprices= [
    {
        pageviews: '10K',
        price: 8
    },
    {
        pageviews: '50K',
        price: 12
    },
    {
        pageviews: '100K',
        price:16
    },
    {
        pageviews: '500K',
        price: 24
    },
    {
        pageviews: '1M',
        price: 36
    }
]
pageviews.innerHTML = `${price.pageviews}`
let multiplier = yearlyBilling ? 0.75 : 1
let finalPrice = allPrices[sv].price * multiplier
  htmlPrice.innerHTML = `$${finalPrice}.00`
  */
console.log('OOLA')  