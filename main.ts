namespace SpriteKind {
    export const Viking = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const Plasma = SpriteKind.create()
    export const Rocket = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const Drone = SpriteKind.create()
    export const DroneRocket = SpriteKind.create()
    export const BasicEnemy = SpriteKind.create()
    export const SplashText = SpriteKind.create()
    export const MenuUI = SpriteKind.create()
    export const BackgroundElement = SpriteKind.create()
    export const Edge = SpriteKind.create()
    export const Miniboss = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const DronePickup = SpriteKind.create()
    export const MissilePickup = SpriteKind.create()
    export const PlasmaPickup = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
    export const BombPickup = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const PowerEffect = SpriteKind.create()
    export const Camera = SpriteKind.create()
}
function createPlasmaHelp () {
    demoAsset = sprites.create(supportAssets[2], SpriteKind.MenuUI)
    demoAsset.setPosition(145, 28)
    demoAsset.setFlag(SpriteFlag.GhostThroughWalls, true)
    demoAsset.lifespan = 1000
    textSprite = textsprite.create("LAZR", 0, 1)
    textSprite.setPosition(145, 36)
    textSprite.lifespan = 1000
    textSprite.setKind(SpriteKind.MenuUI)
}
sprites.onOverlap(SpriteKind.BackgroundElement, SpriteKind.Edge, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
sprites.onCreated(SpriteKind.BombPickup, function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(2, 8))
    sprite.lifespan = randint(5000, 7000)
})
function introSplashText () {
    textDelay = 0
    if (playing == false) {
        timer.after(textDelay, function () {
            introText1 = textsprite.create("You, Mighty Viking,", 0, 1)
            introText1.setKind(SpriteKind.SplashText)
            introText1.setPosition(80, 18)
            if (playing == false) {
                timer.after(textDelay, function () {
                    introText2 = textsprite.create("are lost!!! Find your", 0, 1)
                    introText2.setKind(SpriteKind.SplashText)
                    introText2.setPosition(80, 28)
                    if (playing == false) {
                        timer.after(textDelay, function () {
                            introText3 = textsprite.create("way home to Vikingville,", 0, 1)
                            introText3.setKind(SpriteKind.SplashText)
                            introText3.setPosition(80, 38)
                            if (playing == false) {
                                timer.after(textDelay, function () {
                                    introText4 = textsprite.create("but beware the Evil", 0, 1)
                                    introText4.setKind(SpriteKind.SplashText)
                                    introText4.setPosition(80, 48)
                                    if (playing == false) {
                                        timer.after(textDelay, function () {
                                            introText5 = textsprite.create("Terra-Tron!!!", 0, 4)
                                            scaling.scaleToPercent(introText5, 180, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                                            introText5.setKind(SpriteKind.SplashText)
                                            introText5.setPosition(80, 62)
                                            if (playing == false) {
                                                timer.after(textDelay, function () {
                                                    introText6 = sprites.create(img`
                                                        2..2.2222....222...222...2222...22.....2..2..222..22222....2.....222..2..2..2222....2...2..222...2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....22.2.2...2...2......2......2...2.2...2.......2...2.2...2..2..2..2...2...2
                                                        2222.222.....2..2.2...2..222....2......2.22.2...2...2......2......2...22....222......2.2..2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.......2.....2..2.2...2...2......2......2...2.2...2.........2...2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....2..2.2...2...2......2......2...2..2..2.........2...2...2..2..2...........
                                                        2..2.2222....222...222...2222...22.....2..2..222....2......2222..222..2..2..2222......2....222....22...2...2...2
                                                        `, SpriteKind.SplashText)
                                                    animation.runImageAnimation(
                                                    introText6,
                                                    [img`
                                                        2..2.2222....222...222...2222...22.....2..2..222..22222....2.....222..2..2..2222....2...2..222...2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....22.2.2...2...2......2......2...2.2...2.......2...2.2...2..2..2..2...2...2
                                                        2222.222.....2..2.2...2..222....2......2.22.2...2...2......2......2...22....222......2.2..2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.......2.....2..2.2...2...2......2......2...2.2...2.........2...2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....2..2.2...2...2......2......2...2..2..2.........2...2...2..2..2...........
                                                        2..2.2222....222...222...2222...22.....2..2..222....2......2222..222..2..2..2222......2....222....22...2...2...2
                                                        `,img`
                                                        2..2.2222....222...222...2222...22.....2..2..222..22222....2.....222..2..2..2222....2...2..222...2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....22.2.2...2...2......2......2...2.2...2.......2...2.2...2..2..2..2...2...2
                                                        2222.222.....2..2.2...2..222....2......2.22.2...2...2......2......2...22....222......2.2..2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.......2.....2..2.2...2...2......2......2...2.2...2.........2...2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....2..2.2...2...2......2......2...2..2..2.........2...2...2..2..2...........
                                                        2..2.2222....222...222...2222...22.....2..2..222....2......2222..222..2..2..2222......2....222....22...2...2...2
                                                        `,img`
                                                        2..2.2222....222...222...2222...22.....2..2..222..22222....2.....222..2..2..2222....2...2..222...2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....22.2.2...2...2......2......2...2.2...2.......2...2.2...2..2..2..2...2...2
                                                        2222.222.....2..2.2...2..222....2......2.22.2...2...2......2......2...22....222......2.2..2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.......2.....2..2.2...2...2......2......2...2.2...2.........2...2...2..2..2..2...2...2
                                                        2..2.2.......2..2.2...2..2.....2..2....2..2.2...2...2......2......2...2..2..2.........2...2...2..2..2...........
                                                        2..2.2222....222...222...2222...22.....2..2..222....2......2222..222..2..2..2222......2....222....22...2...2...2
                                                        `,img`
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        `,img`
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        ................................................................................................................
                                                        `],
                                                    200,
                                                    true
                                                    )
                                                    scaling.scaleToPercent(introText6, 120, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                                                    introText6.setPosition(80, 80)
                                                    if (playing == false) {
                                                        timer.after(2000, function () {
                                                            aButtonSprite = sprites.create(img`
                                                                . . . . 6 6 6 6 6 6 6 . . . . 
                                                                . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                                                                . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                                                                . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                                                                . c 7 7 8 8 8 8 8 8 8 7 7 c . 
                                                                . c 9 7 8 7 7 7 7 7 8 7 9 c . 
                                                                . c 9 9 7 7 7 7 7 7 7 9 9 c . 
                                                                . c 6 6 9 9 9 9 9 9 9 6 6 c . 
                                                                c c 6 6 6 6 6 6 6 6 6 6 6 c c 
                                                                c d c c 6 6 6 6 6 6 6 c c d c 
                                                                c d d d c c c c c c c d d d c 
                                                                c c b d d d d d d d d d b c c 
                                                                c c c c c b b b b b c c c c c 
                                                                c c b b b b b b b b b b b c c 
                                                                . c c b b b b b b b b b c c . 
                                                                . . . c c c c c c c c c . . . 
                                                                `, SpriteKind.MenuUI)
                                                            aButtonSprite.setPosition(120, 99)
                                                            animation.runImageAnimation(
                                                            aButtonSprite,
                                                            [img`
                                                                . . . . 6 6 6 6 6 6 6 . . . . 
                                                                . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                                                                . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                                                                . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                                                                . c 7 7 8 8 8 8 8 8 8 7 7 c . 
                                                                . c 9 7 8 7 7 7 7 7 8 7 9 c . 
                                                                . c 9 9 7 7 7 7 7 7 7 9 9 c . 
                                                                . c 6 6 9 9 9 9 9 9 9 6 6 c . 
                                                                c c 6 6 6 6 6 6 6 6 6 6 6 c c 
                                                                c d c c 6 6 6 6 6 6 6 c c d c 
                                                                c d d d c c c c c c c d d d c 
                                                                c c b d d d d d d d d d b c c 
                                                                c c c c c b b b b b c c c c c 
                                                                c c b b b b b b b b b b b c c 
                                                                . c c b b b b b b b b b c c . 
                                                                . . . c c c c c c c c c . . . 
                                                                `,img`
                                                                . . . . . . . . . . . . . . . 
                                                                . . . . . . . . . . . . . . . 
                                                                . . . . 6 6 6 6 6 6 6 . . . . 
                                                                . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                                                                . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                                                                . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                                                                . e 7 7 8 8 8 8 8 8 8 7 7 e . 
                                                                . c 9 7 8 7 7 7 7 7 8 7 9 c . 
                                                                c c 9 9 7 7 7 7 7 7 7 9 9 c c 
                                                                c d c c 9 9 9 9 9 9 9 c c d c 
                                                                c d d d c c c c c c c d d d c 
                                                                c c b d d d d d d d d d b c c 
                                                                c c c c c b b b b b c c c c c 
                                                                c c b b b b b b b b b b b c c 
                                                                . c c b b b b b b b b b c c . 
                                                                . . . c c c c c c c c c . . . 
                                                                `],
                                                            150,
                                                            true
                                                            )
                                                            continueText = textsprite.create("START GAME", 0, 7)
                                                            scaling.scaleToPercent(continueText, 120, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                                                            scaling.scaleToPercent(continueText, 95, ScaleDirection.Horizontally, ScaleAnchor.Middle)
                                                            continueText.setPosition(122, 113)
                                                            continueText.setKind(SpriteKind.SplashText)
                                                            difficultySkullSprite = sprites.create(img`
                                                                ......cccccbb.....
                                                                ....ccd1111dbbb...
                                                                ..eed11111111dbb..
                                                                ..ed1111111111db..
                                                                .ed111111111111db.
                                                                .ed111111111111db.
                                                                ced111111111111dbc
                                                                ced1111d1111111dbc
                                                                cedffff1d11ffffdbc
                                                                ced1ccf1d11fff1dbc
                                                                ced11111d111111dbc
                                                                ced11111d111111dbc
                                                                .ce1111c11c1111dc.
                                                                .ce1111c11c1111dc.
                                                                ..ce1111dd1111dc..
                                                                ...ccb1111111cc...
                                                                ....cbd1d1dd1c....
                                                                ....cbdcdcdcbc....
                                                                ....cbbcbcbccc....
                                                                ....cccccccccc....
                                                                `, SpriteKind.MenuUI)
                                                            difficultySkullSprite.setPosition(80, 100)
                                                            settingsSprite = sprites.create(img`
                                                                ....................................
                                                                .9999996666666666666666666666999999.
                                                                996666666cccccccccccccccccc666666699
                                                                966cccccccccccccccccccccccccccccc669
                                                                966c11ccc11c111111c11cc11c11cc11c669
                                                                66cc111c111c111111c111c11c11cc11cc66
                                                                66cc1111111c11ccccc111c11c11cc11cc66
                                                                66cc1111111c11111cc111111c11cc11cc66
                                                                66cc11c1c11c11111cc111111c11cc11cc66
                                                                66cc11ccc11c11ccccc11c111c11cc11cc66
                                                                66cc11ccc11c111111c11c111c111111cc66
                                                                966c11ccc11c111111c11cc11c111111c669
                                                                966cccccccccccccccccccccccccccccc669
                                                                996666666cccccccccccccccccc666666699
                                                                .9999996666666666666666666666999999.
                                                                ....................................
                                                                `, SpriteKind.MenuUI)
                                                            settingsSprite.setPosition(40, 100)
                                                            settingsText = textsprite.create("SETTINGS", 0, 2)
                                                            scaling.scaleToPercent(settingsText, 120, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                                                            scaling.scaleToPercent(settingsText, 95, ScaleDirection.Horizontally, ScaleAnchor.Middle)
                                                            settingsText.setPosition(40, 113)
                                                            settingsText.setKind(SpriteKind.SplashText)
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}
function endCameraMovement (previousCoordinates: any[], targetCoordinates: any[]) {
    for (let value of sprites.allOfKind(SpriteKind.Camera)) {
        if (value.x == menuCoordinateX[0] && value.y == menuCoordinateY[0]) {
            timer.after(100, function () {
                sprites.destroy(value)
            })
        }
    }
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
function levelAnnouncer (currentLvl: number) {
    levelTextSprite = textsprite.create("LEVEL", 0, 1)
    levelTextSprite.setPosition(120, 140)
    if (currentStage == 1) {
        levelNumberSprite = textsprite.create(convertToText(currentLevel), 0, 9)
    } else if (currentStage == 2) {
        levelNumberSprite = textsprite.create(convertToText(currentLevel), 0, 10)
    } else if (currentStage == 3) {
        levelNumberSprite = textsprite.create(convertToText(currentLevel), 0, 2)
    }
    levelNumberSprite.setPosition(120, 152)
    scaling.scaleToPercent(levelNumberSprite, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    levelTextSprite.lifespan = 6000
    levelNumberSprite.lifespan = 6000
    levelTextSprite.ay = 20
    levelNumberSprite.ay = 20
    levelTextSprite.vy = -50
    levelNumberSprite.vy = -50
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.PlasmaPickup, randint(3000, 7000), function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(3, 6))
})
function enterSettings (currentSettings: any[], entries: any[]) {
    viewingSettings = true
    moveCamera(cameraOrigin, settings2)
}
function loadMap (lvl: number) {
    if (lvl == 0 && currentLevel == 0) {
        introSplashText()
    } else if (lvl == 0 && currentLevel > 0) {
        mapSequence(lvl)
    } else if (lvl == 1) {
        mapSequence(lvl)
    } else if (lvl == 2) {
        mapSequence(lvl)
    } else if (lvl == 3) {
        mapSequence(lvl)
    }
    playing = true
}
function frontBlast (x: number, y: number, lvl: number) {
    if (lvl == 1) {
        effectColorSelector = 1
    } else if (lvl == 2) {
        effectColorSelector = 2
    } else if (lvl == 3) {
        effectColorSelector = 0
    }
    for (let index = 0; index < 4; index++) {
        blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(-50, 50), randint(-10, 20))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(120, 240)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing) && !(viewingSettings)) {
        moveCamera(cameraOrigin, easterEgg)
        viewingEasterEgg = true
    } else if (viewingEasterEgg) {
        moveCamera(cameraOrigin, home)
        viewingEasterEgg = false
    } else {
    	
    }
})
function initializePlayer () {
    initializePlayerAssets()
    senseiDerick = sprites.create(playerAssets[1], SpriteKind.Viking)
    senseiDerick.setStayInScreen(false)
    senseiDerick.setPosition(80, 150)
    senseiDerick.vy = -25
    // dev note:
    // i gave up on the pixel art purism huhu leave me alone my fingers are old
    scaling.scaleToPercent(senseiDerick, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    sprites.destroyAllSpritesOfKind(SpriteKind.SplashText)
    sprites.destroyAllSpritesOfKind(SpriteKind.MenuUI)
    createShield(notCausedByBomb)
    timer.after(2000, function () {
        senseiDerick.setStayInScreen(true)
        senseiDerick.vy = 0
        controller.moveSprite(senseiDerick, 75, 75)
    })
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
sprites.onOverlap(SpriteKind.Viking, SpriteKind.PlasmaPickup, function (sprite, otherSprite) {
    powerUpAnimation(sprite, otherSprite)
    addPoints(otherSprite)
})
function spawnLoot (x: Sprite, y: Sprite, remaining: number) {
    if (remaining > 0) {
        if (Math.percentChance(10)) {
            spawnPowerUp(x)
            powerupsRemaining += -1
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentStage != 0) {
        createProjectile(weapon)
    } else if (currentStage == 0 && !(viewingSettings)) {
        currentStage = previousStage + 1
        currentLevel += 1
        cycleStages(currentStage)
        loadMap(currentStage)
        levelAnnouncer(currentLevel)
    } else if (viewingSettings && !(overlappingExit)) {
    	
    } else if (viewingSettings && overlappingExit) {
    	
    }
})
sprites.onOverlap(SpriteKind.Plasma, SpriteKind.Edge, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
sprites.onDestroyed(SpriteKind.DronePickup, function (sprite) {
    spawnPowerUp(sprite)
    radialBlast(sprite.x, sprite.x, 2)
})
function loadUI () {
    scoreHeaderSprite = sprites.create(gameUIAssets[1], SpriteKind.UI)
    scoreHeaderSprite.setPosition(15, 4)
}
sprites.onDestroyed(SpriteKind.MissilePickup, function (sprite) {
    spawnPowerUp(sprite)
    radialBlast(sprite.x, sprite.x, 2)
})
sprites.onDestroyed(SpriteKind.Shield, function (sprite) {
    invulnerable = false
})
sprites.onCreated(SpriteKind.PlasmaPickup, function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(2, 8))
    sprite.lifespan = randint(5000, 7000)
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.BombPickup, randint(3000, 7000), function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(3, 6))
})
sprites.onDestroyed(SpriteKind.PlasmaPickup, function (sprite) {
    spawnPowerUp(sprite)
    radialBlast(sprite.x, sprite.x, 2)
})
function createSideHelp () {
    demoAsset = sprites.create(supportAssets[0], SpriteKind.MenuUI)
    demoAsset.setPosition(15, 28)
    demoAsset.setFlag(SpriteFlag.GhostThroughWalls, true)
    demoAsset.lifespan = 1000
    textSprite = textsprite.create("SIDE", 0, 1)
    textSprite.setPosition(15, 36)
    textSprite.setKind(SpriteKind.MenuUI)
    textSprite.lifespan = 1000
}
function backBlast (x: number, y: number, lvl: number) {
    if (lvl == 1) {
        effectColorSelector = 1
    } else if (lvl == 2) {
        effectColorSelector = 2
    } else if (lvl == 3) {
        effectColorSelector = 0
    }
    for (let index = 0; index < 4; index++) {
        blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(-40, 40), -50)
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(120, 240)
    }
    timer.after(50, function () {
        for (let index = 0; index < 4; index++) {
            blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
            blastFire.setVelocity(randint(-40, 40), -50)
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
    })
}
function createMenuContent () {
    createSideHelp()
    createBombHelp()
    createPlasmaHelp()
    createDroneHelp()
    createBombMax()
    createElseMax()
    createBottomTooltip()
    game.setDialogCursor(img`
        . 6 7 7 7 7 . . 6 7 . . 6 7 . 6 7 7 6 7 7 6 7 7 
        6 7 6 6 6 6 7 . 6 7 . . 6 7 . 6 7 7 6 7 7 6 7 7 
        6 7 . . . 6 7 . 6 7 . . 6 7 . 6 7 7 6 7 7 6 7 7 
        6 7 . . . 6 7 . 6 7 6 6 7 6 . 6 7 7 6 7 7 6 7 7 
        6 7 . . . 6 7 . 6 7 7 7 6 . . 6 7 7 6 7 7 6 7 7 
        6 7 . . . 6 7 . 6 7 6 6 7 . . 6 7 7 6 7 7 6 7 7 
        6 7 . . . 6 7 . 6 7 . . 6 7 . 6 7 7 6 7 7 6 7 7 
        6 7 . . . 6 7 . 6 7 . . 6 7 . . . . . . . . . . 
        6 7 . . . 6 7 . 6 7 . . 6 7 . 6 7 7 6 7 7 6 7 7 
        . 6 7 7 7 7 6 . 6 7 . . 6 7 . 6 7 7 6 7 7 6 7 7 
        . . 6 6 6 6 . . . 6 . . . 6 . . 6 6 . 6 6 . 6 6 
        `)
    game.showLongText("---CONTROLS---  Shoot:            A / Space            Move:        D-PAD or WASD                    Bomb:            B or X", DialogLayout.Center)
}
function createElseMax () {
    textSprite = textsprite.create("MAX:", 0, 1)
    textSprite.setKind(SpriteKind.MenuUI)
    textSprite.setPosition(145, 63)
    textSprite.lifespan = 1000
    textSprite = textsprite.create("Else", 0, 9)
    textSprite.setKind(SpriteKind.MenuUI)
    scaling.scaleToPercent(textSprite, 110, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    textSprite.setPosition(145, 74)
    textSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    textSprite.lifespan = 1000
    textSprite = textsprite.create("2", 0, 7)
    textSprite.setKind(SpriteKind.MenuUI)
    scaling.scaleToPercent(textSprite, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    textSprite.setPosition(145, 86)
    textSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    textSprite.lifespan = 1000
}
function initializeGame () {
    tiles.setCurrentTilemap(tilemap`level2`)
    loadMap(currentStage)
    initializeConsts()
    initializeTemp()
    loadGameAssets()
    loadMapAssets()
    loadUI()
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
function createBottomTooltip () {
    textSprite = textsprite.create("Bomb groups of enemies.", 0, 1)
    textSprite.setPosition(80, 115)
    scaling.scaleToPercent(textSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    textSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    textSprite.lifespan = 1000
    textSprite.setKind(SpriteKind.MenuUI)
}
sprites.onOverlap(SpriteKind.Viking, SpriteKind.BombPickup, function (sprite, otherSprite) {
    powerUpAnimation(sprite, otherSprite)
    addPoints(otherSprite)
})
sprites.onOverlap(SpriteKind.Viking, SpriteKind.DronePickup, function (sprite, otherSprite) {
    powerUpAnimation(sprite, otherSprite)
    addPoints(otherSprite)
})
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
    enemyProjectileLifespan = 2000
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
    // 0 - power ups
    // 1 - basic enemies
    // 2 - minibosses
    // 3 - bosses
    // 4 - leftover life
    pointValues = [
    500,
    100,
    1000,
    10000,
    1000
    ]
    // for both x & y arrays
    // 0 - home
    // 1 - settings
    // 2 - leaderboard
    // 3 - hi camryn
    menuCoordinateX = [
    80,
    -80,
    80,
    240
    ]
    menuCoordinateY = [
    60,
    60,
    180,
    60
    ]
    home = [menuCoordinateX[0], menuCoordinateY[0]]
    settings2 = [menuCoordinateX[1], menuCoordinateY[1]]
    leaderboard = [menuCoordinateX[2], menuCoordinateY[2]]
    easterEgg = [menuCoordinateX[3], menuCoordinateY[3]]
}
sprites.onCreated(SpriteKind.MissilePickup, function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(2, 8))
    sprite.lifespan = randint(5000, 7000)
})
function powerUpAnimation (viking: Sprite, powerUp: Sprite) {
    if (powerUp.image.equals(img`
        . . . . b . b . . . . 
        . . . 1 d b d 1 . . . 
        . . . 4 1 d 1 4 . . . 
        . . 1 4 . 4 . 4 1 . . 
        . . 4 1 . 4 . 1 4 . . 
        . 2 4 . . 1 . . 4 2 . 
        1 2 2 . 2 2 2 . 2 2 1 
        1 1 . . 1 2 1 . . 1 1 
        . . . . 1 1 1 . . . . 
        `)) {
        powerUpEffect = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............4444..............
            ......444444444ee444444444......
            ......444444eeeeeeee444444......
            ........444444eeee444444........
            ..........44444ee44444..........
            ............44444444............
            ..............4444..............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.PowerEffect)
        animation.runImageAnimation(
        powerUpEffect,
        [img`
            ............4....44.............
            ............4....4..............
            .......4....44.4................
            .......ee...4.444..44...........
            ..........44e.4e4.4....4........
            ............e4ee44...44.........
            ..44...4....e..ee.4.44.......4..
            .......e...ee.....eee.ee4444ee4.
            44.......4..................e4..
            ...4e..4..ee.........44..44444..
            ..44..........4444..............
            ......444444444ee444444444......
            ..e...444444eeeeeeee444444......
            ..4.....444444eeee444444........
            44........44444ee44444.....444..
            ....4e......44444444....44......
            .444eee.......4444...e..........
            .......4ee...........ee4.4......
            ......4444.......e...e...4......
            .............4ee.44..4..........
            ..............44....44..........
            ..............4.................
            `,img`
            ............4.....4.............
            ................................
            .......4....4...................
            ............4......4..4.....4...
            .....4.....4......4.444....444..
            .....4......4444....4.4.....4...
            ...............44....4e.....44..
            ...4..4.ee..e..4.ee.eee.....4...
            4..4444.ee......................
            ...4e4.4.ee..........44..44.44..
            ...4..........44e4..........44..
            ..44..444444444ee444444444...44.
            ..4...4444eeeeeeeeee4eee44...4..
            ...4....444ee4eeee4eee44....4...
            44.44.....444eeee4e444.....4....
            ...444......44ee4ee4....44......
            .444ee.eee....4444...........4..
            .......4ee............e..4444...
            ......44..4......e...e44..4.....
            ..444.4...44.4.e.44..44444......
            ......4......44...444....44.....
            ..............44.....44.........
            `,img`
            ................................
            ...........444..................
            ...........eeee....4............
            ............4ee.4.44............
            ....44........44...4444e4.4.....
            .....44......44e4444e4ee..4.....
            ......44e4444e.ee..eeeeee44...44
            .444....eee.ee.....eee4.444.4444
            .4444e4.ee..e.eee..4e.eeeeeee.4.
            ..eeee4.ee....44444.......eee.4.
            444...........444444.......ee4..
            .44...444444444eee44444ee4...ee4
            44eeee444444eeeeeeee44ee44..4eee
            .eeeee..444444eeee444444....4e..
            44eee.ee..444eeee44444......4e..
            ...ee...ee..4eee4444..e...eeee44
            .44.4.........4444....ee4eee4444
            ....4eeee..eeee.....4..ee44.....
            ....44.4..eeeeee.ee..444........
            ......44.4e...ee4ee4..44........
            ..............44e4.44...........
            .................4..............
            `,img`
            ............4.....4.............
            ................................
            .......4....4...................
            ............4......4..4.....4...
            .....4.....4......4.444....444..
            .....4......4444....4.4.....4...
            ...............44....4e.....44..
            ...4..4.ee..e..4.ee.eee.....4...
            4..4444.ee......................
            ...4e4.4.ee..........44..44.44..
            ...4..........44e4..........44..
            ..44..444444444ee444444444...44.
            ..4...4444eeeeeeeeee4eee44...4..
            ...4....444ee4eeee4eee44....4...
            44.44.....444eeee4e444.....4....
            ...444......44ee4ee4....44......
            .444ee.eee....4444...........4..
            .......4ee............e..4444...
            ......44..4......e...e44..4.....
            ..444.4...44.4.e.44..44444......
            ......4......44...444....44.....
            ..............44.....44.........
            `,img`
            ............4....44.............
            ............4....4..............
            .......4....44.4................
            .......ee...4.444..44...........
            ..........44e.4e4.4....4........
            ............e4ee44...44.........
            ..44...4....e..ee.4.44.......4..
            .......e...ee.....eee.ee4444ee4.
            44.......4..................e4..
            ...4e..4..ee.........44..44444..
            ..44..........4444..............
            ......444444444ee444444444......
            ..e...444444eeeeeeee444444......
            ..4.....444444eeee444444........
            44........44444ee44444.....444..
            ....4e......44444444....44......
            .444eee.......4444...e..........
            .......4ee...........ee4.4......
            ......4444.......e...e...4......
            .............4ee.44..4..........
            ..............44....44..........
            ..............4.................
            `],
        100,
        true
        )
    } else if (powerUp.image.equals(img`
        . . . . d d d . . . . 
        . . c c 1 1 1 d d . . 
        . d d c d 1 1 d b b . 
        . . d b d 1 1 c b . . 
        . . . b d 1 1 c . . . 
        . . . b d 1 1 c . . . 
        . . . b d 1 1 c . . . 
        . . . b b 1 c c . . . 
        . . . . b . c . . . . 
        `)) {
        powerUpEffect = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............aaaa..............
            ......aaaaaaaaabbaaaaaaaaa......
            ......aaaaaabbbbbbbbaaaaaa......
            ........aaaaaabbbbaaaaaa........
            ..........aaaaabbaaaaa..........
            ............aaaaaaaa............
            ..............aaaa..............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.PowerEffect)
        animation.runImageAnimation(
        powerUpEffect,
        [img`
            ............b....bb.............
            ............b....b..............
            .......b....bb.b................
            .......cc...b.cbb..bb...........
            ..........bbc.bbc.b....b........
            ............bbccbb...bb.........
            ..bb...b....c..cc.a.ab.......b..
            .......c...cc.....ccc.ccabbbccb.
            bb.......a..................cb..
            ...bc..a..cc.........aa..aaabb..
            ..ba..........aaaa..............
            ......aaaaaaaaaccaaaaaaaaa......
            ..c...aaaaaaccccccccaaaaaa......
            ..b.....aaaaaaccccaaaaaa........
            bb........aaaaaccaaaaa.....aab..
            ....ac......aaaaaaaa....aa......
            .bbbccc.......aaaa...c..........
            .......bcc...........cca.b......
            ......bbbb.......c...c...b......
            .............aac.aa..b..........
            ..............bb....bb..........
            ..............b.................
            `,img`
            ............b.....b.............
            ................................
            .......b....b...................
            ............b......b..b.....b...
            .....b.....b......b.bbb....bbb..
            .....b......bbba....b.a.....b...
            ...............aa....ac.....bb..
            ...b..a.cc..c..a.cc.ccc.....b...
            b..bbaa.cc......................
            ...aca.a.cc..........aa..aa.bb..
            ...a..........aaca..........bb..
            ..ba..aaaaaaaaaccaaaaaaaaa...bb.
            ..b...aaaaccccccccccacccaa...b..
            ...a....aaaccaccccacccaa....a...
            bb.aa.....aaaccccacaaa.....a....
            ...aaa......aaccacca....aa......
            .bbbcc.ccc....aaaa...........b..
            .......acc............c..aaab...
            ......bb..a......c...caa..a.....
            ..bbb.b...bb.b.c.aa..bbbbb......
            ......b......bb...bbb....bb.....
            ..............bb.....bb.........
            `,img`
            ................................
            ...........bbb..................
            ...........cccc....b............
            ............bcc.b.bb............
            ....bb........bb...bbbbcb.b.....
            .....bb......bbcbbbbcbcc..b.....
            ......bbcbaaac.cc..ccccccbb...bb
            .bbb....ccc.cc.....ccca.aab.bbbb
            .bbbbca.cc..c.ccc..ac.ccccccc.b.
            ..cccca.cc....aaaaa.......ccc.b.
            bba...........aaaaaa.......ccb..
            .ba...aaaaaaaaacccaaaaacca...ccb
            baccccaaaaaaccccccccaaccaa..accc
            .ccccc..aaaaaaccccaaaaaa....ac..
            bbccc.cc..aaaccccaaaaa......bc..
            ...cc...cc..acccaaaa..c...ccccbb
            .bb.a.........aaaa....ccacccbbbb
            ....bcccc..cccc.....a..ccbb.....
            ....bb.a..cccccc.cc..bbb........
            ......bb.bc...ccaccb..bb........
            ..............bbcb.bb...........
            .................b..............
            `,img`
            ............b.....b.............
            ................................
            .......b....b...................
            ............b......b..b.....b...
            .....b.....b......b.bbb....bbb..
            .....b......bbba....b.b.....b...
            ...............ab....bc.....bb..
            ...b..b.cc..c..a.cc.ccc.....b...
            b..bbbb.cc......................
            ...bcb.a.cc..........aa..aa.bb..
            ...b..........aaca..........bb..
            ..bb..aaaaaaaaaccaaaaaaaaa...bb.
            ..b...aaaaccccccccccacccaa...b..
            ...b....aaaccaccccacccaa....b...
            bb.bb.....aaaccccacaaa.....a....
            ...bbb......aaccacca....aa......
            .bbbcc.ccc....aaaa...........b..
            .......bcc............c..abbb...
            ......bb..a......c...cab..b.....
            ..bbb.b...bb.bac.aa..bbbbb......
            ......b......bb...bbb....bb.....
            ..............bb.....bb.........
            `,img`
            ............b....bb.............
            ............b....b..............
            .......b....bb.b................
            .......cc...b.bbb..bb...........
            ..........bbc.bca.b....b........
            ............caccaa...ab.........
            ..bb...b....c..cc.a.aa.......b..
            .......c...cc.....ccc.ccbbbbccb.
            bb.......a..................cb..
            ...bc..a..cc.........aa..aaabb..
            ..bb..........aaaa..............
            ......aaaaaaaaaccaaaaaaaaa......
            ..c...aaaaaaccccccccaaaaaa......
            ..b.....aaaaaaccccaaaaaa........
            bb........aaaaaccaaaaa.....bbb..
            ....ac......aaaaaaaa....aa......
            .bbbccc.......aaaa...c..........
            .......acc...........cca.b......
            ......bbbb.......c...c...b......
            .............acc.aa..b..........
            ..............bb....bb..........
            ..............b.................
            `],
        100,
        true
        )
    } else if (powerUp.image.equals(img`
        . . b b b . . . . . . 
        . b 6 9 d b b . . . . 
        . b 8 6 9 1 6 b . . . 
        b 6 b b d 8 6 9 b . . 
        b d c 9 c c c 8 9 d . 
        . b c c b b c c c d b 
        . . b b c d d c c c b 
        . . . . . c c b c b b 
        . . . . . . . b b b . 
        `)) {
        powerUpEffect = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............9999..............
            ......99999999966999999999......
            ......99966666666666666699......
            ........9999666666669999........
            ..........999996699999..........
            ............99999999............
            ..............9999..............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.PowerEffect)
        animation.runImageAnimation(
        powerUpEffect,
        [img`
            ............9....99.............
            ............9....9..............
            .......9....99.9................
            .......88...9.899..99...........
            ..........998.998.9....9........
            ............996699...99.........
            ..99...9....6..66.6.69.......9..
            .......6...66.....888.886999889.
            99.......6..................89..
            ...98..6..66.........66..66699..
            ..96..........6666..............
            ......66666666688666666666......
            ..8...66666688888888666666......
            ..9.....6666668888666666........
            99........666668866666.....669..
            ....68......66666666....99......
            .999888.......6666...8..........
            .......966...........886.9......
            ......9999.......6...8...9......
            .............996.99..9..........
            ..............99....99..........
            ..............9.................
            `,img`
            ............9.....9.............
            ................................
            .......9....9...................
            ............9......9..9.....9...
            .....9.....9......9.999....999..
            .....9......9996....9.6.....9...
            ...............66....68.....99..
            ...9..6.88..8..6.88.888.....9...
            9..9966.88......................
            ...686.6.88..........66..66.99..
            ...6..........6686..........99..
            ..96..66666666688666666666...99.
            ..9...66668888888888688866...9..
            ...6....6668868888688866....6...
            99.66.....666888868666.....6....
            ...666......66886886....66......
            .99988.888....6666...........9..
            .......688............8..6669...
            ......99..6......8...866..6.....
            ..999.9...99.9.6.66..99999......
            ......9......99...999....99.....
            ..............99.....99.........
            `,img`
            ................................
            ...........999..................
            ...........9999....9............
            ............999.9.99............
            ....99........99...999999.9.....
            .....99......99699996998..9.....
            ......99699996.66..66888999...99
            .999....886.66.....6666.669.9999
            .999989.66..6.888..66.6666666.9.
            ..68889.66....66666.......666.9.
            999...........666666.......669..
            .99...66666666688866666886...669
            99688866666688888888668866..6666
            .66666..6666668888666666....66..
            99666.88..666888866666......96..
            ...66...88..68886666..8...666699
            .99.9.........6666....8866669999
            ....96666..6666.....6..8899.....
            ....99.9..666666.88..999........
            ......99.96...669889..99........
            ..............9999.99...........
            .................9..............
            `,img`
            ............9.....9.............
            ................................
            .......9....9...................
            ............9......9..9.....9...
            .....9.....9......9.999....999..
            .....9......9996....9.9.....9...
            ...............69....98.....99..
            ...9..9.88..8..6.88.888.....9...
            9..9999.88......................
            ...989.6.88..........66..66.99..
            ...9..........6686..........99..
            ..99..66666666688666666666...99.
            ..9...66668888888888688866...9..
            ...9....6668868888688866....9...
            99.99.....666888868666.....6....
            ...999......66886886....66......
            .99988.888....6666...........9..
            .......988............8..6999...
            ......99..6......8...869..9.....
            ..999.9...99.968.66..99999......
            ......9......99...999....99.....
            ..............99.....99.........
            `,img`
            ............9....99.............
            ............9....9..............
            .......9....99.9................
            .......88...9.999..99...........
            ..........998.986.9....9........
            ............868866...69.........
            ..99...9....8..88.6.66.......9..
            .......8...88.....888.889999889.
            99.......6..................89..
            ...98..6..88.........66..66699..
            ..99..........6666..............
            ......66666666688666666666......
            ..8...66666688888888666666......
            ..9.....6666668888666666........
            99........666668866666.....999..
            ....68......66666666....66......
            .999888.......6666...8..........
            .......688...........886.9......
            ......9999.......8...8...9......
            .............688.66..9..........
            ..............99....99..........
            ..............9.................
            `],
        100,
        true
        )
    } else if (powerUp.image.equals(img`
        . . . . . . . . c . . 
        . c . . e . c c . . . 
        . . c c b b c c . . . 
        . . c b 5 4 b . . . . 
        . c e c 4 5 b e . . . 
        . . e a c b c . . . . 
        . . a e e c c . . . . 
        . c . . c . . c . . . 
        . . . . . . . . . . . 
        `)) {
        powerUpEffect = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............2222..............
            ......222222222ee222222222......
            ......222222eeeeeeee222222......
            ........222222eeee222222........
            ..........22222ee22222..........
            ............22222222............
            ..............2222..............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.PowerEffect)
        animation.runImageAnimation(
        powerUpEffect,
        [img`
            ............2....22.............
            ............2....2..............
            .......2....22.2................
            .......22...2.222..22...........
            ..........222.222.2....2........
            ............222e22...22.........
            ..22...2....2..ee.2.22.......2..
            .......e...22.....eee.ee2222222.
            22.......e..................22..
            ...2e..e..ee.........22..22222..
            ..22..........2222..............
            ......222222222ee222222222......
            ..e...222222eeeeeeee222222......
            ..2.....222222eeee222222........
            22........22222ee22222.....222..
            ....2e......22222222....ee......
            .222eee.......2222...e..........
            .......2ee...........ee2.2......
            ......2222.......e...e...2......
            .............22e.22..2..........
            ..............22....22..........
            ..............2.................
            `,img`
            ............2.....2.............
            ................................
            .......2....2...................
            ............2......2..2.....2...
            .....2.....2......2.222....222..
            .....2......2222....2.2.....2...
            ...............22....2e.....22..
            ...2..2.ee..e..2.ee.eee.....2...
            2..2222.ee......................
            ...2e2.2.ee..........ee..ee.22..
            ...2..........22e2..........22..
            ..22..222222222ee222222222...22.
            ..2...2222eeeeeeeeee2eee22...2..
            ...2....222ee2eeee2eee22....2...
            22.22.....222eeee2e222.....e....
            ...222......22ee2ee2....ee......
            .222ee.eee....2222...........2..
            .......2ee............e..2222...
            ......22..2......e...e22..2.....
            ..222.2...22.2.e.22..22222......
            ......2......22...222....22.....
            ..............22.....22.........
            `,img`
            ................................
            ...........222..................
            ...........2222....2............
            ............222.2.22............
            ....22........22...2222e2.2.....
            .....22......22e2222e2ee..2.....
            ......22e2222e.ee..eeeeee22...22
            .222....eee.ee.....eee2.222.2222
            .22222e.ee..e.eee..2e.eeeeeee.2.
            ..2222e.ee....22222.......eee.2.
            22e...........222222.......ee2..
            .2e...222222222eee2222222e...222
            222222222222eeeeeeee2222ee..e222
            .22222..222222eeee222222....e2..
            22222.ee..222eeee22222......22..
            ...22...ee..2eee2222..2...222222
            .22.2.........2222....22e2222222
            ....22222..2222.....e..2222.....
            ....22.2..222222.22..222........
            ......22.22...222222..22........
            ..............2222.22...........
            .................2..............
            `,img`
            ............2.....2.............
            ................................
            .......2....2...................
            ............2......2..2.....2...
            .....2.....2......2.222....222..
            .....2......2222....2.2.....2...
            ...............22....2e.....22..
            ...2..2.ee..e..2.ee.eee.....2...
            2..2222.ee......................
            ...2e2.2.ee..........22..22.22..
            ...2..........22e2..........22..
            ..22..222222222ee222222222...22.
            ..2...2222eeeeeeeeee2eee22...2..
            ...2....222ee2eeee2eee22....2...
            22.22.....222eeee2e222.....2....
            ...222......22ee2ee2....22......
            .222ee.eee....2222...........2..
            .......2ee............e..2222...
            ......22..2......e...e22..2.....
            ..222.2...22.22e.22..22222......
            ......2......22...222....22.....
            ..............22.....22.........
            `,img`
            ............2....22.............
            ............2....2..............
            .......2....22.2................
            .......ee...2.222..22...........
            ..........22e.2e2.2....2........
            ............e2ee22...22.........
            ..22...2....e..ee.2.22.......2..
            .......e...ee.....eee.ee2222222.
            22.......2..................22..
            ...2e..2..ee.........22..eee22..
            ..22..........2222..............
            ......222222222ee222222222......
            ..e...222222eeeeeeee222222......
            ..2.....222222eeee222222........
            22........22222ee22222.....222..
            ....2e......22222222....22......
            .222eee.......2222...e..........
            .......2ee...........ee2.2......
            ......2222.......e...e...2......
            .............2ee.22..2..........
            ..............22....22..........
            ..............2.................
            `],
        100,
        true
        )
    }
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    powerUpEffect.setPosition(viking.x, viking.y)
    powerUpEffect.follow(viking, 500)
}
function enteringAirspaceSplash (lvl: number) {
    if (lvl == 1) {
        openingSplash = textsprite.create("WARNING!!!", 0, 5)
        openingSplash.lifespan = 5000
        openingSplash.setPosition(80, 16)
        scaling.scaleToPercent(openingSplash, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        openingSplash = textsprite.create("ENTERING", 0, 1)
        openingSplash.lifespan = 5000
        openingSplash.setPosition(80, 30)
        openingSplash = textsprite.create("PROTOSS", 0, 9)
        openingSplash.lifespan = 5000
        openingSplash.setPosition(80, 44)
        scaling.scaleToPercent(openingSplash, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        openingSplash = textsprite.create("AIRSPACE", 0, 1)
        openingSplash.lifespan = 5000
        openingSplash.setPosition(80, 58)
    } else if (lvl == 2) {
    	
    } else if (lvl == 3) {
    	
    }
}
function createRocketTrails () {
    for (let value of sprites.allOfKind(SpriteKind.Rocket)) {
        thrusterFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
        thrusterFire.setVelocity(randint(-20, 20), 10)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = randint(10, 30)
    }
}
function loadMapAssets () {
    backdrops = [img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
        ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffeffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff5ffffffffffff9fffefffffffff1ffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffbfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff1fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffff1fff
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
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
        fffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
        ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1fffffffffffffff9fffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffff
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
    edgeSprite = sprites.create(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.Edge)
    edgeSprite.y = 161
    edgeSprite = sprites.create(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.Edge)
    edgeSprite.y = -8
}
function createShield (cause: boolean) {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        shieldSprite = sprites.create(playerCombatAssets[4], SpriteKind.Shield)
        shieldSprite.setPosition(value.x, value.y)
        shieldSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        shieldSprite.follow(value, 400)
        invulnerable = true
        if (cause == notCausedByBomb) {
            shieldSprite.lifespan = 4000
            animation.runImageAnimation(
            shieldSprite,
            [img`
                ..............................
                .........955555111115.........
                .......5591111111111955.......
                ......515515555555519515......
                .....51115155555555191115.....
                ....4115111111111111115115....
                ...51155151555555511515511e...
                ..51155515551111115551555114..
                .e11155515111dddd111511511114.
                5555511151155.dd.dd11511159955
                5111155511555.dd.ddd1155511115
                51d1911115555....dddd111915515
                51d1915555555....dddddd1915515
                51d1115555.55....dd.ddd1111515
                51151d..................191515
                e1151....................91515
                511511d................1191515
                515191ddd............dd1911515
                515191111............1d1915515
                511115551............111911115
                5555511511..........1511155555
                .1111115991........1511511115.
                ..111d1119111dddd11551555511..
                ...111551995111111515155511...
                ....1115111155555111115111....
                .....51119111111115151115.....
                ......515915555555519914......
                .......9991111111111594.......
                ........95555555444e5.........
                ..............................
                `,img`
                ..............................
                .........951111111115.........
                .......5691555555555955.......
                ......116155555555559111......
                ....5555111555555551115111....
                ....5155551151111555155551....
                ...515555511115555111555511...
                ..51555555151111111111555511..
                .155555551111dddd111115555511.
                15115555111dd.dd.5511155111114
                5515111111ddd.dd.5551111111554
                11d555111dddd....5555111115555
                1ddd91ddddddd....5555551555555
                1dd111dddd.dd....55.5551515555
                1dd51d..................195555
                1d111...................195555
                5151115................1195515
                555111555............dd1155555
                155591111............1d5555555
                115511111............155115155
                5111111511..........1111111115
                .11111d5511........1115555511.
                .551551155111dddd11511555555..
                ..5155551555111111111155555...
                ....1555511111111111515555....
                .....51551151555555155155.....
                ......515115555555551554......
                .......9111555555555514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5691111111111955.......
                ......115111111155515155......
                ....555d551155555551111551....
                ....51111155555555111d1115....
                ...51555515555555515dddd155...
                ..515555515511111115d1dd1155..
                .151555551d11dddd111ddddd1155.
                1515555511ddd.dd.551dddddd1554
                5515555115ddd.dd.5551dddd115d4
                551155111dddd....5555111115d15
                1551111dddddd....555555115dd15
                115551dddd.dd....55.55515ddd15
                11155555................1ddd15
                15551...................1ddd15
                515551d................11ddd15
                555511ddd............dd15ddd15
                155591111............1d5555d15
                155511511............155555555
                5551155511..........1111555115
                .1115515511........1155555111.
                .55551d155111dddd11515555115..
                ..551ddd1555111111115555115...
                ....1ddd15555555555155551d....
                .....51d15155555555155111.....
                ......515515555555515554......
                .......9151111111111514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........951111111115.........
                .......5691ddddddddd955.......
                ......1161dddddddddd9111......
                ....5555111dddddddd1115111....
                ....51555511d1111ddd155551....
                ...515555511115555111555511...
                ..51555555151111111111555511..
                .155555551111dddd111115555511.
                1511555511155.dd.dd11155111114
                5515111111555.dd.ddd1111111554
                11d5551115555....dddd111115555
                1ddd915555555....dddddd1555555
                1dd1115555.55....dd.ddd1515555
                1dd51d..................195555
                1d111...................195555
                51d111d................1195515
                5dd111ddd............551155555
                1ddd91111............155555555
                11dd11111............155115155
                5111111511..........1111111115
                .11111d5511........111ddddd11.
                .551dd1155111555511511dddddd..
                ..51dddd15551111111111ddddd...
                ....1dddd1111111111151dddd....
                .....51dd11515555551551d5.....
                ......515115555555551554......
                .......9111555555555514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........511111111159.........
                .......559ddddddddd1965.......
                ......1119dddddddddd1611......
                ....1115111dddddddd1115555....
                ....155551ddd1111d11555515....
                ...115555111555511115555515...
                ..11555511111111115155555515..
                .115555511111dddd111155555551.
                4111115511155.dd.5511155551151
                4551111111555.dd.5551111115155
                5555111115555....5555111555511
                5555551555555....5555555195551
                5555151555.55....55.5555111551
                555591..................d15551
                555591...................11151
                5155911................d111515
                5555511dd............ddd111555
                5555555d1............111195551
                551511551............111115511
                5111111111..........1151111115
                .1155555111........1155d11111.
                ..55555511511dddd111551155155.
                ...5555511111111115551555515..
                ....5555151111111111155551....
                .....55155155555515115515.....
                ......455155555555511515......
                .......4155555555551119.......
                .........5444445555551........
                ..............................
                `,img`
                ..............................
                .........951111111115.........
                .......5691555555555955.......
                ......116155555555559111......
                ....555511155555555111d111....
                ....51555511511115551dddd1....
                ...515555511115555111dddd11...
                ..51555555151111111111dddd11..
                .155555551111dddd11111ddddd11.
                1511555511155.dd.55111dd111114
                5515111111555.dd.5551111111554
                1155551115555....5555111115555
                1555915555555....5555551555555
                1551115555.55....55.5551515555
                15551d..................195555
                15111...................195555
                515111d................1195515
                555111ddd............dd1155555
                155591111............1d5555555
                115511111............155115155
                5111111511..........1111111115
                .11111d5511........1115555511.
                .551551155111dddd11511555555..
                ..5155551555111111111155555...
                ....1555511111111111515555....
                .....515511d1dddddd155155.....
                ......51511ddddddddd1554......
                .......9111ddddddddd514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5691111111111955.......
                ......115111111155515155......
                ....555d551155555551111551....
                ....51111155555555111d1115....
                ...51555515555555515dddd155...
                ..515555515511111115d1dd1155..
                .151555551511dddd111ddddd1155.
                1515555511555.dd.551dddddd1554
                5515555115555.dd.5551dddd115d4
                5511551115555....5555111115515
                1551111555555....5555551155515
                1155515555.55....55.5551555515
                11155555................155515
                15555...................155515
                5155515................1155515
                555511555............dd1555515
                155591111............1d5555515
                155511511............155555555
                5551155511..........1111555115
                .1115515511........1155555111.
                .55551d555111555511515555115..
                ..551ddd1555111111115555115...
                ....1ddd15555555555155551d....
                .....51d15155555555155111.....
                ......515515555555515554......
                .......9151111111111514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5691111111111955.......
                ......115155555555515115......
                ....5555555555555551111151....
                ....5155511555555551155551....
                ...515555155555555155555551...
                ..51555551551111111555555551..
                .1515555515115555115555555515.
                1515555551555.55.5515555555154
                5515555515555.55.55515555551d4
                5511555115555....5555155515515
                1111111555555....5555555555515
                1511115555.55....55.5551555515
                15511111................155515
                15551...................155515
                5155515................1155515
                555511555............551555515
                155591111............155515515
                155511511............111511115
                5551111111..........1111555115
                .1111555111........1155555111.
                .551555551111555511515555115..
                ..5555555515111111115555115...
                ....1555551555555551555515....
                .....51555155555555155111.....
                ......515515555555515554......
                .......9151111111111514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5991111111111955.......
                ......119115555555515155......
                ....5555591555555551111551....
                ....5155595555555551151115....
                ...515555955555555555555155...
                ..51555559551111111551551155..
                .151555551511dddd111555551155.
                1515555551555.dd.5515555551559
                5515555515555.dd.5551555519959
                5515555115555....5555111999515
                9991111555555....5555551955555
                1199995555.55....55.5551555555
                11155995................155555
                15551...................155515
                5555515................1155555
                555551555............551555555
                155551111............159555555
                155555511............155599555
                5555595511..........1155555115
                .1559515511........1155555511.
                .559515555111555511515555515..
                ..5515555115555555115555555...
                ....1555515555555551555555....
                .....51511555555555155111.....
                ......515155555555515554......
                .......9115555555551514.......
                ........1555555999995.........
                ..............................
                `],
            200,
            true
            )
        } else {
            shieldSprite.lifespan = 6000
            animation.runImageAnimation(
            shieldSprite,
            [img`
                ..............................
                .........955555111115.........
                .......5591111111111955.......
                ......515515555555519515......
                .....51115155555555191115.....
                ....4115111111111111115115....
                ...51155151555555511515511e...
                ..51155515551111115551555114..
                .e11155515111dddd111511511114.
                5555511151155.dd.dd11511159955
                5111155511555.dd.ddd1155511115
                51d1911115555....dddd111915515
                51d1915555555....dddddd1915515
                51d1115555.55....dd.ddd1111515
                51151d..................191515
                e1151....................91515
                511511d................1191515
                515191ddd............dd1911515
                515191111............1d1915515
                511115551............111911115
                5555511511..........1511155555
                .1111115991........1511511115.
                ..111d1119111dddd11551555511..
                ...111551995111111515155511...
                ....1115111155555111115111....
                .....51119111111115151115.....
                ......515915555555519914......
                .......9991111111111594.......
                ........95555555444e5.........
                ..............................
                `,img`
                ..............................
                .........951111111115.........
                .......5691555555555955.......
                ......116155555555559111......
                ....5555111555555551115111....
                ....5155551151111555155551....
                ...515555511115555111555511...
                ..51555555151111111111555511..
                .155555551111dddd111115555511.
                15115555111dd.dd.5511155111114
                5515111111ddd.dd.5551111111554
                11d555111dddd....5555111115555
                1ddd91ddddddd....5555551555555
                1dd111dddd.dd....55.5551515555
                1dd51d..................195555
                1d111...................195555
                5151115................1195515
                555111555............dd1155555
                155591111............1d5555555
                115511111............155115155
                5111111511..........1111111115
                .11111d5511........1115555511.
                .551551155111dddd11511555555..
                ..5155551555111111111155555...
                ....1555511111111111515555....
                .....51551151555555155155.....
                ......515115555555551554......
                .......9111555555555514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5691111111111955.......
                ......115111111155515155......
                ....555d551155555551111551....
                ....51111155555555111d1115....
                ...51555515555555515dddd155...
                ..515555515511111115d1dd1155..
                .151555551d11dddd111ddddd1155.
                1515555511ddd.dd.551dddddd1554
                5515555115ddd.dd.5551dddd115d4
                551155111dddd....5555111115d15
                1551111dddddd....555555115dd15
                115551dddd.dd....55.55515ddd15
                11155555................1ddd15
                15551...................1ddd15
                515551d................11ddd15
                555511ddd............dd15ddd15
                155591111............1d5555d15
                155511511............155555555
                5551155511..........1111555115
                .1115515511........1155555111.
                .55551d155111dddd11515555115..
                ..551ddd1555111111115555115...
                ....1ddd15555555555155551d....
                .....51d15155555555155111.....
                ......515515555555515554......
                .......9151111111111514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........951111111115.........
                .......5691ddddddddd955.......
                ......1161dddddddddd9111......
                ....5555111dddddddd1115111....
                ....51555511d1111ddd155551....
                ...515555511115555111555511...
                ..51555555151111111111555511..
                .155555551111dddd111115555511.
                1511555511155.dd.dd11155111114
                5515111111555.dd.ddd1111111554
                11d5551115555....dddd111115555
                1ddd915555555....dddddd1555555
                1dd1115555.55....dd.ddd1515555
                1dd51d..................195555
                1d111...................195555
                51d111d................1195515
                5dd111ddd............551155555
                1ddd91111............155555555
                11dd11111............155115155
                5111111511..........1111111115
                .11111d5511........111ddddd11.
                .551dd1155111555511511dddddd..
                ..51dddd15551111111111ddddd...
                ....1dddd1111111111151dddd....
                .....51dd11515555551551d5.....
                ......515115555555551554......
                .......9111555555555514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........511111111159.........
                .......559ddddddddd1965.......
                ......1119dddddddddd1611......
                ....1115111dddddddd1115555....
                ....155551ddd1111d11555515....
                ...115555111555511115555515...
                ..11555511111111115155555515..
                .115555511111dddd111155555551.
                4111115511155.dd.5511155551151
                4551111111555.dd.5551111115155
                5555111115555....5555111555511
                5555551555555....5555555195551
                5555151555.55....55.5555111551
                555591..................d15551
                555591...................11151
                5155911................d111515
                5555511dd............ddd111555
                5555555d1............111195551
                551511551............111115511
                5111111111..........1151111115
                .1155555111........1155d11111.
                ..55555511511dddd111551155155.
                ...5555511111111115551555515..
                ....5555151111111111155551....
                .....55155155555515115515.....
                ......455155555555511515......
                .......4155555555551119.......
                .........5444445555551........
                ..............................
                `,img`
                ..............................
                .........951111111115.........
                .......5691555555555955.......
                ......116155555555559111......
                ....555511155555555111d111....
                ....51555511511115551dddd1....
                ...515555511115555111dddd11...
                ..51555555151111111111dddd11..
                .155555551111dddd11111ddddd11.
                1511555511155.dd.55111dd111114
                5515111111555.dd.5551111111554
                1155551115555....5555111115555
                1555915555555....5555551555555
                1551115555.55....55.5551515555
                15551d..................195555
                15111...................195555
                515111d................1195515
                555111ddd............dd1155555
                155591111............1d5555555
                115511111............155115155
                5111111511..........1111111115
                .11111d5511........1115555511.
                .551551155111dddd11511555555..
                ..5155551555111111111155555...
                ....1555511111111111515555....
                .....515511d1dddddd155155.....
                ......51511ddddddddd1554......
                .......9111ddddddddd514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5691111111111955.......
                ......115111111155515155......
                ....555d551155555551111551....
                ....51111155555555111d1115....
                ...51555515555555515dddd155...
                ..515555515511111115d1dd1155..
                .151555551511dddd111ddddd1155.
                1515555511555.dd.551dddddd1554
                5515555115555.dd.5551dddd115d4
                5511551115555....5555111115515
                1551111555555....5555551155515
                1155515555.55....55.5551555515
                11155555................155515
                15555...................155515
                5155515................1155515
                555511555............dd1555515
                155591111............1d5555515
                155511511............155555555
                5551155511..........1111555115
                .1115515511........1155555111.
                .55551d555111555511515555115..
                ..551ddd1555111111115555115...
                ....1ddd15555555555155551d....
                .....51d15155555555155111.....
                ......515515555555515554......
                .......9151111111111514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5691111111111955.......
                ......115155555555515115......
                ....5555555555555551111151....
                ....5155511555555551155551....
                ...515555155555555155555551...
                ..51555551551111111555555551..
                .1515555515115555115555555515.
                1515555551555.55.5515555555154
                5515555515555.55.55515555551d4
                5511555115555....5555155515515
                1111111555555....5555555555515
                1511115555.55....55.5551555515
                15511111................155515
                15551...................155515
                5155515................1155515
                555511555............551555515
                155591111............155515515
                155511511............111511115
                5551111111..........1111555115
                .1111555111........1155555111.
                .551555551111555511515555115..
                ..5555555515111111115555115...
                ....1555551555555551555515....
                .....51555155555555155111.....
                ......515515555555515554......
                .......9151111111111514.......
                ........1555555444445.........
                ..............................
                `,img`
                ..............................
                .........955555555515.........
                .......5991111111111955.......
                ......119115555555515155......
                ....5555591555555551111551....
                ....5155595555555551151115....
                ...515555955555555555555155...
                ..51555559551111111551551155..
                .151555551511dddd111555551155.
                1515555551555.dd.5515555551559
                5515555515555.dd.5551555519959
                5515555115555....5555111999515
                9991111555555....5555551955555
                1199995555.55....55.5551555555
                11155995................155555
                15551...................155515
                5555515................1155555
                555551555............551555555
                155551111............159555555
                155555511............155599555
                5555595511..........1155555115
                .1559515511........1155555511.
                .559515555111555511515555515..
                ..5515555115555555115555555...
                ....1555515555555551555555....
                .....51511555555555155111.....
                ......515155555555515554......
                .......9115555555551514.......
                ........1555555999995.........
                ..............................
                `],
            200,
            true
            )
        }
    }
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.MissilePickup, randint(3000, 7000), function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(3, 6))
})
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
sprites.onOverlap(SpriteKind.Rocket, SpriteKind.Edge, function (sprite, otherSprite) {
    blastSequence(sprite, otherSprite, currentStage)
    addPoints(otherSprite)
})
function sideBlast (x: number, y: number, lvl: number) {
    if (lvl == 1) {
        effectColorSelector = 1
    } else if (lvl == 2) {
        effectColorSelector = 2
    } else if (lvl == 3) {
        effectColorSelector = 0
    }
    for (let index = 0; index < 3; index++) {
        blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(-10, -40), randint(-10, -40))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(120, 240)
    }
    for (let index = 0; index < 3; index++) {
        blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
        blastFire.setVelocity(randint(10, 40), randint(-10, -40))
        blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
        blastFire.lifespan = randint(120, 240)
    }
    timer.after(50, function () {
        for (let index = 0; index < 3; index++) {
            blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
            blastFire.setVelocity(randint(-10, -40), randint(-10, -40))
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
        for (let index = 0; index < 3; index++) {
            blastFire = sprites.create(particles2[colorPaths[effectColorSelector]._pickRandom()], SpriteKind.Effect)
            blastFire.setVelocity(randint(10, 40), randint(-10, -40))
            blastFire.setPosition(x + randint(-2, 2), y + randint(-2, 2))
            blastFire.lifespan = randint(80, 150)
        }
    })
}
sprites.onOverlap(SpriteKind.DroneRocket, SpriteKind.BasicEnemy, function (sprite, otherSprite) {
    blastSequence(sprite, otherSprite, currentStage)
    spawnLoot(otherSprite, otherSprite, powerupsRemaining)
    addPoints(otherSprite)
})
function createBombMax () {
    textSprite = textsprite.create("MAX:", 0, 1)
    textSprite.setKind(SpriteKind.MenuUI)
    textSprite.setPosition(15, 63)
    textSprite.lifespan = 1000
    demoAsset = sprites.create(supportAssets[1], SpriteKind.MenuUI)
    scaling.scaleToPercent(demoAsset, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    demoAsset.setPosition(15, 76)
    demoAsset.setFlag(SpriteFlag.GhostThroughWalls, true)
    demoAsset.lifespan = 1000
    demoAsset = sprites.create(gameUIAssets[0], SpriteKind.MenuUI)
    scaling.scaleToPercent(demoAsset, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    demoAsset.setPosition(15, 88)
    demoAsset.setFlag(SpriteFlag.GhostThroughWalls, true)
    demoAsset.lifespan = 1000
}
function createPlasmaTrails () {
    for (let value of sprites.allOfKind(SpriteKind.Plasma)) {
        thrusterFire = sprites.create(particles2[colorPaths[plasmaColor]._pickRandom()], SpriteKind.Effect)
        thrusterFire.setVelocity(randint(-10, 10), 10)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = randint(200, 300)
    }
}
function createVikingThrusterTrail () {
    for (let value of sprites.allOfKind(SpriteKind.Viking)) {
        if (value.vx == 0) {
            thrusterEffectOffset = thrusterOffset
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[colorPaths[terranColor]._pickRandom()], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-20, 20), 75)
                thrusterFire.lifespan = randint(30, 100)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        } else if (value.vx > 0) {
            thrusterFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            thrusterFire.setVelocity(randint(-20, 20), 75)
            thrusterFire.lifespan = randint(20, 60)
            thrusterFire.setPosition(value.x - thrusterEffectOffset, value.y + 5)
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[colorPaths[terranColor]._pickRandom()], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-20, 30), 75)
                thrusterFire.lifespan = randint(20, 60)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        } else if (value.vx < 0) {
            thrusterFire = sprites.create(particles2[colorPaths[fireColor]._pickRandom()], SpriteKind.Effect)
            thrusterFire.setVelocity(randint(-20, 20), 75)
            thrusterFire.lifespan = randint(20, 60)
            thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
            for (let index = 0; index < 2; index++) {
                thrusterFire = sprites.create(particles2[colorPaths[terranColor]._pickRandom()], SpriteKind.Effect)
                thrusterFire.setVelocity(randint(-30, 20), 75)
                thrusterFire.lifespan = randint(20, 60)
                thrusterFire.setPosition(value.x + thrusterEffectOffset, value.y + 5)
                thrusterEffectOffset = thrusterEffectOffset * -1
            }
        }
    }
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.DronePickup, randint(3000, 7000), function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(3, 6))
})
sprites.onOverlap(SpriteKind.Rocket, SpriteKind.BasicEnemy, function (sprite, otherSprite) {
    blastSequence(sprite, otherSprite, currentStage)
    spawnLoot(otherSprite, otherSprite, powerupsRemaining)
    addPoints(otherSprite)
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
        thrusterFire.lifespan = randint(20, 40)
    }
}
sprites.onOverlap(SpriteKind.DroneRocket, SpriteKind.Edge, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
sprites.onDestroyed(SpriteKind.BombPickup, function (sprite) {
    spawnPowerUp(sprite)
    radialBlast(sprite.x, sprite.x, 2)
})
function mapSequence (lvl: number) {
    scene.setBackgroundImage(backdrops._pickRandom())
    if (playing == false) {
        initializePlayer()
        enteringAirspaceSplash(lvl)
        if (difficulty == 0) {
            powerupsRemaining = 12
        } else if (difficulty == 1) {
            powerupsRemaining = 9
        } else if (difficulty == 2) {
            powerupsRemaining = 6
        } else if (difficulty == 3) {
            powerupsRemaining = 3
        }
    }
}
function radialBlast (x: number, y: number, lvl: number) {
    frontBlast(x, y, lvl)
    sideBlast(x, y, lvl)
    backBlast(x, y, lvl)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playing) {
        createMenuContent()
    } else if (!(playing)) {
        enterSettings(currentSettings, entries)
    }
})
function spawnPowerUp (params: Sprite) {
    powerupSprite = sprites.create(supportAssets._pickRandom(), SpriteKind.Effect)
    if (powerupSprite.image.equals(supportAssets[0])) {
        powerupSprite.setKind(SpriteKind.MissilePickup)
    } else if (powerupSprite.image.equals(supportAssets[2])) {
        powerupSprite.setKind(SpriteKind.PlasmaPickup)
    } else if (powerupSprite.image.equals(supportAssets[1])) {
        powerupSprite.setKind(SpriteKind.BombPickup)
    } else if (powerupSprite.image.equals(supportAssets[3])) {
        powerupSprite.setKind(SpriteKind.DronePickup)
    }
    powerupSprite.setPosition(params.x, params.y)
}
function createDroneRocketTrails () {
    for (let value of sprites.allOfKind(SpriteKind.DroneRocket)) {
        thrusterFire = sprites.create(particles2[colorPaths[droneMissileColor]._pickRandom()], SpriteKind.Effect)
        thrusterFire.setVelocity(randint(-2, 2), 5)
        thrusterFire.setPosition(value.x, value.y)
        thrusterFire.lifespan = randint(80, 140)
    }
}
sprites.onCreated(SpriteKind.PowerEffect, function (sprite) {
    sprite.lifespan = 1500
})
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
        .........955555111115.........
        .......5591111111111955.......
        ......51551dddddddd19515......
        .....511151dddddddd191115.....
        ....411d11111111111111d115....
        ...511dd15155555551151dd11e...
        ..511ddd15551111115551ddd114..
        .e111ddd15111dddd111511d11114.
        55555111511dd.dd.dd11511159955
        5111155511ddd.dd.ddd1155511115
        51d191111dddd....dddd11191dd15
        51d191ddddddd....dddddd191dd15
        51d111dddd.dd....dd.ddd1111d15
        51151d..................191d15
        e1151....................91d15
        511511d................1191d15
        51d191ddd............dd1911d15
        51d191111............1d191dd15
        511115551............111911115
        5555511511..........1511155555
        .1111115991........1511d11115.
        ..111d1119111dddd11551dddd11..
        ...111dd19951111115151ddd11...
        ....111d11115555511111d111....
        .....5111911111111d151115.....
        ......51591dddddddd19914......
        .......9991111111111594.......
        ........95555555444e5.........
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
sprites.onCreated(SpriteKind.DronePickup, function (sprite) {
    spriteutils.moveToAtSpeed(sprite, spriteutils.pos(randint(5, 155), randint(5, 115)), randint(2, 8))
})
function addPoints (bounty: Sprite) {
    if (bounty.kind() == SpriteKind.BasicEnemy) {
        currentScore += pointValues[1]
    } else if (bounty.kind() == SpriteKind.Miniboss) {
        currentScore += pointValues[2]
    } else if (bounty.kind() == SpriteKind.Boss) {
        currentScore += pointValues[3]
    } else if (bounty.kind() == SpriteKind.DronePickup) {
        currentScore += pointValues[0]
        if (droneTotal < 2) {
            droneTotal += 1
        }
    } else if (bounty.kind() == SpriteKind.MissilePickup) {
        currentScore += pointValues[0]
        if (weapon <= 0) {
            weapon = 1
        } else if (weapon > 0) {
            weapon = 2
        }
    } else if (bounty.kind() == SpriteKind.PlasmaPickup) {
        currentScore += pointValues[0]
        if (weapon >= 0) {
            weapon = -1
        } else if (weapon < 0) {
            weapon = -2
        }
    }
    bounty.setKind(SpriteKind.Effect)
    sprites.destroy(bounty)
}
function initializeTemp () {
    invulnerable = false
    playerX = 0
    playerY = 0
    weapon = 0
    spawnOffset = 0
    droneTotal = 0
    currentStage = 0
    currentLevel = 0
    scoreTotal = 0
    sessionHighScore = 0
    bombTotal = 0
    previousStage = 0
    playing = false
    overlappingExit = false
    difficulty = 0
    powerupsRemaining = 0
    currentAngle = 0
    // 0 - difficulty (0-3)
    // 1 - prompt confirm restart (bool)
    // 2 - intro splash (bool)
    currentSettings = [0, 0, 0]
    // 0 - default name
    // enforce =<12char for UI
    entries = ["unknown"]
    cameraTerminus = []
    // default is home
    cameraOrigin = [menuCoordinateX[0], menuCoordinateY[0]]
    viewingEasterEgg = false
    viewingLeaderboard = false
    isCameraMoving = false
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
    sprite.lifespan = enemyProjectileLifespan
})
function createBombHelp () {
    demoAsset = sprites.create(supportAssets[1], SpriteKind.MenuUI)
    demoAsset.setPosition(15, 48)
    demoAsset.setFlag(SpriteFlag.GhostThroughWalls, true)
    demoAsset.lifespan = 1000
    textSprite = textsprite.create("BOMB", 0, 1)
    textSprite.setKind(SpriteKind.MenuUI)
    textSprite.setPosition(15, 56)
    textSprite.lifespan = 1000
}
function createSpaceDust (lvl: number) {
    if (currentStage > 0) {
        if (Math.percentChance(1)) {
            stardustSprite = sprites.create(particles2[colorPaths[starColor]._pickRandom()], SpriteKind.BackgroundElement)
            stardustSprite.setPosition(randint(0, 160), 0)
            stardustSprite.vy = randint(10, 30)
            stardustSprite.lifespan = 15000
        }
        if (Math.percentChance(3)) {
            stardustSprite = sprites.create(particles2[colorPaths[starColor]._pickRandom()], SpriteKind.BackgroundElement)
            stardustSprite.setPosition(randint(0, 160), 0)
            stardustSprite.vy = randint(1, 10)
            stardustSprite.lifespan = 25000
        }
        if (Math.percentChance(3)) {
            stardustSprite = sprites.create(particles2[colorPaths[starColor]._pickRandom()], SpriteKind.BackgroundElement)
            stardustSprite.setPosition(randint(0, 160), 0)
            stardustSprite.vy = randint(20, 60)
            stardustSprite.lifespan = 5000
        }
        if (Math.percentChance(3)) {
            stardustSprite = sprites.create(particles2[colorPaths[starColor]._pickRandom()], SpriteKind.BackgroundElement)
            stardustSprite.setPosition(randint(0, 160), 0)
            stardustSprite.vy = randint(10, 15)
            stardustSprite.lifespan = 25000
        }
    }
}
function createDroneHelp () {
    demoAsset = sprites.create(supportAssets[3], SpriteKind.MenuUI)
    demoAsset.setPosition(145, 48)
    demoAsset.setFlag(SpriteFlag.GhostThroughWalls, true)
    demoAsset.lifespan = 1000
    textSprite = textsprite.create("FREN", 0, 1)
    textSprite.setKind(SpriteKind.MenuUI)
    textSprite.setPosition(145, 56)
    textSprite.lifespan = 1000
}
function loadGameAssets () {
    // 0 - missile powerup
    // 1 - bomb powerup
    // 2 - plasma powerup
    // 3 - drone powerup
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
    [5, 6],
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
    // 14 - black-20
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
    // 0 - infinity
    // 1 - score text
    // 2 - cursor
    // 3 - toggle (true)
    // 4 - toggle (false)
    // 5 - toggle highlight
    gameUIAssets = [
    img`
        ....555........555555...
        ..5577755.....557777755.
        .577777775...57777777775
        .57777777755577775555775
        67766666677777766...6676
        676.....66777766.....676
        878......877788......876
        878.....88777788....8876
        877888888777777788888776
        .87777777778877777777776
        .88777777788.67777777788
        ..888777888...667777888.
        ....8888........88888...
        `,
    img`
        5 5 5 . 5 5 5 . 5 5 5 . 5 5 5 . 5 5 5 
        5 . . . 5 . . . 5 . 5 . 5 . 5 . 5 . . 
        5 5 5 . 5 . . . 5 . 5 . 5 5 . . 5 5 . 
        . . 5 . 5 . . . 5 . 5 . 5 . 5 . 5 . . 
        5 5 5 . 5 5 5 . 5 5 5 . 5 . 5 . 5 5 5 
        `,
    img`
        b b b b . . . . . . . . . . 
        b 1 1 b b b b b . . . . . . 
        b 1 1 1 1 1 1 b b b b b . . 
        c b 1 1 1 1 1 1 1 1 1 b b b 
        . b 1 1 1 1 1 1 1 1 1 1 b c 
        . b 1 1 1 1 1 1 1 1 1 b c . 
        . c b 1 1 1 1 1 1 1 b c . . 
        . . b 1 1 1 1 1 1 b b . . . 
        . . b 1 1 1 1 1 1 1 b b . . 
        . . b b 1 1 1 b 1 1 1 b b . 
        . . c b 1 1 b b b 1 1 1 b b 
        . . . b 1 b c . c b 1 1 1 b 
        . . . b b c . . . c b 1 b c 
        . . . c c . . . . . c b c . 
        . . . . . . . . . . . c . . 
        `,
    img`
        ....cccccccccccccccccccccccc....
        ..cc777777ee6666666666666666cc..
        .c7775555777e77777777777776666c.
        .c7557777557ee7777777777777776c.
        c777777777577677777777777777766c
        c777777777777677777777777777776c
        c777777777777677777777777777776c
        c777777777757677777777777777776c
        c757777777757677777777777777776c
        c757777777757677777777777777766c
        .c7577777757887777777777777776c.
        .c7755775577877777777777777666c.
        ..cc777777886666666666666666cc..
        ....cccccccccccccccccccccccc....
        `,
    img`
        ....cccccccccccccccccccccccc....
        ..cceeeeeeeeeeeeeeeeaa222222cc..
        .ceeee2222222222222a2224433222c.
        .ce222222222222222aa2442222442c.
        cee222222222222222e224222222222c
        ce2222222222222222e222223322222c
        ce2222222222222222e222232232222c
        ce2222222222222222e242242242222c
        ce2222222222222222e242223342242c
        cee222222222222222e232222222242c
        .ce222222222222222aa2322222232c.
        .ceee22222222222222a2244224422c.
        ..cceeeeeeeeeeeeeeeeaa222222cc..
        ....cccccccccccccccccccccccc....
        `,
    img`
        ....11111111111111111111111111....
        ..111........................111..
        .11............................11.
        .1..............................1.
        11..............................11
        1................................1
        1................................1
        1................................1
        1................................1
        1................................1
        1................................1
        11..............................11
        .1..............................1.
        .11............................11.
        ..111........................111..
        ....11111111111111111111111111....
        `
    ]
    // 0 - easy
    // 1 - medium
    // 2 - hard
    // 3 - insane
    // 
    difficultyAssets = [
    img`
        ....555........555555...
        ..5577755.....557777755.
        .577777775...57777777775
        .57777777755577775555775
        67766666677777766...6676
        676.....66777766.....676
        878......877788......876
        878.....88777788....8876
        877888888777777788888776
        .87777777778877777777776
        .88777777788.67777777788
        ..888777888...667777888.
        ....8888........88888...
        `,
    img`
        5 5 5 . 5 5 5 . 5 5 5 . 5 5 5 . 5 5 5 
        5 . . . 5 . . . 5 . 5 . 5 . 5 . 5 . . 
        5 5 5 . 5 . . . 5 . 5 . 5 5 . . 5 5 . 
        . . 5 . 5 . . . 5 . 5 . 5 . 5 . 5 . . 
        5 5 5 . 5 5 5 . 5 5 5 . 5 . 5 . 5 5 5 
        `,
    img`
        b b b b . . . . . . . . . . 
        b 1 1 b b b b b . . . . . . 
        b 1 1 1 1 1 1 b b b b b . . 
        c b 1 1 1 1 1 1 1 1 1 b b b 
        . b 1 1 1 1 1 1 1 1 1 1 b c 
        . b 1 1 1 1 1 1 1 1 1 b c . 
        . c b 1 1 1 1 1 1 1 b c . . 
        . . b 1 1 1 1 1 1 b b . . . 
        . . b 1 1 1 1 1 1 1 b b . . 
        . . b b 1 1 1 b 1 1 1 b b . 
        . . c b 1 1 b b b 1 1 1 b b 
        . . . b 1 b c . c b 1 1 1 b 
        . . . b b c . . . c b 1 b c 
        . . . c c . . . . . c b c . 
        . . . . . . . . . . . c . . 
        `,
    img`
        ....cccccccccccccccccccccccc....
        ..cc777777ee6666666666666666cc..
        .c7775555777e77777777777776666c.
        .c7557777557ee7777777777777776c.
        c777777777577677777777777777766c
        c777777777777677777777777777776c
        c777777777777677777777777777776c
        c777777777757677777777777777776c
        c757777777757677777777777777776c
        c757777777757677777777777777766c
        .c7577777757887777777777777776c.
        .c7755775577877777777777777666c.
        ..cc777777886666666666666666cc..
        ....cccccccccccccccccccccccc....
        `
    ]
    initializeZergAssets()
    initializeTerranAssets()
    initializeProtossAssets()
}
sprites.onOverlap(SpriteKind.Plasma, SpriteKind.BasicEnemy, function (sprite, otherSprite) {
    spawnLoot(otherSprite, otherSprite, powerupsRemaining)
    blastSequence(sprite, otherSprite, currentStage)
    addPoints(otherSprite)
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
sprites.onOverlap(SpriteKind.Viking, SpriteKind.MissilePickup, function (sprite, otherSprite) {
    powerUpAnimation(sprite, otherSprite)
    addPoints(otherSprite)
})
function createTrailEffects () {
    createRocketTrails()
    createPlasmaTrails()
    createDroneTrails()
    createDroneRocketTrails()
}
function moveCamera (previousCoordinates: number[], targetCoordinates: number[]) {
    if (previousCoordinates != targetCoordinates && !(isCameraMoving)) {
        isCameraMoving = true
        cameraSprite = sprites.create(img`
            f f 
            f f 
            `, SpriteKind.Camera)
        cameraSprite.setFlag(SpriteFlag.Invisible, true)
        scene.cameraFollowSprite(cameraSprite)
        cameraSprite.setPosition(cameraOrigin[0], cameraOrigin[1])
        cameraOrigin = [cameraSprite.x, cameraSprite.y]
        cameraTerminus = [menuCoordinateX[targetCoordinates[0]], menuCoordinateY[targetCoordinates[1]]]
        spriteutils.moveTo(cameraSprite, spriteutils.pos(cameraTerminus[0], cameraTerminus[1]), 1500)
    }
}
function blastSequence (projectile: Sprite, target: Sprite, currentStage: number) {
    sprites.destroy(projectile)
    radialBlast(target.x, target.y, currentStage)
    sprites.destroy(target)
}
function cycleStages (currentLvl: number) {
    if (currentLvl == 4) {
        currentStage = 1
    }
}
sprites.onCreated(SpriteKind.DroneRocket, function (sprite) {
    sprite.lifespan = playerProjectileLifespan
})
let projectile: Sprite = null
let cameraSprite: Sprite = null
let difficultyAssets: Image[] = []
let stardustSprite: Sprite = null
let protossCombatAssets: Image[] = []
let protossAssets: Image[] = []
let isCameraMoving = false
let viewingLeaderboard = false
let cameraTerminus: number[] = []
let currentAngle = 0
let bombTotal = 0
let sessionHighScore = 0
let scoreTotal = 0
let playerY = 0
let playerX = 0
let droneTotal = 0
let currentScore = 0
let powerupSprite: Sprite = null
let entries: string[] = []
let currentSettings: number[] = []
let difficulty = 0
let zergCombatAssets: Image[] = []
let zergAssets: Image[] = []
let thrusterEffectOffset = 0
let shieldSprite: Sprite = null
let edgeSprite: Sprite = null
let doodads: Image[] = []
let backdrops: Image[] = []
let thrusterFire: Sprite = null
let openingSplash: TextSprite = null
let powerUpEffect: Sprite = null
let leaderboard: number[] = []
let pointValues: number[] = []
let starColor = 0
let droneMissileColor = 0
let droneColor = 0
let bombColor = 0
let missileColor = 0
let plasmaColor = 0
let fireColor = 0
let zergColor = 0
let protossColor = 0
let terranColor = 0
let basicEnemyValue = 0
let enemyProjectileLifespan = 0
let thrusterOffset = 0
let causedByBomb = false
let invulnerable = false
let gameUIAssets: Image[] = []
let scoreHeaderSprite: Sprite = null
let previousStage = 0
let weapon = 0
let overlappingExit = false
let powerupsRemaining = 0
let terranCombatAssets: Image[] = []
let terranAssets: Image[] = []
let notCausedByBomb = false
let playerAssets: Image[] = []
let senseiDerick: Sprite = null
let home: number[] = []
let easterEgg: number[] = []
let viewingEasterEgg = false
let colorPaths: number[][] = []
let particles2: Image[] = []
let blastFire: Sprite = null
let effectColorSelector = 0
let settings2: number[] = []
let cameraOrigin: number[] = []
let viewingSettings = false
let currentLevel = 0
let levelNumberSprite: TextSprite = null
let currentStage = 0
let levelTextSprite: TextSprite = null
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
let menuCoordinateY: number[] = []
let menuCoordinateX: number[] = []
let settingsText: TextSprite = null
let settingsSprite: Sprite = null
let difficultySkullSprite: Sprite = null
let continueText: TextSprite = null
let aButtonSprite: Sprite = null
let introText6: Sprite = null
let introText5: TextSprite = null
let introText4: TextSprite = null
let introText3: TextSprite = null
let introText2: TextSprite = null
let introText1: TextSprite = null
let playing = false
let textDelay = 0
let textSprite: TextSprite = null
let supportAssets: Image[] = []
let demoAsset: Sprite = null
initializeGame()
game.onUpdateInterval(randint(1000, 1500), function () {
    if (playing) {
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
            `, randint(-50, 50), 0)
        if (projectile.vx < 5 && projectile.vx < -5) {
            projectile.vx += 10
        }
        projectile.y = randint(12, 45)
        projectile.lifespan = 10000
        projectile.setKind(SpriteKind.BasicEnemy)
    }
})
forever(function () {
    createVikingThrusterTrail()
    createTrailEffects()
    createSpaceDust(currentStage)
    if (playing) {
        sprites.destroyAllSpritesOfKind(SpriteKind.SplashText)
        sprites.destroyAllSpritesOfKind(SpriteKind.MenuUI)
        for (let value of sprites.allOfKind(SpriteKind.UI)) {
            value.setFlag(SpriteFlag.Invisible, false)
        }
    } else {
        for (let value of sprites.allOfKind(SpriteKind.UI)) {
            value.setFlag(SpriteFlag.Invisible, true)
        }
    }
    if (isCameraMoving) {
        let list: number[] = []
        endCameraMovement(list, list)
    }
})
