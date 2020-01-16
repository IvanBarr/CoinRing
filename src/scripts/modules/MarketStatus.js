require('dotenv').config()

class MarketStatus{
    constructor(){
        // this.year = new Date().getUTCFullYear()
        // this.month = new Date().getUTCMonth() + 1
        // this.day = new Date().getUTCDate()
        // console.log(this.month)

        this.marketCapUrl = `https://api.nomics.com/v1/market-cap/history?key=${process.env.API_KEY}&start=${this.currentDate()}T${this.currentHour()}%3A59%3A59.999Z`
        this.volumeUrl = `https://api.nomics.com/v1/volume/history?key=${process.env.API_KEY}&start=${this.currentDate()}T${this.currentHour()}%3A59%3A59.999Z`
        this.marketcap = document.querySelector('.market-status__marketcap')
        this.volume = document.querySelector('.market-status__volume')

        this.callApi(this.marketCapUrl, this.setMarketCap)
        this.callApi(this.volumeUrl, this.setVolume)

    }

    currentDate(){
        let d = new Date();
        let currentDate = new Date(2020, 0, 16);
        let yesterday = currentDate.setDate(currentDate.getDate() - 1)
        let nDate = new Date(yesterday)

        console.log(nDate)

        let dateString = d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)
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


    formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    setMarketCap(data){
        this.marketcap.innerHTML = `$ ${this.formatNumber(data[22].market_cap)}`
    }

    setVolume(data){
        let totalVolume = 0; // total 24 hour volume

        for(let i = 0; i < data.length; i++){
            totalVolume = totalVolume + parseInt(data[i].volume)
        }
        this.volume.innerHTML = `$ ${this.formatNumber(totalVolume)}`
    }

}


export default MarketStatus