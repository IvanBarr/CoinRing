require('dotenv').config()

class Cards{
    constructor(){
        this.apiUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        this.cards = document.querySelector('.cards')
        this.cards_container = document.querySelector('.cards__container')
        this.makeCard()
    }

    formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    abbreviateNumber(value){
        let newValue = parseInt(value)
        const suffixes = ["", "K", "M", "B","T"]
        let suffixNum = 0;
        while (newValue >= 1000) {
            newValue /= 1000
            suffixNum++;
        }

        newValue = newValue.toPrecision(3)

        newValue += suffixes[suffixNum]
        return newValue
    }

    setPriceChangeBgColor(){
        let priceChangeBoxes = document.getElementsByClassName("price-change")
        for(let i = 0; i < priceChangeBoxes.length; i++){
            let changeInt = parseFloat(priceChangeBoxes[i].innerText)
            if (Math.sign(changeInt) === 1){
                priceChangeBoxes[i].style.backgroundColor = '#0D1F24'
                priceChangeBoxes[i].style.color = "green"
            }else if (Math.sign(changeInt) === -1){
                priceChangeBoxes[i].style.backgroundColor = '#1B0B19'
                priceChangeBoxes[i].style.color = "red"
            }else{
                priceChangeBoxes[i].style.backgroundColor = ''
                priceChangeBoxes[i].style.color = ""
            }
        }
        // console.log(priceChangeBoxes[1].innerText)
    }

    makeCard(){
        fetch(this.apiUrl)
            .then(res => res.json())
            .then(data => {
                this.cards_container.innerHTML = ''
                for(let i = 0; i < 100; i++){
                    let markup = `
                        <div class="cards__item">
                            <div class="wrapper">
                                <div class="item__symbol-price">
                                    <b class="symbol-price__symbol">${i+1 + '. ' + data[i].symbol}</b>
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
                                            data[i].market_cap ? this.abbreviateNumber(data[i].market_cap) : 'N/A'
                                        }
                                    </p>
                                </div>
                                <div class="volume">
                                    <p>
                                        ${
                                            // If data for last 7 days available then show pct change, if not, show "N/A"
                                            data[i]['1d'] ? this.abbreviateNumber(data[i]['1d']['volume']) : 'N/A'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    `
                    this.cards_container.insertAdjacentHTML("beforeend", markup)
                }
                this.setPriceChangeBgColor()
                // console.log(data[2])
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export default Cards