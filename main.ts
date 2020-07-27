function mouvement_cible () {
    while (y <= 4) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
        scoringending()
        led.plot(x1, y1)
        basic.pause(500)
    }
    y = -1
    x = randint(0, 4)
}
function scoringending () {
    if (x == x1 && y == y1) {
        score += 1
    }
    if (y == 4 && x != x1) {
        game.setScore(score)
        game.gameOver()
    }
}
input.onButtonPressed(Button.A, function () {
    if (x1 > 0) {
        led.unplot(x1, y1)
        x1 += -1
        led.plot(x1, y1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x1 < 4) {
        led.unplot(x1, y1)
        x1 += 1
        led.plot(x1, y1)
    }
})
let score = 0
let y1 = 0
let x1 = 0
let y = 0
let x = 0
x = randint(0, 4)
y = -1
x1 = 2
y1 = 4
score = 0
led.plot(x1, y1)
basic.forever(function () {
    mouvement_cible()
})
