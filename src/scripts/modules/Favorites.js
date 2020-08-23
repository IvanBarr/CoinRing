import Cards from "./Cards"

class Favorites{
    constructor(){
        this.favorites = []
        this.cards_container = document.querySelector('.cards__container')
        

        this.events()
    }

    events(){
        this.cards_container.addEventListener('click', this.addToFavorites.bind(this))
    }

    addToFavorites(e){
        let target = e.target
        if (target.classList.contains("add-favorite_btn")){

            let itemClickedValue = JSON.stringify(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))

            // If localStorage HAS items
            if(localStorage.getItem("coin") != null){
                this.favorites = JSON.parse(localStorage.getItem("coin"))
                // If localStorage Doesn't have the item clicked on
                    if(this.favorites.some(el => el.symbol === itemClickedValue) === false){
                        let newObj = {
                            symbol: itemClickedValue,
                            favorited: true
                        }
                        this.favorites.push(newObj)
                        localStorage.setItem("coin", JSON.stringify(this.favorites))
                        // console.log(this.favorites)
                    }else{
                        if(this.favorites.length === 1){
                            localStorage.clear()
                            this.favorites = []
     
                        }else{
                             // If localStorage HAS the item clicked on...REMOVE IT
                            let filteredFavorites = this.favorites.filter(item => item.symbol !== itemClickedValue)
                            this.favorites = filteredFavorites
                            localStorage.setItem("coin", JSON.stringify(this.favorites))
                            // console.log(this.favorites)
                        }
                    }
            }else{ // If localStorage is EMPTY
                let newObj = {
                    symbol: itemClickedValue,
                    favorited: true
                }

                this.favorites.push(newObj)
                localStorage.setItem("coin", JSON.stringify(this.favorites))
                // console.log(this.favorites)
            }

            // Toggle btn style
            const btnClicked = target.parentNode.childNodes[13]
            if(btnClicked.classList.contains("fas")){
                btnClicked.classList.remove("fas")
                btnClicked.className += " far"
                if(location.href.includes("favorites.html")){
                    btnClicked.parentNode.parentNode.style.display = "none"
                }
            }else{
                btnClicked.classList.remove("far")
                btnClicked.className += " fas"
            }
        }
    }
}
export default Favorites
