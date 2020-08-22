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


            let itemClicked = JSON.stringify(target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, ''))

            // If localStorage HAS items
            if(localStorage.getItem("coin") != null){
                this.favorites = JSON.parse(localStorage.getItem("coin"))
                // If localStorage Doesn't have the item clicked on
                    if(this.favorites.some(el => el.symbol === itemClicked) === false){
                        let newObj = {
                            symbol: itemClicked,
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
                            let filteredFavorites = this.favorites.filter(item => item.symbol !== itemClicked)
                            this.favorites = filteredFavorites
                            localStorage.setItem("coin", JSON.stringify(this.favorites))
                            // console.log(this.favorites)
                        }
                    }
            }else{ // If localStorage is EMPTY
                let newObj = {
                    symbol: itemClicked,
                    favorited: true
                }

                this.favorites.push(newObj)
                localStorage.setItem("coin", JSON.stringify(this.favorites))
                // console.log(this.favorites)
            }


        }
        new Cards()
    }
}
export default Favorites
