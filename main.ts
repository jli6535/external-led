input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() >= 50) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (input.lightLevel() <= 50) {
        for (let index = 0; index < 100; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
	
})
