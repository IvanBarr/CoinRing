import MarketStatus from './MarketStatus'
require('dotenv').config()

class Api{
    constructor(){
        this.url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        // this.url = `https://api.nomics.com/v1/market-cap/history?key=${process.env.API_KEY}&start=2020-01-14T00%3A59%3A59.999Z`

        this.callApi(this.url)
        let marketStatus = new MarketStatus()
    }


    callApi(url){
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0].symbol)
            })
            .catch(err => {
                console.error(err)
            })
    }

}

export default Api