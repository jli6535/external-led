input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() >= 50) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.lightLevel() <= 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        for (let index2 = 0; index2 < 25; index2++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            control.waitMicros(50000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let index = 0
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
pins.digitalWritePin(DigitalPin.P0, 1)
control.waitMicros(50000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
if (index == 0) {
    while (index == 0) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, 0)
            led.plot(xindex, 1)
            led.plot(xindex, 2)
            led.plot(xindex, 3)
            led.plot(xindex, 4)
            basic.pause(100)
            led.unplot(xindex, 0)
            led.unplot(xindex, 1)
            led.unplot(xindex, 2)
            led.unplot(xindex, 3)
            led.unplot(xindex, 4)
        }
    }
} else {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
basic.forever(function () {
	
})
