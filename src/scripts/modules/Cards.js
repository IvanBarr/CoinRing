require('dotenv').config()

class Cards{
    constructor(){
        this.apiUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        this.cards = document.querySelector('.cards')
        this.cards_wrapper = document.querySelector('.cards__wrapper')
        this.makeCard()
    }
    formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    makeCard(){
        fetch(this.apiUrl)
            .then(res => res.json())
            .then(data => {
                this.cards_wrapper.innerHTML = ''
                for(let i = 0; i < 100; i++){
                    let markup = `
                        <div class="cards__item">
                            <div class="item__symbol-price">
                                <b class="symbol-price__symbol">${data[i].symbol}</b>
                                <b class="symbol-price__price">${this.formatNumber(parseFloat(data[i].price).toFixed(3))}</b>
                            </div>
                            <div class="price-change">
                                <p>
                                    ${
                                        // If data for last 24hrs available then show pct change, if not, show "N/A"
                                        data[i]['1d'] ? (data[i]['1d']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                    }
                                </p>
                            </div>
                            <div class="price-change">
                                <p>
                                    ${
                                        // If data for last 7 days available then show pct change, if not, show "N/A"
                                        data[i]['1d'] ? (data[i]['7d']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                    }
                                </p>
                            </div>
                            <div class="price-change">
                                <p>
                                    ${
                                        // If data for Year To Date available then show pct change, if not, show "N/A"
                                        data[i]['ytd'] ? (data[i]['ytd']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                    }
                                </p>
                            </div>
                            <div class="market-cap">
                                <p>
                                    ${
                                        // If data for last 7 days available then show pct change, if not, show "N/A"
                                        data[i].market_cap ? this.formatNumber(data[i].market_cap) : 'N/A'
                                    }
                                </p>
                            </div>
                            <div class="volume">
                                <p>
                                    ${
                                        // If data for last 7 days available then show pct change, if not, show "N/A"
                                        data[i]['1d'] ? this.formatNumber(data[i]['1d']['volume']) : 'N/A'
                                    }
                                </p>
                            </div>
                        </div>
                    `
                    this.cards_wrapper.insertAdjacentHTML("beforeend", markup)
                }
                console.log(data[0])
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export default Cards