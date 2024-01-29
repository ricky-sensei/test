def on_forever():
    if led.point(0, 0):
        led.unplot(0, 0)
    else:
        led.plot(0, 0)
    control.wait_micros(2468)
basic.forever(on_forever)
