let range  = document.querySelector("input")
let pageviews = document.getElementById("pageviews")
let price = document.getElementById("value")
let biling = document.getElementsByClassName("billing")
let dot = document.getElementsByClassName("dot")
let yearlyBilling = false
biling.addEventListener("click",function(e){
    if (dot.style.float == "right") {
        dot.style.float = "left"
      } else {
        dot.style.float = "right"
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