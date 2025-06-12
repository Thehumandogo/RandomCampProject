input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    petHunger = 0
    petHappiness = Math.min(10, petHappiness + 2)
    basic.pause(500)
})
let petHunger = 0
let petHappiness = 0
petHappiness = 5
let petEnergy = 5
petHunger = 0
let lastPlayTime = 0
let lastFeedTime = 0
basic.forever(function () {
	
})
