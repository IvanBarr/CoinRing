export function buildBubbles(data){
    let body = document.body

    // Create elements
    let bubble = document.createElement("div")
    let p = document.createElement('p')

    // Create text nodes
    // let textNode = document.createTextNode(data[2].market_data.current_price.usd)
    let textNode = document.createTextNode(data[2].symbol +' '+ data[2].price)


    // Add class
    bubble.classList.add('bubble')

    // Append
    p.appendChild(textNode)
    bubble.appendChild(p)
    body.appendChild(bubble)

}

export function updateBubbles(data){
    let bubble = document.getElementsByClassName('bubble')[0]
    // bubble.childNodes[0].innerText = data[2].market_data.current_price.usd
    bubble.childNodes[0].innerText = data[2].symbol +' '+ data[2].price
    

    // let width = 200;
    // bubble.style.transform = `scale(0.${data[2].price[6]})`
    // bubble.style.height = width + (data[2].price[7] + '0' - 10) + 'px'
    // console.log(data[2].price[7])
    bubble.style.transform = `scale(${data[2]["1d"].price_change_pct * 100})`
    // console.log(data[2]["1d"].price_change_pct * 100)
}