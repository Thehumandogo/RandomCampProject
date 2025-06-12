function ShowHappyPet () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P5, 1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
function showPlayfulPet () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    pins.digitalWritePin(DigitalPin.P5, 0)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    petHunger = 0
    petHappiness = Math.min(10, petHappiness + 2)
    ShowHappyPet()
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        showPlayfulPet()
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        petEnergy = Math.max(0, petEnergy - 1)
        petHappiness = Math.min(10, petHappiness + 3)
        ShowHappyPet()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    petEnergy = Math.min(10, petEnergy + 2)
    ShowHappyPet()
})
function showTiredPet () {
    basic.showIcon(IconNames.Asleep)
    pins.digitalWritePin(DigitalPin.P5, 0)
}
function showHungryPet () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    pins.digitalWritePin(DigitalPin.P5, 0)
    music.play(music.tonePlayable(175, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
let petHunger = 0
let petEnergy = 0
let petHappiness = 0
petHappiness = 5
petEnergy = 5
ShowHappyPet()
basic.forever(function () {
    basic.pause(5000)
    petHunger = Math.min(5, petHunger + 1)
    petEnergy = Math.max(0, petEnergy - 1)
    if (petHunger > 3) {
        showHungryPet()
        basic.pause(2000)
    } else if (petEnergy < 2) {
        showTiredPet()
        basic.pause(2000)
    }
    if (petHappiness > 5) {
        ShowHappyPet()
    }
})
