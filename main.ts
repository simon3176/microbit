input.onButtonPressed(Button.A, function () {
    radio.sendString("....")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showIcon(IconNames.Asleep)
radio.setGroup(0)
basic.forever(function () {
	
})
