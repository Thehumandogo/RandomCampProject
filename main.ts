function ShowHappyPet () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P5, 1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    petHunger = 0
    petHappiness = Math.min(10, petHappiness + 2)
    ShowHappyPet()
    basic.pause(500)
})
let petHunger = 0
let petHappiness = 0
petHappiness = 5
let petEnergy = 5
ShowHappyPet()
basic.forever(function () {
	
})
