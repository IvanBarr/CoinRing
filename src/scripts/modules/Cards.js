require('dotenv').config()
import Favorites from './Favorites'

class Cards{
    constructor(fav){
        this.apiUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        this.cards = document.querySelector('.cards')
        this.cards_container = document.querySelector('.cards__container')
        this.favorites = JSON.parse(localStorage.getItem("coin"))
        this.makeCard()
        this.events()
    }

    events(){
        // this.cards_container.addEventListener('click', this.addToFavorites.bind(this))
       
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
        let priceChangeContainer = document.getElementsByClassName("price-change")
        let priceChangePct = document.getElementsByClassName("price-change-pct")
        for(let i = 0; i < priceChangeContainer.length; i++){
            let changeInt = parseFloat(priceChangePct[i].innerText)
            if (Math.sign(changeInt) === 1){
                priceChangeContainer[i].style.backgroundColor = '#0D1F24'
                priceChangePct[i].style.color = "green"
            }else if (Math.sign(changeInt) === -1){
                priceChangeContainer[i].style.backgroundColor = '#1B0B19'
                priceChangePct[i].style.color = "red"
            }else{
                priceChangeContainer[i].style.backgroundColor = ''
                priceChangePct[i].style.color = ""
            }
        }
        // console.log(priceChangeContainer[1].innerText)
    }

