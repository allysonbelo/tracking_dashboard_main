const self = {
    day: ['0hrs', '1hrs'],
    weekly: ['2hrs', '2hrs'],
    monthly: ['7hrs', '11hrs']
}

daily.addEventListener('click', ()=>{
    document.querySelector("#self-hour").textContent = self.day[0]
    document.querySelector("#self-week").textContent = "Last Week - " + self.day[1]
})

weekly.addEventListener('click', ()=>{
    document.querySelector("#self-hour").textContent = self.weekly[0]
    document.querySelector("#self-week").textContent = "Last Week - " + self.weekly[1]
})

monthly.addEventListener('click', ()=>{
    document.querySelector("#self-hour").textContent = self.monthly[0]
    document.querySelector("#self-week").textContent = "Last Week - " + self.monthly[1]
})
