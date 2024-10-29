namespace SpriteKind {
    export const Viking = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const Plasma = SpriteKind.create()
    export const Rocket = SpriteKind.create()
}
function createRocket2 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        spawnOffset = cannonOffset
        for (let index = 0; index < 2; index++) {
            rocketSprite = sprites.create(playerCombatAssets[0], SpriteKind.Rocket)
            scaling.scaleToPercent(rocketSprite, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            rocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            rocketSprite.vy = -110
            spawnOffset = spawnOffset * -1
        }
        spawnOffset = cannonOffset
        increment1 = 1
        spawnVX = sideRocketVX
        for (let index = 0; index < 2; index++) {
            sideRocketSprite = sprites.create(playerCombatAssets[increment1], SpriteKind.Rocket)
            sideRocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            sideRocketSprite.setVelocity(spawnVX, rocketVY)
            spawnOffset = spawnOffset * -1
            spawnVX = spawnVX * -1
            increment1 += 1
        }
        spawnOffset = cannonOffset
        increment1 = 1
        spawnVX = sideRocketVX + 20
        for (let index = 0; index < 2; index++) {
            sideRocketSprite = sprites.create(playerCombatAssets[increment1], SpriteKind.Rocket)
            sideRocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            sideRocketSprite.setVelocity(spawnVX, rocketVY + 5)
            spawnOffset = spawnOffset * -1
            spawnVX = spawnVX * -1
            increment1 += 1
        }
    }
}
function createProjectile (weapon: number) {
    if (weapon == plasma2) {
        createPlasma1()
    } else if (weapon == plasma1) {
        createPlasma2()
    } else if (weapon == basic0) {
        createBasic()
    } else if (weapon == side1) {
        createRocket1()
    } else if (weapon == side2) {
        createRocket2()
    }
}
sprites.onCreated(SpriteKind.Rocket, function (sprite) {
    sprite.lifespan = 2000
})
function createPlasma2 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        spawnOffset = cannonOffset
        for (let index = 0; index < 2; index++) {
            plasma = sprites.create(playerCombatAssets[3], SpriteKind.Plasma)
            scaling.scaleToPercent(plasma, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            plasma.setPosition(value.x + spawnOffset, value.y - 4)
            plasma.vy = -110
            spawnOffset = spawnOffset * -1
        }
    }
}
function initializePlayer () {
    initializePlayerAssets()
    getThisGuyHome = sprites.create(playerAssets[1], SpriteKind.Viking)
    getThisGuyHome.setStayInScreen(true)
    getThisGuyHome.setPosition(80, 150)
    // dev note:
    // i gave up on the pixel art purism huhu leave me alone my fingers are old
    scaling.scaleToPercent(getThisGuyHome, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    createShield(notCausedByBomb)
    controller.moveSprite(getThisGuyHome, 80, 80)
}
function initializeTerranAssets () {
    terranAssets = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    terranCombatAssets = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    createProjectile(weapon)
})
sprites.onDestroyed(SpriteKind.Shield, function (sprite) {
    invulnerable = false
})
function initializeGame () {
    initializeConsts()
    initializeTemp()
    loadGameAssets()
    initializePlayer()
}
function createPlasma1 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        plasma = sprites.create(playerCombatAssets[3], SpriteKind.Plasma)
        scaling.scaleToPercent(plasma, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        plasma.setPosition(value.x, value.y - 8)
        plasma.vy = -110
    }
}
function initializeConsts () {
    causedByBomb = true
    notCausedByBomb = false
    leftThrusterX = 0
    leftThrusterY = 0
    rightThrusterX = 0
    rightThrusterY = 0
    cannonOffset = 4
    plasma2 = -2
    plasma1 = -1
    basic0 = 0
    side1 = 1
    side2 = 2
    rocketVY = -100
    sideRocketVX = 50
}
function createShield (cause: boolean) {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        shieldSprite = sprites.create(playerCombatAssets[4], SpriteKind.Shield)
        shieldSprite.follow(value, 300)
        invulnerable = true
        if (cause == notCausedByBomb) {
            shieldSprite.lifespan = 4000
            shieldSprite.setFlag(SpriteFlag.Invisible, true)
            timer.after(800, function () {
                shieldSprite.setFlag(SpriteFlag.Invisible, false)
                timer.after(800, function () {
                    shieldSprite.setFlag(SpriteFlag.Invisible, true)
                    timer.after(800, function () {
                        shieldSprite.setFlag(SpriteFlag.Invisible, false)
                        timer.after(800, function () {
                            shieldSprite.setFlag(SpriteFlag.Invisible, true)
                            timer.after(800, function () {
                                shieldSprite.setFlag(SpriteFlag.Invisible, false)
                            })
                        })
                    })
                })
            })
        } else {
            shieldSprite.lifespan = 6000
            shieldSprite.setFlag(SpriteFlag.Invisible, true)
            timer.after(800, function () {
                shieldSprite.setFlag(SpriteFlag.Invisible, false)
                timer.after(800, function () {
                    shieldSprite.setFlag(SpriteFlag.Invisible, true)
                    timer.after(800, function () {
                        shieldSprite.setFlag(SpriteFlag.Invisible, false)
                        timer.after(800, function () {
                            shieldSprite.setFlag(SpriteFlag.Invisible, true)
                            timer.after(800, function () {
                                shieldSprite.setFlag(SpriteFlag.Invisible, false)
                                timer.after(800, function () {
                                    shieldSprite.setFlag(SpriteFlag.Invisible, true)
                                    timer.after(800, function () {
                                        shieldSprite.setFlag(SpriteFlag.Invisible, false)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    }
}
sprites.onCreated(SpriteKind.Plasma, function (sprite) {
    sprite.lifespan = 2000
})
function createRocket1 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        spawnOffset = cannonOffset
        for (let index = 0; index < 2; index++) {
            rocketSprite = sprites.create(playerCombatAssets[0], SpriteKind.Rocket)
            scaling.scaleToPercent(rocketSprite, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            rocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            rocketSprite.vy = -110
            spawnOffset = spawnOffset * -1
        }
        spawnOffset = cannonOffset
        increment1 = 1
        spawnVX = sideRocketVX
        for (let index = 0; index < 2; index++) {
            sideRocketSprite = sprites.create(playerCombatAssets[increment1], SpriteKind.Rocket)
            sideRocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            sideRocketSprite.setVelocity(spawnVX, rocketVY)
            spawnOffset = spawnOffset * -1
            spawnVX = spawnVX * -1
            increment1 += 1
        }
    }
}
function initializeZergAssets () {
    zergAssets = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    zergCombatAssets = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
}
function initializePlayerAssets () {
    // 0 - placeholder
    // 1 - viking player model
    // 2 - point defense drone model
    playerAssets = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d 1 1 d . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . c c . c b b c . c c . . . 
        c c f e e f c b b c f e e f c c 
        c b f f f f b b b b f f f f b c 
        c b b b b b b b b b b b b b b c 
        . c f f f f b b b b f f f f c . 
        . . c b b f b b b b f b b c . . 
        . . c b c . c b b c . c b c . . 
        . . . c . . c b b c . . c . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        .............7....7.............
        .............77..77.............
        .............7b..b7.............
        .............7bbbb7.............
        ............7bbcebb7............
        ............6bbecbb6............
        .......cc...6bbccbb6...cc.......
        .......cc...cbcbbcbc...cc.......
        .77c776cc66cbbcbbcbbc66cc677c77.
        ddddcbbbbdcdbcbddbcbdcdbbbbcdddd
        bbbbcbbbbdcdbcbddbcbdcdbbbbcbbbb
        bbbbbcbbbdcdbcbccbcbdcdbbbcbbbbb
        .bbbbcbbbdecccb77bcccedbbbcbbbb.
        ..bbbcbbbeccccb77bccccebbbcbbb..
        ...bbbcbbccbddb77bddbccbbcbbb...
        ....bbcbbcbbbdccccdbbbcbbcbb....
        .....bcbbcbbbde44edbbbcbbcb.....
        ......cbbcbbbd4bb4dbbbcbbc......
        .......cc.cccccccccccc.cc.......
        .......c...ccce44eccc...c.......
        ...........6e84dd48e6...........
        ............48....84............
        `, img`
        ....................
        .........cc.........
        .......76cc67.......
        .....77bbccbb77.....
        ....7bbcceeccbb7....
        ...7bbc......cbb7...
        ...7bc.bbccbb.cb7...
        ..7bc.bccf4ccb.cb7..
        ..6bc.bcffffcb.cb6..
        .ccc.bc4f45ffcb.ccc.
        .ccc.bcff54f4cb.ccc.
        ..6bc.bcffffcb.cb6..
        ..7bc.bcc4fccb.cb7..
        ...7bc.bbccbb.cb7...
        ...7bbc..bb..cbb7...
        ....7bbcc..ccbb7....
        .....77bbccbb77.....
        .......76cc67.......
        .........cc.........
        ....................
        `]
    // 0 - forward rocket
    // 1 - right rocket
    // 2 - left rocket
    // 3 - plasma
    // 4 - shield
    // 5 - bomb particle
    // 6 - missile blinker effect
    // 7 - plasma blinker effect
    // 8 - bomb blinker effect
    // 9 - drone blinker effect
    playerCombatAssets = [
    img`
        . d . 
        2 4 2 
        e 4 e 
        4 5 4 
        4 5 4 
        5 5 5 
        1 5 5 
        . 5 1 
        . 5 . 
        `,
    img`
        . 2 d 
        . 5 2 
        . 4 1 
        . 5 . 
        5 1 . 
        1 . . 
        4 . . 
        5 . . 
        `,
    img`
        d 2 . 
        2 5 . 
        1 4 . 
        . 5 . 
        . 1 5 
        . . 1 
        . . 4 
        . . 5 
        `,
    img`
        . . . b a b a . . . 
        . . a 9 1 1 c 6 . . 
        . b c 6 1 b 3 b a . 
        b 3 6 b 3 b 3 6 b . 
        3 . . b b 6 b b 1 c 
        . . 1 b 1 1 1 3 a c 
        . b 1 9 9 b a a c . 
        b 3 1 a 1 a c b 6 b 
        a 1 c c 9 1 b 1 b . 
        c c b 3 1 9 b 3 . b 
        a 9 c c 6 3 b 1 b 3 
        . b a 3 9 a c b b 3 
        . 1 b 3 3 6 3 a 3 . 
        . b 3 b b b 6 b . . 
        . . b 6 1 c 1 a . . 
        . . . . a a . . . . 
        `,
    img`
        ..............................
        .........555555111115.........
        .......555..........555.......
        ......5.55..........55.5......
        .....5...5..........5...5.....
        ....4....................5....
        ...5.....5..........5.....5...
        ..5......5..........5......4..
        .5.......5.dd....dd.5.......4.
        55555.....1........1.....55555
        5....555..1........1..555....5
        5.......11.11....11.11.......5
        5......d..1........1..d......5
        5............................5
        5.......1............1.......5
        5.......1............1.......5
        5............................5
        5......d..1........1..d......5
        5.......11.11....11.11.......5
        5....555..1........1..555....5
        55555.....1........1.....55555
        .1.......5.dd....dd.5.......5.
        ..1......5..........5......d..
        ...1.....5..........5.....d...
        ....1....................d....
        .....5...5..........5...5.....
        ......5.55..........55.4......
        .......555..........554.......
        .........555555544445.........
        ..............................
        `,
    img`
        . . . 5 5 . . . 
        . 5 5 d 1 5 5 . 
        . 5 1 1 1 1 5 . 
        5 d 1 3 b 1 d 5 
        5 d 1 b 1 1 1 5 
        . 5 1 1 1 d 5 . 
        . 5 5 1 d 5 5 . 
        . . . 5 5 . . . 
        `,
    img`
        .............7....7.............
        .............77..77.............
        .............77..77.............
        .............777777.............
        ............77777777............
        ............777..777............
        .......77...777..777...77.......
        .......77...77....77...77.......
        .7777777777777....7777777777777.
        7777777777777......7777777777777
        777...........4444............77
        777...444444444ee444444444...777
        .777..444444eeeeeeee444444..777.
        ..777...444444eeee444444...777..
        ...777....44444ee44444....777...
        ....777.....44444444.....777....
        .....777777...4444...777777.....
        ......777777........777777......
        .......77.777.7777.777.77.......
        .......7...7777777777...7.......
        ...........7777777777...........
        ............77....77............
        `,
    img`
        .............7....7.............
        .............77..77.............
        .............77..77.............
        .............777777.............
        ............77777777............
        ............777..777............
        .......77...777..777...77.......
        .......77...77....77...77.......
        .7777777777777....7777777777777.
        7777777777777......7777777777777
        777...........aaaa............77
        777...aaaaaaaaaaaaaaaaaaaa...777
        .777..aaaaaaccccccccaaaaaa..777.
        ..777...aaaaaaccccaaaaaa...777..
        ...777....aaaaaccaaaaa....777...
        ....777.....aaaaaaaa.....777....
        .....777777...aaaa...777777.....
        ......777777........777777......
        .......77.777.7777.777.77.......
        .......7...7777777777...7.......
        ...........7777777777...........
        ............77....77............
        `,
    img`
        .............7....7.............
        .............77..77.............
        .............77..77.............
        .............777777.............
        ............77777777............
        ............777..777............
        .......77...777..777...77.......
        .......77...77....77...77.......
        .7777777777777....7777777777777.
        7777777777777......7777777777777
        777...........9999............77
        777...99999999966999999999...777
        .777..99966666666666666699..777.
        ..777...9999666666669999...777..
        ...777....999996699999....777...
        ....777.....99999999.....777....
        .....777777...9999...777777.....
        ......777777........777777......
        .......77.777.7777.777.77.......
        .......7...7777777777...7.......
        ...........7777777777...........
        ............77....77............
        `,
    img`
        .............7....7.............
        .............77..77.............
        .............77..77.............
        .............777777.............
        ............77777777............
        ............777..777............
        .......77...777..777...77.......
        .......77...77....77...77.......
        .7777777777777....7777777777777.
        7777777777777......7777777777777
        777...........2222............77
        777...222222222ee222222222...777
        .777..222222eeeeeeee222222..777.
        ..777...222222eeee222222...777..
        ...777....22222ee22222....777...
        ....777.....22222222.....777....
        .....777777...2222...777777.....
        ......777777........777777......
        .......77.777.7777.777.77.......
        .......7...7777777777...7.......
        ...........7777777777...........
        ............77....77............
        `
    ]
}
function initializeTemp () {
    invulnerable = false
    playerX = 0
    playerY = 0
    weapon = 0
    spawnOffset = 0
}
function initializeProtossAssets () {
    protossAssets = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    protossCombatAssets = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
}
function loadGameAssets () {
    // 0 - missile powerup
    // 1 - bomb powerup
    // 2 - plasma powerup
    // 3 - drone powerup
    // 4 - drone missile
    // 5 - drone missile trail
    supportAssets = [
    img`
        . . . . b . b . . . . 
        . . . 1 d b d 1 . . . 
        . . . 4 1 d 1 4 . . . 
        . . 1 4 . 4 . 4 1 . . 
        . . 4 1 . 4 . 1 4 . . 
        . 2 4 . . 1 . . 4 2 . 
        1 2 2 . 2 2 2 . 2 2 1 
        1 1 . . 1 2 1 . . 1 1 
        . . . . 1 1 1 . . . . 
        `,
    img`
        . . b b b . . . . . . 
        . b 6 9 d b b . . . . 
        . b 8 6 9 1 6 b . . . 
        b 6 b b d 8 6 9 b . . 
        b d c 9 c c c 8 9 d . 
        . b c c b b c c c d b 
        . . b b c d d c c c b 
        . . . . . c c b c b b 
        . . . . . . . b b b . 
        `,
    img`
        . . . . d d d . . . . 
        . . c c 1 1 1 d d . . 
        . d d c d 1 1 d b b . 
        . . d b d 1 1 c b . . 
        . . . b d 1 1 c . . . 
        . . . b d 1 1 c . . . 
        . . . b d 1 1 c . . . 
        . . . b b 1 c c . . . 
        . . . . b . c . . . . 
        `,
    img`
        . . . . . . . . c . . 
        . c . . e . c c . . . 
        . . c c b b c c . . . 
        . . c b 5 4 b . . . . 
        . c e c 4 5 b e . . . 
        . . e a c b c . . . . 
        . . a e e c c . . . . 
        . c . . c . . c . . . 
        . . . . . . . . . . . 
        `,
    img`
        5 4 
        4 5 
        `
    ]
    particles2 = [
    img`
        2 
        `,
    img`
        a 
        `,
    img`
        3 
        `,
    img`
        1 
        `,
    img`
        5 
        `,
    img`
        4 
        `
    ]
    gameUIAssets = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    initializeZergAssets()
    initializeTerranAssets()
    initializeProtossAssets()
}
function createBasic () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        spawnOffset = cannonOffset
        for (let index = 0; index < 2; index++) {
            rocketSprite = sprites.create(playerCombatAssets[0], SpriteKind.Rocket)
            rocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            rocketSprite.vy = -110
            spawnOffset = spawnOffset * -1
        }
    }
}
let gameUIAssets: Image[] = []
let particles2: Image[] = []
let supportAssets: Image[] = []
let protossCombatAssets: Image[] = []
let protossAssets: Image[] = []
let playerY = 0
let playerX = 0
let zergCombatAssets: Image[] = []
let zergAssets: Image[] = []
let shieldSprite: Sprite = null
let rightThrusterY = 0
let rightThrusterX = 0
let leftThrusterY = 0
let leftThrusterX = 0
let causedByBomb = false
let invulnerable = false
let weapon = 0
let terranCombatAssets: Image[] = []
let terranAssets: Image[] = []
let notCausedByBomb = false
let playerAssets: Image[] = []
let getThisGuyHome: Sprite = null
let plasma: Sprite = null
let side2 = 0
let side1 = 0
let basic0 = 0
let plasma1 = 0
let plasma2 = 0
let rocketVY = 0
let sideRocketSprite: Sprite = null
let sideRocketVX = 0
let spawnVX = 0
let increment1 = 0
let playerCombatAssets: Image[] = []
let rocketSprite: Sprite = null
let cannonOffset = 0
let spawnOffset = 0
initializeGame()
forever(function () {
	
})
