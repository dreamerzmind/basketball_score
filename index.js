let homeCountEl = document.getElementById("homecount-el")
let guestCountEl = document.getElementById("guestcount-el")
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeCount = 0
let guestCount = 0

function increment1() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function increment2() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function increment3() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}

function increment4() {
    guestCount += 1
    guestCountEl.textContent = guestCount
}

function increment5() {
    guestCount += 2
    guestCountEl.textContent = guestCount
}

function increment6() {
    guestCount += 3
    guestCountEl.textContent = guestCount
}