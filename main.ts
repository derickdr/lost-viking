namespace SpriteKind {
    export const Viking = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const Plasma = SpriteKind.create()
    export const Rocket = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const Drone = SpriteKind.create()
    export const DroneRocket = SpriteKind.create()
    export const BasicEnemy = SpriteKind.create()
}
function createRocket2 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
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
        createPlasma2()
    } else if (weapon == plasma1) {
        createPlasma1()
    } else if (weapon == basic0) {
        createBasic()
    } else if (weapon == side1) {
        createRocket1()
    } else if (weapon == side2) {
        createRocket2()
    }
}
sprites.onCreated(SpriteKind.Rocket, function (sprite) {
    sprite.lifespan = playerProjectileLifespan
})
function createPlasma2 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
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
function loadMap (lvl: number) {
    scene.setBackgroundImage(backdrops._pickRandom())
}
function frontBlast (x: number, y: number) {
    for (let index = 0; index < 6; index++) {
        blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
        blastFire.setVelocity(randint(-50, 50), randint(-10, 20))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b . . . . . . . 
        . . . . . . b d b . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . 4 4 5 d 5 4 4 . . . . . 
        . b b b b b 5 d 5 b b b b b . . 
        . 5 5 d d d 5 d 5 d d d 5 5 . . 
        . . . d d d 5 d 5 d d d . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d 5 d 5 d . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 6 9 6 . . . . . . . 
        . . . . . . 5 9 5 . . . . . . . 
        . . . . . . . d . . . . . . . . 
        `, 50, 0)
    projectile.y = 35
    projectile.lifespan = 3000
    projectile.setKind(SpriteKind.BasicEnemy)
})
function initializePlayer () {
    initializePlayerAssets()
    senseiDerick = sprites.create(playerAssets[1], SpriteKind.Viking)
    senseiDerick.setStayInScreen(true)
    senseiDerick.setPosition(80, 150)
    // dev note:
    // i gave up on the pixel art purism huhu leave me alone my fingers are old
    scaling.scaleToPercent(senseiDerick, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    createShield(notCausedByBomb)
    controller.moveSprite(senseiDerick, 75, 75)
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
function backBlast (x: number, y: number) {
    for (let index = 0; index < 4; index++) {
        blastFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(-40, 40), -50)
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
    timer.after(50, function () {
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            blastFire.setVelocity(randint(-40, 40), -50)
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
    })
}
function initializeGame () {
    initializeConsts()
    initializeTemp()
    loadGameAssets()
    initializePlayer()
    loadMapAssets()
    loadMap(currentStage)
}
function createPlasma1 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        plasma = sprites.create(playerCombatAssets[3], SpriteKind.Plasma)
        scaling.scaleToPercent(plasma, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        plasma.setPosition(value.x, value.y - 8)
        plasma.vy = -110
    }
}
function initializeConsts () {
    causedByBomb = true
    notCausedByBomb = false
    thrusterOffset = 3
    cannonOffset = 4
    plasma2 = -2
    plasma1 = -1
    basic0 = 0
    side1 = 1
    side2 = 2
    rocketVY = -100
    sideRocketVX = 50
    playerProjectileLifespan = 1500
    enemyProojectileLifespan = 2000
    basicEnemyValue = 100
    terranColor = 0
    protossColor = 1
    zergColor = 2
    fireColor = 3
    plasmaColor = 4
    missileColor = 5
    bombColor = 6
    droneColor = 7
    droneMissileColor = 8
    starColor = 9
}
function createRocketTrails () {
    for (let value of sprites.allOfKind(SpriteKind.Rocket)) {
        thrusterFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
        thrusterFire.setVelocity(randint(-20, 20), 50)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = randint(10, 30)
    }
}
function loadMapAssets () {
    backdrops = [img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
        fffffffffeffffffffffffffffffffffffffffff1fffffffffffffffffffffffffeffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff5ffffffffffff9fffefffffffff1ffff
        ffffffffffffffffff1ffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffbfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff1fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffff1fff
        ffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffbfffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffff9ffffbffff
        ffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffaffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffff1fffffff
        fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
        fffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9ffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff9fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffbfffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffbffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
        ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffff1ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1ffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
        ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff96fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffff
        ffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff5ffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff
        fffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffff1ffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffbfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
        ffff1fffffffffefff9ffffffffffff5ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
        fffffffbffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1fffffffffffffff9fffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff9ffffffffffffffff6ffffffffffffff1fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffff1fffffff
        ffffffffffbfffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffbffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffff
        fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
        ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff9fff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffff
        fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffff
        fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff1ffffffffffffffffffffffffeffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff
        ffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffff
        ffffffffffffffffffffffffff1ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffbffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `]
    doodads = [
    img`
        ............eeee.......
        eee.....eeeecbde.......
        eddeeeeeddddebee.......
        eeddddddbbbebdee.......
        edebbbbbeeebdebbeeee...
        edbeeeeebdbddebdddddee.
        edbdbdbdbdbdebddbbbbdde
        edbdbdbdbdbdebddddddbde
        edbdbdbdbdbdebddbbbbdde
        edbeeeeebdbddebdddddee.
        edebbbbbeeebdebbeeee...
        eeddddddbbbebdee.......
        eddcccddddddebee.......
        eccbbbcccdddcbde.......
        effffbbbbcccceee.......
        eeeeeccbbbbce..........
        effbbeccbbbc...........
        ebbffbbcccce...........
        ebbccfbbbdee...........
        ebbbc6fcbbde...........
        ebcb8891cbde...........
        ebcb8919cbde...........
        ebcb8891cbde...........
        ebbbc6fcbbde...........
        ebbccfbbbdee...........
        ebbffbbcccce...........
        effbbeccbbbc...........
        eeeeeccbbbbce..........
        effffbbbbcccceee.......
        eccbbbcccdddcbde.......
        eddcccddddddebee.......
        eeddddddbbbebdee.......
        edebbbbbeeebdebbeeee...
        edbeeeeebdbddebdddddee.
        edbdbdbdbdbdebddbbbbdde
        edbdbdbdbdbdebddddddbde
        edbdbdbdbdbdebddbbbbdde
        edbeeeeebdbddebdddddee.
        edebbbbbeeebdebbeeee...
        eeddddddbbbebdee.......
        eddeeeeeddddebee.......
        eee.....eeeecbde.......
        ............eeee.......
        .......................
        ............eeee.......
        eee.....eeeecbde.......
        eddeeeeeddddebee.......
        eeddddddbbbebdee.......
        edebbbbbeeebdebbeeee...
        edbeeeeebdbddebdddddee.
        edbdbdbdbdbdebddbbbbdde
        edbdbdbdbdbdebddddddbde
        edbdbdbdbdbdebddbbbbdde
        edbeeeeebdbddebdddddee.
        edebbbbbeeebdebbeeee...
        eeddddddbbbebdee.......
        eddcccddddddebee.......
        eccbbbcccdddcbde.......
        effffbbbbcccceee.......
        eeeeeccbbbbce..........
        effbbeccbbbc...........
        ebbffbbcccce...........
        ebbccfbbbdee...........
        ebbbc6fcbbde...........
        ebcb8891cbde...........
        ebcb8919cbde...........
        ebcb8891cbde...........
        ebbbc6fcbbde...........
        ebbccfbbbdee...........
        ebbffbbcccce...........
        effbbeccbbbc...........
        eeeeeccbbbbce..........
        effffbbbbcccceee.......
        eccbbbcccdddcbde.......
        eddcccddddddebee.......
        eeddddddbbbebdee.......
        edebbbbbeeebdebbeeee...
        edbeeeeebdbddebdddddee.
        edbdbdbdbdbdebddbbbbdde
        edbdbdbdbdbdebddddddbde
        edbdbdbdbdbdebddbbbbdde
        edbeeeeebdbddebdddddee.
        edebbbbbeeebdebbeeee...
        eeddddddbbbebdee.......
        eddeeeeeddddebee.......
        eee.....eeeecbde.......
        ............eeee.......
        `,
    img`
        .......eeee............
        .......edbceeee.....eee
        .......eebeddddeeeeedde
        .......eedbebbbddddddee
        ...eeeebbedbeeebbbbbede
        .eedddddbeddbdbeeeeebde
        eddbbbbddbedbdbdbdbdbde
        edbddddddbedbdbdbdbdbde
        eddbbbbddbedbdbdbdbdbde
        .eedddddbeddbdbeeeeebde
        ...eeeebbedbeeebbbbbede
        .......eedbebbbddddddee
        .......eebeddddddcccdde
        .......edbcdddcccbbbcce
        .......eeeccccbbbbffffe
        ..........ecbbbbcceeeee
        ...........cbbbccebbffe
        ...........eccccbbffbbe
        ...........eedbbbfccbbe
        ...........edbbcf6cbbbe
        ...........edbc1988bcbe
        ...........edbc9198bcbe
        ...........edbc1988bcbe
        ...........edbbcf6cbbbe
        ...........eedbbbfccbbe
        ...........eccccbbffbbe
        ...........cbbbccebbffe
        ..........ecbbbbcceeeee
        .......eeeccccbbbbffffe
        .......edbcdddcccbbbcce
        .......eebeddddddcccdde
        .......eedbebbbddddddee
        ...eeeebbedbeeebbbbbede
        .eedddddbeddbdbeeeeebde
        eddbbbbddbedbdbdbdbdbde
        edbddddddbedbdbdbdbdbde
        eddbbbbddbedbdbdbdbdbde
        .eedddddbeddbdbeeeeebde
        ...eeeebbedbeeebbbbbede
        .......eedbebbbddddddee
        .......eebeddddeeeeedde
        .......edbceeee.....eee
        .......eeee............
        .......................
        .......eeee............
        .......edbceeee.....eee
        .......eebeddddeeeeedde
        .......eedbebbbddddddee
        ...eeeebbedbeeebbbbbede
        .eedddddbeddbdbeeeeebde
        eddbbbbddbedbdbdbdbdbde
        edbddddddbedbdbdbdbdbde
        eddbbbbddbedbdbdbdbdbde
        .eedddddbeddbdbeeeeebde
        ...eeeebbedbeeebbbbbede
        .......eedbebbbddddddee
        .......eebeddddddcccdde
        .......edbcdddcccbbbcce
        .......eeeccccbbbbffffe
        ..........ecbbbbcceeeee
        ...........cbbbccebbffe
        ...........eccccbbffbbe
        ...........eedbbbfccbbe
        ...........edbbcf6cbbbe
        ...........edbc1988bcbe
        ...........edbc9198bcbe
        ...........edbc1988bcbe
        ...........edbbcf6cbbbe
        ...........eedbbbfccbbe
        ...........eccccbbffbbe
        ...........cbbbccebbffe
        ..........ecbbbbcceeeee
        .......eeeccccbbbbffffe
        .......edbcdddcccbbbcce
        .......eebeddddddcccdde
        .......eedbebbbddddddee
        ...eeeebbedbeeebbbbbede
        .eedddddbeddbdbeeeeebde
        eddbbbbddbedbdbdbdbdbde
        edbddddddbedbdbdbdbdbde
        eddbbbbddbedbdbdbdbdbde
        .eedddddbeddbdbeeeeebde
        ...eeeebbedbeeebbbbbede
        .......eedbebbbddddddee
        .......eebeddddeeeeedde
        .......edbceeee.....eee
        .......eeee............
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
function createShield (cause: boolean) {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        shieldSprite = sprites.create(playerCombatAssets[4], SpriteKind.Shield)
        shieldSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        shieldSprite.setPosition(value.x, value.y)
        shieldSprite.follow(value, 400)
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
    sprite.lifespan = playerProjectileLifespan
})
function createRocket1 () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
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
function sideBlast (x: number, y: number) {
    for (let index = 0; index < 4; index++) {
        blastFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(-10, -40), randint(-10, -40))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
    for (let index = 0; index < 4; index++) {
        blastFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(10, 40), randint(-10, -40))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
    timer.after(50, function () {
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            blastFire.setVelocity(randint(-10, -40), randint(-10, -40))
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            blastFire.setVelocity(randint(10, 40), randint(-10, -40))
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
    })
}
sprites.onOverlap(SpriteKind.DroneRocket, SpriteKind.BasicEnemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    radialBlast(otherSprite.x, otherSprite.y)
    sprites.destroy(otherSprite)
})
function createPlasmaTrails () {
    for (let value of sprites.allOfKind(SpriteKind.Plasma)) {
        thrusterFire = sprites.create(particles2[colorPaths[plasmaColor]._pickRandom()], SpriteKind.Effect)
        thrusterFire.setVelocity(randint(-20, 20), 50)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = randint(10, 30)
    }
}
function createVikingThrusterTrail () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        if (value.vx == 0) {
            thrusterEffectOffset = thrusterOffset
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[colorPaths[terranColor]._pickRandom()], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-40, 40), 75)
                thrusterFire.lifespan = randint(30, 100)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        } else if (value.vx > 0) {
            thrusterFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            thrusterFire.setVelocity(randint(-40, 40), 75)
            thrusterFire.lifespan = randint(30, 100)
            thrusterFire.setPosition(value.x - thrusterEffectOffset, value.y + 5)
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[colorPaths[terranColor]._pickRandom()], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-40, 40), 75)
                thrusterFire.lifespan = randint(30, 100)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        } else if (value.vx < 0) {
            thrusterFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            thrusterFire.setVelocity(randint(-40, 40), 75)
            thrusterFire.lifespan = randint(30, 100)
            thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[colorPaths[terranColor]._pickRandom()], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-40, 40), 75)
                thrusterFire.lifespan = randint(30, 100)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Rocket, SpriteKind.BasicEnemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    radialBlast(otherSprite.x, otherSprite.y)
    sprites.destroy(otherSprite)
})
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
function createDroneTrails () {
    for (let value of sprites.allOfKind(SpriteKind.Drone)) {
        thrusterFire = sprites.create(particles2[colorPaths[droneColor]._pickRandom()], SpriteKind.Drone)
        thrusterFire.setVelocity(randint(-10, 10), 30)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = randint(10, 30)
    }
}
function radialBlast (x: number, y: number) {
    backBlast(x, y)
    sideBlast(x, y)
    frontBlast(x, y)
}
function createDroneRocketTrails () {
    for (let value of sprites.allOfKind(SpriteKind.DroneRocket)) {
        thrusterFire = sprites.create(particles2[colorPaths[droneMissileColor]._pickRandom()], SpriteKind.Effect)
        thrusterFire.setVelocity(randint(-20, 20), 50)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = 10
    }
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
    droneTotal = 0
    currentStage = 0
    scoreTotal = 0
    sessionHighScore = 0
    bombTotal = 0
}
function initializeProtossAssets () {
    protossAssets = [
    img`
        . . . . . . b b b . . . . . . . 
        . . . . . . b d b . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . 4 4 5 d 5 4 4 . . . . . 
        . b b b b b 5 d 5 b b b b b . . 
        . 5 5 d d d 5 d 5 d d d 5 5 . . 
        . . . d d d 5 d 5 d d d . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d 5 d 5 d . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 5 d 5 . . . . . . . 
        . . . . . . 6 9 6 . . . . . . . 
        . . . . . . 5 9 5 . . . . . . . 
        . . . . . . . d . . . . . . . . 
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
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    sprite.lifespan = enemyProojectileLifespan
})
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
    // 0 - terran
    // 1 - protoss
    // 2 - zerg
    // 3 - fire
    // 4 - plasma
    // 5 - missile powerup
    // 6 - bomb powerup
    // 7 - drone powerup
    // 8 - drone
    // 9 - stars
    colorPaths = [
    [0, 3, 4],
    [
    0,
    5,
    7,
    8
    ],
    [0, 1, 2],
    [
    0,
    1,
    3,
    4
    ],
    [
    0,
    2,
    7,
    9,
    10,
    11
    ],
    [3],
    [7, 8],
    [1],
    [0, 1],
    [0, 8, 9]
    ]
    // 0 - white
    // 1 - red
    // 2 - pink
    // 3 - orange
    // 4 - yellow
    // 5 - teal
    // 6 - green
    // 7 - blue
    // 8 - light blue
    // 9 - purple
    // 10 - grey
    // 11 - violet
    // 12 - beige
    // 13 - brown
    // 14 - black
    particles2 = [
    img`
        1 
        `,
    img`
        2 
        `,
    img`
        3 
        `,
    img`
        4 
        `,
    img`
        5 
        `,
    img`
        6 
        `,
    img`
        7 
        `,
    img`
        8 
        `,
    img`
        9 
        `,
    img`
        a 
        `,
    img`
        b 
        `,
    img`
        c 
        `,
    img`
        d 
        `,
    img`
        e 
        `,
    img`
        f 
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
sprites.onOverlap(SpriteKind.Plasma, SpriteKind.BasicEnemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    radialBlast(otherSprite.x, otherSprite.y)
    sprites.destroy(otherSprite)
})
function createBasic () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        spawnOffset = cannonOffset
        for (let index = 0; index < 2; index++) {
            rocketSprite = sprites.create(playerCombatAssets[0], SpriteKind.Rocket)
            scaling.scaleToPercent(rocketSprite, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            rocketSprite.setPosition(value.x + spawnOffset, value.y - 4)
            rocketSprite.vy = -110
            spawnOffset = spawnOffset * -1
        }
    }
}
function createTrailEffects () {
    createRocketTrails()
    createPlasmaTrails()
    createDroneTrails()
    createDroneRocketTrails()
}
sprites.onCreated(SpriteKind.DroneRocket, function (sprite) {
    sprite.lifespan = playerProjectileLifespan
})
let gameUIAssets: Image[] = []
let supportAssets: Image[] = []
let protossCombatAssets: Image[] = []
let protossAssets: Image[] = []
let bombTotal = 0
let sessionHighScore = 0
let scoreTotal = 0
let droneTotal = 0
let playerY = 0
let playerX = 0
let zergCombatAssets: Image[] = []
let zergAssets: Image[] = []
let thrusterEffectOffset = 0
let shieldSprite: Sprite = null
let doodads: Image[] = []
let thrusterFire: Sprite = null
let starColor = 0
let droneMissileColor = 0
let droneColor = 0
let bombColor = 0
let missileColor = 0
let plasmaColor = 0
let zergColor = 0
let protossColor = 0
let terranColor = 0
let basicEnemyValue = 0
let enemyProojectileLifespan = 0
let thrusterOffset = 0
let causedByBomb = false
let currentStage = 0
let fireColor = 0
let colorPaths: number[][] = []
let invulnerable = false
let weapon = 0
let terranCombatAssets: Image[] = []
let terranAssets: Image[] = []
let notCausedByBomb = false
let playerAssets: Image[] = []
let senseiDerick: Sprite = null
let projectile: Sprite = null
let particles2: Image[] = []
let blastFire: Sprite = null
let backdrops: Image[] = []
let plasma: Sprite = null
let playerProjectileLifespan = 0
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
    createVikingThrusterTrail()
    createTrailEffects()
})