    makeCard(){
        fetch(this.apiUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(this.favorites[0] === data[0].symbol)
                let markup
                this.cards_container.innerHTML = ''
                if(!location.href.includes("favorites.html")){
                    for(let i = 0; i < 100; i++){
                        markup = `
                            <div class="cards__item">
                                <div class="wrapper">
                                    <div class="item__symbol-price">
                                        <b class="symbol-price__symbol">${i+1 + '. ' + data[i].symbol}</b>
                                        <b class="symbol-price__price">$${this.formatNumber(parseFloat(data[i].price).toFixed(3))}</b>
                                    </div>
                                    <div class="price-change">
                                        <b class="price-change-timeframe">1hr</b>
                                        <p class="price-change-pct">
                                            ${
                                                // If data for last 24hrs available then show pct change, if not, show "N/A"
                                                data[i]['1d'] ? (data[i]['1d']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                            }
                                        </p>
                                    </div>
                                    <div class="price-change">
                                        <b class="price-change-timeframe">24hr</b>
                                        <p class="price-change-pct">
                                            ${
                                                // If data for last 7 days available then show pct change, if not, show "N/A"
                                                data[i]['1d'] ? (data[i]['7d']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                            }
                                        </p>
                                    </div>
                                    <div class="price-change">
                                        <b class="price-change-timeframe">Year To Date</b>
                                        <p class="price-change-pct">
                                            ${
                                                // If data for Year To Date available then show pct change, if not, show "N/A"
                                                data[i]['ytd'] ? (data[i]['ytd']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                            }
                                        </p>
                                    </div>
                                    <div class="market-cap">
                                        <b class="price-change-timeframe">Marketcap</b>
                                        <p>
                                            ${
                                                // If data for last 7 days available then show pct change, if not, show "N/A"
                                                data[i].market_cap ? this.abbreviateNumber(data[i].market_cap) : 'N/A'
                                            }
                                        </p>
                                    </div>
                                    <div class="volume">
                                        <b class="price-change-timeframe">Volume</b>
                                        <p>
                                            ${
                                                // If data for last 7 days available then show pct change, if not, show "N/A"
                                                data[i]['1d'] ? this.abbreviateNumber(data[i]['1d']['volume']) : 'N/A'
                                            }
                                        </p>
                                    </div>
                                    <i class="add-favorite_btn far fa-star"></i>
                                </div>
                            </div>
                        `
                        this.cards_container.insertAdjacentHTML("beforeend", markup)
                    }
                }else{
                    if(this.favorites){
                        for(let i = 0; i < 100; i++){
                           for(let x = 0; x < 100; x++){
                               if(this.favorites[i] === data[x].symbol){
                                    markup = `
                                    <div class="cards__item">
                                        <div class="wrapper">
                                            <div class="item__symbol-price">
                                                <b class="symbol-price__symbol">${x+1 + '. ' + data[x].symbol}</b>
                                                <b class="symbol-price__price">$${this.formatNumber(parseFloat(data[x].price).toFixed(3))}</b>
                                            </div>
                                            <div class="price-change">
                                                <b class="price-change-timeframe">1hr</b>
                                                <p class="price-change-pct">
                                                    ${
                                                        // If data for last 24hrs available then show pct change, if not, show "N/A"
                                                        data[x]['1d'] ? (data[x]['1d']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                                    }
                                                </p>
                                            </div>
                                            <div class="price-change">
                                                <b class="price-change-timeframe">24hr</b>
                                                <p class="price-change-pct">
                                                    ${
                                                        // If data for last 7 days available then show pct change, if not, show "N/A"
                                                        data[x]['1d'] ? (data[x]['7d']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                                    }
                                                </p>
                                            </div>
                                            <div class="price-change">
                                                <b class="price-change-timeframe">Year To Date</b>
                                                <p class="price-change-pct">
                                                    ${
                                                        // If data for Year To Date available then show pct change, if not, show "N/A"
                                                        data[x]['ytd'] ? (data[x]['ytd']['price_change_pct'] * 100).toFixed(2) + '%' : 'N/A'
                                                    }
                                                </p>
                                            </div>
                                            <div class="market-cap">
                                                <b class="price-change-timeframe">Marketcap</b>
                                                <p>
                                                    ${
                                                        // If data for last 7 days available then show pct change, if not, show "N/A"
                                                        data[x].market_cap ? this.abbreviateNumber(data[x].market_cap) : 'N/A'
                                                    }
                                                </p>
                                            </div>
                                            <div class="volume">
                                                <b class="price-change-timeframe">Volume</b>
                                                <p>
                                                    ${
                                                        // If data for last 7 days available then show pct change, if not, show "N/A"
                                                        data[x]['1d'] ? this.abbreviateNumber(data[x]['1d']['volume']) : 'N/A'
                                                    }
                                                </p>
                                            </div>
                                            <i class="add-favorite_btn far fa-star"></i>
                                        </div>
                                    </div>
                                `
                                this.cards_container.insertAdjacentHTML("beforeend", markup)
                               }
                           }
                        }
                        
                    }else{
                        alert('nothing here!')
                    }
                }
                this.setPriceChangeBgColor()
                // let cardItem = document.querySelector('.add-favorite_btn')
                // addToFavoriteBtn.addEventListener('click', () => {console.log('hi')})
            })
            .catch(err => {
                console.error(err)
            })
    }
    
    addToFavorites(e){
        let target = e.target
        if (target.className != "add-favorite_btn far fa-star") return

        // this.favorites.push(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))
         
        // if(localStorage.getItem("coin") != null && this.favorites.length === 0){
        //     this.favorites = JSON.parse(localStorage.getItem("coin"))
        //     this.favorites.push(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))
        //     localStorage.setItem("coin", JSON.stringify(this.favorites))
        //     console.log(this.favorites + '' + '1st if')
            
        // }else if(localStorage.getItem("coin") === null && this.favorites.length === 0){
        //     this.favorites.push(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))
        //     localStorage.setItem("coin", JSON.stringify(this.favorites))
        //     console.log(this.favorites + '' + '2nd if')
        // }else if(this.favorites.length){
        //     localStorage.clear()
        //     this.favorites.push(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))
        //     localStorage.setItem("coin", JSON.stringify(this.favorites))
        //     console.log(this.favorites + '' + '3rd if')
        // }


        // console.log(localStorage.getItem("coin"))

        // if(localStorage.getItem("coin") === null){
        //     this.favorites.push(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))
        //     localStorage.setItem("coin", JSON.stringify(this.favorites))
        // }else{
        //     this.favorites = JSON.parse(localStorage.getItem("coin"))
        //     this.favorites.push(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))
        //     localStorage.setItem("coin", JSON.stringify(this.favorites))
        // }
        // console.log('hi')
    }
}

export default Cards