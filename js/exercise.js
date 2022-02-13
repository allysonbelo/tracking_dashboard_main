const exercise = {
    day: ['1hrs', '1hrs'],
    weekly: ['4hrs', '5hrs'],
    monthly: ['11hrs', '18hrs']
}

daily.addEventListener('click', ()=>{
    document.querySelector("#exercise-hour").textContent = exercise.day[0]
    document.querySelector("#exercise-week").textContent = "Last Week - " + exercise.day[1]
})

weekly.addEventListener('click', ()=>{
    document.querySelector("#exercise-hour").textContent = exercise.weekly[0]
    document.querySelector("#exercise-week").textContent = "Last Week - " + exercise.weekly[1]
})

monthly.addEventListener('click', ()=>{
    document.querySelector("#exercise-hour").textContent = exercise.monthly[0]
    document.querySelector("#exercise-week").textContent = "Last Week - " + exercise.monthly[1]
})
