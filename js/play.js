const play = {
    day: ['1hrs', '2hrs'],
    weekly: ['10hrs', '8hrs'],
    monthly: ['23hrs', '29hrs']
}

daily.addEventListener('click', ()=>{
    document.querySelector("#play-hour").textContent = play.day[0]
    document.querySelector("#play-week").textContent = "Last Week - " + play.day[1]
})

weekly.addEventListener('click', ()=>{
    document.querySelector("#play-hour").textContent = play.weekly[0]
    document.querySelector("#play-week").textContent = "Last Week - " + play.weekly[1]
})

monthly.addEventListener('click', ()=>{
    document.querySelector("#play-hour").textContent = play.monthly[0]
    document.querySelector("#play-week").textContent = "Last Week - " + play.monthly[1]
})
