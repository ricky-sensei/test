basic.forever(function on_forever() {
    if (led.point(0, 0)) {
        led.unplot(0, 0)
    } else {
        led.plot(0, 0)
    }
    
    control.waitMicros(2468)
})
