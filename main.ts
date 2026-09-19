
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let bird: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let obstacles: game.LedSprite[] = []
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []
emptyObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []
let bird: game.LedSprite = null

bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
emptyObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let obstacle: game.LedSprite[] = []

basic.forever(function () {
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }

    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    emptyObstacleY = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != emptyObstacleY) {
            obstacles.push(game.createSprite(4, index))
        }
    }
    basic.pause(1000)
})
let ticks = 0
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }

    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    ticks += 1
    basic.pause(1000)
})
let bird: game.LedSprite = null
let ticks = 0
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }

    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }

    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }

    ticks += 1
    basic.pause(1000)
}) let bird: game.LedSprite = null
let ticks= 0
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []
let index = 0
let bird: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
index = 0
obstacles = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})