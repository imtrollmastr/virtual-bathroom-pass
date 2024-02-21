input.onButtonPressed(Button.A, function () {
    if (usingpass == false) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        usingpass = true
        timesInBathroom += 1
        datalogger.log(datalogger.createCV(user, timesInBathroom))
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        usingpass = false
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (shutdown == false) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        usingpass = false
        shutdown = true
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        shutdown = false
    }
})
let usingpass = false
let shutdown = false
let timesInBathroom = 0
let user = ""
user = "Johann"
timesInBathroom = 0
shutdown = false
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
	
})
