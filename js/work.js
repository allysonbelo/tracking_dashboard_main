const work = {
    day: ['5hrs', '7hrs'],
    weekly: ['32hrs', '36hrs'],
    monthly: ['103hrs', '128hrs']
}

daily.addEventListener('click', ()=>{
    document.querySelector("#work-hour").textContent = work.day[0]
    document.querySelector("#work-week").textContent = "Last Week - " + work.day[1]
})

weekly.addEventListener('click', ()=>{
    document.querySelector("#work-hour").textContent = work.weekly[0]
    document.querySelector("#work-week").textContent = "Last Week - " + work.weekly[1]
})

monthly.addEventListener('click', ()=>{
    document.querySelector("#work-hour").textContent = work.monthly[0]
    document.querySelector("#work-week").textContent = "Last Week - " + work.monthly[1]
})
