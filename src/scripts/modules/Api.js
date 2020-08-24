import MarketStatus from './MarketStatus'
import Cards from './Cards'
import Favorites from './Favorites'
// require('dotenv').config()

class Api{
    constructor(){
        // this.url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        // this.url = `https://api.nomics.com/v1/market-cap/history?key=${process.env.API_KEY}&start=2020-01-14T00%3A59%3A59.999Z`
        // this.callApi(this.url)
        new MarketStatus()
        new Cards()
        new Favorites()
        setTimeout(this.refresh(), 10000)
    }


    refresh(){
        setInterval(() => {
            new MarketStatus()
            new Cards()
        }, 10000)
    }

}

export default Api