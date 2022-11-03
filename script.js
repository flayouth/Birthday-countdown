const timeLeft = document.getElementById('time-left')


const birthday = new Date('03/29/2023')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {
    const today = new Date()
    const timeSpan = birthday - today
    
    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope Your Birthday was Amazing Beautiful Girl!!"
        clearInterval(timerId)
        return
    }
    if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday I Love You!!!!"
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'min ' + seconds + 'seconds'
}

timerId = setInterval(countDown, second)