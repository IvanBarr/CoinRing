import { buildBubbles } from './Bubbles'
import { updateBubbles } from './Bubbles'
require('dotenv').config()

export const Api = {
    // url: "https://api.coingecko.com/api/v3/coins",
    // url: "https://api.nomics.com/v1/currencies/ticker?key=50d3530f3903fcf6af244ce0c86fe9e3",
    url: `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`,
    callApi() {
        fetch(this.url)
        .then(res => res.json())
        .then(data => {
            // buildBubbles(data)
            // updateBubbles(data)
            // this.refresh()
            console.log(data[2].symbol)
        })
        .catch(err => {
            console.error(err)
        })
    },
    refresh(){
        setInterval(() => {
            fetch(this.url)
            .then(res => res.json())
            .then(data => {
                updateBubbles(data)
            })
            .catch(err => {
                console.log("Failed to refesh")
                console.error(err)
            })
        }, 10000);
    }
}
