import MarketStatus from './MarketStatus'
require('dotenv').config()

// export const Api = {
//     // url: "https://api.coingecko.com/api/v3/coins",
//     // url: "https://api.nomics.com/v1/currencies/ticker?key=50d3530f3903fcf6af244ce0c86fe9e3",
//     url: `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`,
//     callApi() {
//         fetch(this.url)
//         .then(res => res.json())
//         .then(data => {
//             // buildBubbles(data)
//             // updateBubbles(data)
//             // this.refresh()
//             console.log(data[2].symbol)
//             let marketStatus = new MarketStatus()
//         })
//         .catch(err => {
//             console.error(err)
//         })
//     },
//     refresh(){
//         setInterval(() => {
//             fetch(this.url)
//             .then(res => res.json())
//             .then(data => {
//                 // updateBubbles(data)
//             })
//             .catch(err => {
//                 console.log("Failed to refesh")
//                 console.error(err)
//             })
//         }, 10000);
//     }
// }

class Api{
    constructor(){
        // this.url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        this.url = `https://api.nomics.com/v1/market-cap/history?key=${process.env.API_KEY}&start=2020-01-14T00%3A59%3A59.999Z`

        this.callApi(this.url)
        let marketStatus = new MarketStatus()
    }


    callApi(url){
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // buildBubbles(data)
                // updateBubbles(data)
                // this.refresh()
                // console.log(data[2])
                // let marketStatus = new MarketStatus()
            })
            .catch(err => {
                console.error(err)
            })
    }

}

export default Api