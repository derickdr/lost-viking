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
	
}
function frontBlast (x: number, y: number) {
    for (let index = 0; index < 6; index++) {
        blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
        blastFire.setVelocity(randint(-50, 50), randint(-10, 20))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
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
    controller.moveSprite(getThisGuyHome, 75, 75)
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
        blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
        blastFire.setVelocity(randint(-40, 40), -50)
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
    timer.after(50, function () {
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
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
}
function createRocketTrails () {
    for (let value of sprites.allOfKind(SpriteKind.Rocket)) {
        thrusterFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Player)
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
        ffffffffffffffffff1ffffffefffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5fffffffffffffffffffffffffbfffffffffffffff9fffffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffbfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff1fffffffffffffffffffffffff
        ffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff1ffffffffffffff6ffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffeffffff1ffaffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffff1ffffffffffffff1fff
        ffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeffffffffffffffffffff6fffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffbfffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffafffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffff
        fffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff1ffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffbfffffffffffffffffff1fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffbffffffffffffffffffffffffffffbffffffffffff1ffffffffffffffffffffffffffffffbffffffffff
        ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffff9ffffbffff
        ffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff19ffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff1ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffff
        ffffefffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffff5fffffffffff
        fffffffffffffffffffffffffffffffffffffffbf9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff6ffffffffffffffff
        fffffffffffffffff1fffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffbffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffff
        ffffffffaffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
        fffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffff1fffffff
        fffffffffffffffffffffffff1ffffffffffffffffffffffffffff9ffffffffffff1ffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5ffffffffffffbfffffffffff
        fffffffffffffafffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1fffffffffffffffffffffffffffffff
        fffff1fffffffffeffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffff
        ffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffbffffffffffffffffffffffff1ffffffffffffffffffffffff9fffffffffffbfffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f
        fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffff
        fffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff5fffffffffffffffeffffffffffffffffffffffffffffffffffffff1fff9ffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffff5ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1fffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffbfff99fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        fffffffffffffffffffffffff6ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff5fffffffffffffffff9ffffffffffffffffffffffffffffff9fff1ffffffffffff9ffffffffff
        ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffeffffffffffff
        ffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff9fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffff9ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff1ffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffff9fffffffffffffbffffffff1ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffff9fffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffff9ffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffeffffffffffffffff1ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffbfffffffffffffff1fffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffbfffffffffffffffffff
        ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff16fffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffff5ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffff
        fffffffffffffffffffffffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffbfffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffbffffff6ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffff
        fffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffff1ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
        ffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffeffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffefffffff1ffffffffffffffff1fffffffffffff9fffffbffffffffffffffffffffafffbfffffffff1fffffbff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1ffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffff5ffffffffffffffffffffffffffaffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff1fffffff
        ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffeffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffff1ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff96ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffff
        ffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        fffff5ffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff
        fffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff1ffffffffffffffffffff1ffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffbfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
        ffff1fffffffffefff9ffffffffffff5ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffefffffffffffffffffffffffff1ffffffffffffffffffffffffffffffefffffffff
        fffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffeffffff1ffffffffffffffffff
        ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
        fffffffbffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1fffffffffffffff9fffffffffffffffbfffffffffffffffffffffffff5ffffffffffffffffffffff
        fffffffffffffffffffffffff1ffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff9ffffffffffffffff6ffffffffffffff1fff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffff
        fff1ffffffffffffff1ffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffaff1ffffffefffffffffffffff
        fffffffffffff1fffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1fffff6ffffffffffffffffffffefffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffbffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
        ffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffafffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1fffffffffffffffffffbfffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffff1fffffff
        ffffffffffbffffffffffffffffffffffffffffff1ffffffffffffbffffffffffffffffffffffffffffbffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffbffff9ffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
        ffffffff1ffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffff91fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff5fffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffeffff
        ffffffffffffffff6ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffbffffffffffffff
        ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffaffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffff
        fffffff1ffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffbffffffffffff5ffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff1ffffffffffff9ffffffffffffffffffffffffffff1fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffafffffffffffff
        ffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffefffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffff
        ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffbfffffffffff9ffffffffffffffffffffffff1ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffff
        f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff5ffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffff9fff1ffffffffffffffffffffffffffffffffffffffefffffffffffffff5ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffff1ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff99fffbffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
        ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff9ffffffffffff1fff9ffffffffffffffffffffffffffffff9fffffffffffffffff5ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff6fffffffffffffffffffffffff
        ffffffffffffeffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff9fff
        fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff9ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff1ffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1ffffffffbfffffffffffff9ffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff9fffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff9fffffffffbf
        fffff1ffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffefffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffbffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff1fffffffffffffffbfffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff5ffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffff61ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffbfffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff6ffffffbfff
        fffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1ffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1fffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff
        fffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffff
        ffffffffffffffffffffffffffffeffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
        ffbfffff1fffffffffbfffaffffffffffffffffffffbfffff9fffffffffffff1ffffffffffffffff1fffffffeffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffff
        ffffffffffffffaffffffffffffffffffffffffff5ffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffff1ffffffffff
        fffffff1ffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffefffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff
        ffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff5fffff
        ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffff
        ffffffffffffffffffffffffff1ffffffffff1ffffffffffffffffffff1fffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffff
        fffffffffbffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
        blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
        blastFire.setVelocity(randint(-10, -40), randint(-10, -40))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
    for (let index = 0; index < 4; index++) {
        blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
        blastFire.setVelocity(randint(10, 40), randint(-10, -40))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(200, 300)
    }
    timer.after(50, function () {
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
            blastFire.setVelocity(randint(-10, -40), randint(-10, -40))
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
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
        thrusterFire = sprites.create(particles2[randint(0, 3)], SpriteKind.Player)
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
                thrusterFire = sprites.create(particles2[randint(3, 5)], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-40, 40), 75)
                thrusterFire.lifespan = randint(30, 100)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        } else if (value.vx > 0) {
            thrusterFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
            thrusterFire.setVelocity(randint(-40, 40), 75)
            thrusterFire.lifespan = randint(30, 100)
            thrusterFire.setPosition(value.x - thrusterEffectOffset, value.y + 5)
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[randint(3, 5)], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-40, 40), 75)
                thrusterFire.lifespan = randint(30, 100)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        } else if (value.vx < 0) {
            thrusterFire = sprites.create(particles2[randint(4, 5)], SpriteKind.Effect)
            thrusterFire.setVelocity(randint(-40, 40), 75)
            thrusterFire.lifespan = randint(30, 100)
            thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[randint(3, 5)], SpriteKind.Effect)
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
        thrusterFire = sprites.create(particles2[0], SpriteKind.Drone)
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
        thrusterFire = sprites.create(particles2[randint(0, 1)], SpriteKind.Effect)
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
    dronesActive = 0
    currentStage = 0
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
    // 0 - red
    // 1 - violet
    // 2 - pink
    // 3 - white
    // 4 - yellow
    // 5 - orange
    // 6 - light blue
    // 7 - teal
    // 8 - blue
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
        `,
    img`
        9 
        `,
    img`
        6 
        `,
    img`
        8 
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
    createDroneTrails()
    createPlasmaTrails()
    createDroneRocketTrails()
}
sprites.onCreated(SpriteKind.DroneRocket, function (sprite) {
    sprite.lifespan = playerProjectileLifespan
})
let projectile: Sprite = null
let gameUIAssets: Image[] = []
let supportAssets: Image[] = []
let protossCombatAssets: Image[] = []
let protossAssets: Image[] = []
let dronesActive = 0
let playerY = 0
let playerX = 0
let zergCombatAssets: Image[] = []
let zergAssets: Image[] = []
let thrusterEffectOffset = 0
let shieldSprite: Sprite = null
let doodads: Image[] = []
let backdrops: Image[] = []
let thrusterFire: Sprite = null
let enemyProojectileLifespan = 0
let thrusterOffset = 0
let causedByBomb = false
let currentStage = 0
let invulnerable = false
let weapon = 0
let terranCombatAssets: Image[] = []
let terranAssets: Image[] = []
let notCausedByBomb = false
let playerAssets: Image[] = []
let getThisGuyHome: Sprite = null
let particles2: Image[] = []
let blastFire: Sprite = null
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
game.onUpdateInterval(1000, function () {
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
forever(function () {
    createVikingThrusterTrail()
    createTrailEffects()
})
