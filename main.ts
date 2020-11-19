input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        # . # # #
        # . # . .
        # . # # #
        # . . . #
        # . # # #
        `)
    music.playTone(392, music.beat(BeatFraction.Double))
    basic.showNumber(input.temperature())
    basic.clearScreen()
})
