const social = {
    day: ['1hrs', '3hrs'],
    weekly: ['5hrs', '10hrs'],
    monthly: ['21hrs', '23hrs']
}

daily.addEventListener('click', ()=>{
    document.querySelector("#social-hour").textContent = social.day[0]
    document.querySelector("#social-week").textContent = "Last Week - " + social.day[1]
})

weekly.addEventListener('click', ()=>{
    document.querySelector("#social-hour").textContent = social.weekly[0]
    document.querySelector("#social-week").textContent = "Last Week - " + social.weekly[1]
})

monthly.addEventListener('click', ()=>{
    document.querySelector("#social-hour").textContent = social.monthly[0]
    document.querySelector("#social-week").textContent = "Last Week - " + social.monthly[1]
})
