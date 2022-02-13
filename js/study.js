const study = {
    day: ['0hrs', '1hrs'],
    weekly: ['4hrs', '7hrs'],
    monthly: ['13hrs', '19hrs']
}

daily.addEventListener('click', ()=>{
    document.querySelector("#study-hour").textContent = study.day[0]
    document.querySelector("#study-week").textContent = "Last Week - " + study.day[1]
})

weekly.addEventListener('click', ()=>{
    document.querySelector("#study-hour").textContent = study.weekly[0]
    document.querySelector("#study-week").textContent = "Last Week - " + study.weekly[1]
})

monthly.addEventListener('click', ()=>{
    document.querySelector("#study-hour").textContent = study.monthly[0]
    document.querySelector("#study-week").textContent = "Last Week - " + study.monthly[1]
})
