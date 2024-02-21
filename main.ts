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
let usingpass = false
let timesInBathroom = 0
let user = ""
user = "hugo"
timesInBathroom = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
	
})
