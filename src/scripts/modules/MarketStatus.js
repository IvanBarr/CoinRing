require('dotenv').config()

class MarketStatus{
    constructor(){
        // Global variables
        this.totalMarketCap
        this.yesterdaysDate = this.yesterdaysDate()
        this.currentHour = this.currentHour()

        // URLS
        this.coinsURL = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&1d`
        this.marketCapUrl = `https://api.nomics.com/v1/market-cap/history?key=${process.env.API_KEY}&start=${this.yesterdaysDate}T${this.currentHour}%3A59%3A59.999Z`
        this.volumeUrl = `https://api.nomics.com/v1/volume/history?key=${process.env.API_KEY}&start=${this.yesterdaysDate}T${this.currentHour}%3A59%3A59.999Z`
        
        // Eelements
        this.marketcap = document.querySelector('.market-status__marketcap')
        this.volume = document.querySelector('.market-status__volume')
        this.dominanceElement = document.querySelector('.market-status__dominance')
        this.marketCapChangeEl = document.querySelector('.marketcap-change__ptc')
        this.volumeChangeEl = document.querySelector('.volume-change__ptc')

        // Sets the total cryptocurrency market cap
        this.callApi(this.marketCapUrl, this.setMarketCap)
        // Sets the total 24 hour cryptocurrency volume
        this.callApi(this.volumeUrl, this.setVolume)
        // Sets the top three dominant coins
        this.callApi(this.coinsURL, this.setDominance)
        
    }

    yesterdaysDate(){
        let d = new Date();
        let currentDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
        let yesterday = currentDate.setDate(currentDate.getDate() - 1)
        let newDate = new Date(yesterday)
        let dateString = newDate.getUTCFullYear() + "-" + ("0" + (newDate.getUTCMonth()+1)).slice(-2) + "-" + ("0" + newDate.getDate()).slice(-2)
        return dateString
    }
    
    currentHour(){
        let d = new Date();
        let hourString = ("0" + d.getUTCHours()).slice(-2)
        return hourString
    }

    callApi(url, func){
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let bindedFunc = func.bind(this)
                bindedFunc(data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    // Adds commas to large numbers
    formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    // Calculate 24 hour change
    calculateChange(currentNumber, originalNumber){
        let change = ((currentNumber - originalNumber) / originalNumber * 100).toFixed(2) + '%'
        return change
    }

    setChangeColor(change, element){
        let changeInt = parseFloat(change)
        if (Math.sign(changeInt) === 1){
            element.style.color = 'green'
        }else if (Math.sign(changeInt) === -1){
            element.style.color = 'red'
        }else{
            element.style.color = '#757575'
        }
    }

    setMarketCap(data){
        let lastItemInArray = data.length - 1
        let totalMarketcap = data[lastItemInArray].market_cap
        this.marketcap.innerHTML = `$ ${this.formatNumber(totalMarketcap)}`
        this.totalMarketCap = totalMarketcap

        // Set 24 hour market cap change in percentage
        let change = this.calculateChange(totalMarketcap, data[0].market_cap)
        this.marketCapChangeEl.innerHTML = change
        this.setChangeColor(change, this.marketCapChangeEl)
        return totalMarketcap
    }

    setVolume(data){
        let totalVolume = 0; // total 24 hour volume

        for(let i = 0; i < data.length; i++){
            totalVolume = totalVolume + parseInt(data[i].volume)
        }
        this.volume.innerHTML = `$ ${this.formatNumber(totalVolume)}`
    
        // Set 24 hour volume change in percentage
        let lastItemInArray = data.length - 1
        let change = this.calculateChange(data[lastItemInArray].volume, data[0].volume)
        this.volumeChangeEl.innerHTML = change
        this.setChangeColor(change, this.volumeChangeEl)
        console.log('Data length is ' + lastItemInArray)
    }

    setDominance(data){
        let topThree = []
        let ol = this.dominanceElement

        ol.innerHTML = ''
        for(let i = 0; i < 3; i++){
            let coinMarketCap = parseInt(data[i].market_cap)
            topThree[i] = {
                coinSymbol: data[i].symbol,
                dominance: ((coinMarketCap / this.totalMarketCap) * 100).toFixed(2) + '%'
            }

            let li = document.createElement('li')
            let textNode = document.createTextNode(topThree[i].coinSymbol + '\xa0\xa0\xa0\xa0' + topThree[i].dominance)
            li.appendChild(textNode)
            ol.appendChild(li)
        }
    }

}


export default MarketStatus