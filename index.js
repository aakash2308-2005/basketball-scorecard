let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeS = 0
let guestS = 0

function home1()
{
    homeS += 1
    homeScore.textContent = homeS
}

function home2(){
    homeS += 2
    homeScore.textContent = homeS
}

function home3(){
    homeS += 3
    homeScore.textContent = homeS
    
}

function guest1(){
    guestS += 1
    guestScore.textContent = guestS
}

function guest2(){
     guestS += 2
    guestScore.textContent = guestS
}

function guest3(){
    guestS += 3
    guestScore.textContent = guestS
}