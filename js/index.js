let daily = document.querySelector("#daily")
let weekly = document.querySelector("#weekly")
let monthly = document.querySelector("#monthly")

let days = document.querySelector(".days")

days.addEventListener('click', function (e){
    let active = e.target
    
    if(active == this.children[0]){
        this.children[0].classList.add('active-menu')
        this.children[1].classList.remove('active-menu')
        this.children[2].classList.remove('active-menu')
    }

    if(active == this.children[1]){
        this.children[0].classList.remove('active-menu')
        this.children[1].classList.add('active-menu')
        this.children[2].classList.remove('active-menu')
    }

    if(active == this.children[2]){
        this.children[0].classList.remove('active-menu')
        this.children[1].classList.remove('active-menu')
        this.children[2].classList.add('active-menu')
    }
    
})