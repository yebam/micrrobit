input.onButtonPressed(Button.A, function () {
    if (contador == 5) {
        tiempo = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (control.millis() - tiempo < 1300) {
        contador += 1
    } else {
        basic.showIcon(IconNames.Happy)
        while (true) {
            basic.pause(100)
        }
    }
})
let tiempo = 0
let contador = 0
basic.showString(" contraseña")
contador = 0
tiempo = control.millis()
basic.forever(function () {
    let bloqueo = 0
    if (bloqueo == 0) {
        basic.showString("hola")
    } else {
        if (control.millis() - tiempo == 1300) {
            basic.showIcon(IconNames.Sad)
            while (true) {
                basic.pause(100)
            }
        }
    }
})
