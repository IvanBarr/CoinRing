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
        if (target.className != "add-favorite_btn far fa-star") return

        let itemClicked = target.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g, '')

        if(localStorage.getItem("coin") != null){
            this.favorites = JSON.parse(localStorage.getItem("coin"))
                if(!this.favorites.includes(itemClicked)){
                    // target.parentNode.childNodes[13].classList.remove("far")
                    // target.parentNode.childNodes[13].classList.add("fas")
                    this.favorites.push(itemClicked)
                    localStorage.setItem("coin", JSON.stringify(this.favorites))
                }else{
                    // target.parentNode.childNodes[13].classList.remove("fas")
                    // target.parentNode.childNodes[13].classList.add("far")
                    let itemIndex = this.favorites.indexOf(itemClicked)
                    let filteredFavorites = this.favorites.filter(item => item !== itemClicked)
                    this.favorites = filteredFavorites
                    localStorage.setItem("coin", JSON.stringify(this.favorites))
                }
        }else{
            // target.parentNode.childNodes[13].classList.remove("far")
            // target.parentNode.childNodes[13].classList.add("fas")
            this.favorites.push(itemClicked)
            localStorage.setItem("coin", JSON.stringify(this.favorites))
            // console.log(target.parentNode.childNodes[13].classList)
        }


        // console.log(this.favorites)
    }
}
export default Favorites
// let itemIndex = this.favorites.indexOf(itemClicked)
// let removedItem = this.favorites.splice(itemIndex, 1)
// console.log(this.favorites)