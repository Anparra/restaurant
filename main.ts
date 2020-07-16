enum ActionKind {
    Walking,
    Idle,
    Jumping,
    waiting
}
namespace SpriteKind {
    export const time = SpriteKind.create()
    export const sign = SpriteKind.create()
    export const signOut = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
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
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f 9 f f f 9 f f f f f f 
f f f 9 f f 9 f 9 f f 9 f f f f 
f f f 9 f f f 9 f f f 9 f f f f 
f 9 9 9 f f f 9 f f f 9 9 9 f f 
f f f f 9 f f 9 f f 9 f f f f f 
9 f f f f 9 f 9 f 9 f f f f f 9 
f 9 f f f f 9 9 9 f f f f f 9 f 
f f 9 9 9 9 9 9 9 9 9 9 9 9 f f 
f 9 f f f f 9 9 9 f f f f f 9 f 
9 f f f f 9 f 9 f 9 f f f f f 9 
f f f f 9 f f 9 f f 9 f f f f f 
f 9 9 9 f f f 9 f f f 9 9 9 f f 
f f f 9 f f f 9 f f f 9 f f f f 
f f f 9 f f f 9 f f f 9 f f f f 
f f f f f f 9 f 9 f f f f f f f 
f f f f f 9 f f f 9 f f f f f f 
`
}
function haveOrder () {
    monkey.say("Time to prep the pizza!", 1000)
    inSignDough.setFlag(SpriteFlag.Ghost, false)
    inSignDough.setFlag(SpriteFlag.Invisible, false)
}
function clock (timeWaiting: number) {
    timer = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 1 1 1 f f . . 
. . f 1 1 1 1 1 f 1 1 1 1 1 f . 
. . f 1 1 1 1 1 f 1 1 1 1 1 f . 
. f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . . f f 1 1 1 1 1 1 1 f f . . 
. . . . . f f f f f f f . . . . 
`, SpriteKind.time)
    timer.setPosition(monkey.x + 10, monkey.y + -15)
    monkey.setVelocity(0, 0)
    anim = animation.createAnimation(ActionKind.waiting, 1000)
    animation.attachAnimation(timer, anim)
    animation.runImageAnimation(
    timer,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 1 1 1 f f . . 
. . f 1 1 1 1 1 f 1 1 1 1 1 f . 
. . f 1 1 1 1 1 f 1 1 1 1 1 f . 
. f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . . f f 1 1 1 1 1 1 1 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . f 1 1 1 1 1 f 7 7 7 f 1 f . 
. f 1 1 1 1 1 1 f 7 7 f 1 1 1 f 
. f 1 1 1 1 1 1 f 7 f 1 1 1 1 f 
. f 1 1 1 1 1 1 f f 1 1 1 1 1 f 
. f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . . f f 1 1 1 1 1 1 1 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . f 1 1 1 1 1 f 7 7 7 7 7 f . 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 e f f f f f f f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 1 f . 
. . . f f 1 1 1 1 1 1 1 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . f 1 1 1 1 1 f 7 7 7 7 7 f . 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 1 f 7 7 7 7 7 f 
. f 1 1 1 1 1 1 1 1 f 7 7 7 7 f 
. f 1 1 1 1 1 1 1 1 1 f 7 7 7 f 
. . f 1 1 1 1 1 1 1 1 1 f 7 f . 
. . f 1 1 1 1 1 1 1 1 1 1 f f . 
. . . f f 1 1 1 1 1 1 1 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . f 1 1 1 1 1 f 7 7 7 7 7 f . 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. . f 1 1 1 1 1 f 7 7 7 7 7 f . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . f 1 1 1 1 1 f 7 7 7 7 7 f . 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
. f 1 1 1 1 1 f 7 7 7 7 7 7 7 f 
. f 1 1 1 1 f 7 7 7 7 7 7 7 7 f 
. f 1 1 1 f 7 7 7 7 7 7 7 7 7 f 
. . f 1 f 7 7 7 7 7 7 7 7 7 f . 
. . f f 7 7 7 7 7 7 7 7 7 f f . 
. . . f f 7 7 7 7 7 7 7 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f 1 1 1 1 1 f 7 7 7 7 f f . 
. . f 1 1 1 1 1 f 7 7 7 7 7 f . 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
. f f f f f f f e 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. . f 7 7 7 7 7 7 7 7 7 7 7 f . 
. . f f 7 7 7 7 7 7 7 7 7 f f . 
. . . f f 7 7 7 7 7 7 7 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 1 1 1 f 7 7 7 f f . . 
. . f f 1 1 1 1 f 7 7 7 7 f f . 
. . f 7 f 1 1 1 f 7 7 7 7 7 f . 
. f 7 7 7 f 1 1 f 7 7 7 7 7 7 f 
. f 7 7 7 7 f 1 f 7 7 7 7 7 7 f 
. f 7 7 7 7 7 f f 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. . f 7 7 7 7 7 7 7 7 7 7 7 f . 
. . f f 7 7 7 7 7 7 7 7 7 f f . 
. . . f f 7 7 7 7 7 7 7 f f . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . f f 7 7 7 f 7 7 7 f f . . 
. . f f 7 7 7 7 f 7 7 7 7 f f . 
. . f 7 7 7 7 7 f 7 7 7 7 7 f . 
. f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
. . f 7 7 7 7 7 7 7 7 7 7 7 f . 
. . f f 7 7 7 7 7 7 7 7 7 f f . 
. . . f f 7 7 7 7 7 7 7 f f . . 
. . . . . f f f f f f f . . . . 
`],
    timeWaiting / 10,
    false
    )
    pause(timeWaiting)
    timer.destroy()
}
function placeOven (zone: number) {
    if (zone == 1) {
        oven.zone1_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(13, 2))
    } else if (zone == 2) {
        oven.zone2_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        oven.zone3_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
    	
    } else if (zone == 5) {
    	
    }
    inSignOven.setFlag(SpriteFlag.Ghost, true)
    inSignOven.setFlag(SpriteFlag.Invisible, true)
}
function placeFridge (zone: number) {
    if (zone == 1) {
        fridge.zone1_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(13, 2))
    } else if (zone == 2) {
        fridge.zone2_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        fridge.zone3_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
    	
    } else if (zone == 5) {
    	
    }
    inSignFridge.setFlag(SpriteFlag.Ghost, true)
    inSignFridge.setFlag(SpriteFlag.Invisible, true)
}
function ingredientsOut () {
    monkey.say("Need to refill the toppings...", 1000)
    inSignOven.setFlag(SpriteFlag.Ghost, true)
    inSignOven.setFlag(SpriteFlag.Invisible, true)
    inSignFridge.setFlag(SpriteFlag.Ghost, false)
    inSignFridge.setFlag(SpriteFlag.Invisible, false)
}
function readyForCustomer () {
    monkey.say("Alright, let's deliver this pizza!", 1000)
    inSignFridge.setFlag(SpriteFlag.Ghost, true)
    inSignFridge.setFlag(SpriteFlag.Invisible, true)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isPizzaDone) {
        isPizzaDone = false
        isOrderTaken = true
        haveOrder()
    }
})
function background () {
    scene.setTile(4, img`
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
b b b b b b b b b b b b b b b b 
`, false)
    scene.setTile(2, img`
. . c c c c c c c c c c c c c c 
. b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 
c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
`, true)
    scene.setTile(3, img`
c c c c c c c c c c c c c c . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . 
1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
`, true)
    scene.setTile(5, img`
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
`, true)
    scene.setTile(9, img`
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 
c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 
c b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
c b b 3 3 3 3 3 3 3 3 3 3 3 3 3 
c b b b 3 3 3 3 3 3 3 3 3 3 3 3 
c b b b b b b b b b b b b b b b 
c 3 b b b b b b b b b b b b b b 
c 3 b b 3 3 b b b b 3 3 b b b b 
. c c b c c b 3 3 b c c b 3 3 3 
. . c c c c c c c c c c c c c c 
. . c b b b b b c . . . . . . . 
. . c 3 3 3 3 3 c . . . . . . . 
. . . c c c c c . . . . . . . . 
`, true)
    scene.setTile(7, img`
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
`, true)
    scene.setTile(11, img`
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 c 
1 1 1 1 1 1 1 1 1 1 1 3 3 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 b c 
3 3 3 3 3 3 3 3 3 3 3 3 3 b b c 
b b b b b b b b b b b b b b b c 
b b b b b b b b b b b b b b 3 c 
b b b b 3 3 b b b b 3 3 b b 3 c 
3 3 3 b c c b 3 3 b c c b c c . 
c c c c c c c c c c c c c c . . 
. . . . . . . . c b b b b c . . 
. . . . . . . . c 3 3 3 3 c . . 
. . . . . . . . . c c c c . . . 
`, true)
    scene.setTile(1, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTile(8, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
    veggies.zone4_veggies()
    kitchen.zone5_kitchen()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isOrderTaken = true
    haveOrder()
})
function placeDough (zone: number) {
    if (zone == 1) {
        dough.zone1_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(13, 2))
    } else if (zone == 2) {
        dough.zone2_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        dough.zone3_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
    	
    } else if (zone == 5) {
    	
    }
    inSignDough.setFlag(SpriteFlag.Ghost, true)
    inSignDough.setFlag(SpriteFlag.Invisible, true)
}
function workAtStation (timeWorking: number) {
    getCoords()
    monkey.destroy()
    monkey = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e e e f . . . . . . . . . . . . . . 
. . . . . . . . . . f d d d d e e e f . . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e f f . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e d d f . . . . . . . . . . . 
. . . . . . . . c d e e d d d d e e b d c . . . . . . . . . . . 
. . . . . . . . c d d d d c d d e e b d c . . . . . . . . . . . 
. . . . . . . . c c c c c d d e e e f c . . . . . . . . . . . . 
. . . . . . . . . f d d d d e e e f f . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f e e e e f . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e e e f . f f . . . . . . . . 
. . . . . . . . . . . f e e f e e f e e f . e f . . . . . . . . 
. . . . . . . . . . f e e f e e f e e e f . e f . . . . . . . . 
. . . . . . . . . f b d f d b f b b f e f f e f . . . . . . . . 
. . . . . . . . . f d d f d d f d d b e f f f f . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . 
`, SpriteKind.Player)
    monkey.setVelocity(0, 0)
    monkey.setPosition(freezeX, freezeY)
    clock(timeWorking)
    controller.moveSprite(monkey, 100, 100)
    scene.cameraFollowSprite(monkey)
}
function doughDone () {
    monkey.say("Let's get this in the oven.", 1000)
    inSignDough.setFlag(SpriteFlag.Ghost, true)
    inSignDough.setFlag(SpriteFlag.Invisible, true)
    inSignOven.setFlag(SpriteFlag.Ghost, false)
    inSignOven.setFlag(SpriteFlag.Invisible, false)
}
function getCoords () {
    freezeX = monkey.x
    freezeY = monkey.y
}
let isIngredientOut = false
let isDoughDone = false
let freezeY = 0
let freezeX = 0
let isPizzaDone = false
let anim: animation.Animation = null
let timer: Sprite = null
let isOrderTaken = false
let inSignFridge: Sprite = null
let inSignOven: Sprite = null
let inSignDough: Sprite = null
let monkey: Sprite = null
let Dough_Zone = 2
let Oven_Zone = 1
let Fridge_Zone = 3
monkey = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e e e f . . . . . . . . . . . . . . 
. . . . . . . . . . f d d d d e e e f . . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e f f . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e d d f . . . . . . . . . . . 
. . . . . . . . c d e e d d d d e e b d c . . . . . . . . . . . 
. . . . . . . . c d d d d c d d e e b d c . . . . . . . . . . . 
. . . . . . . . c c c c c d d e e e f c . . . . . . . . . . . . 
. . . . . . . . . f d d d d e e e f f . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f e e e e f . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e e e f . f f . . . . . . . . 
. . . . . . . . . . . f e e f e e f e e f . e f . . . . . . . . 
. . . . . . . . . . f e e f e e f e e e f . e f . . . . . . . . 
. . . . . . . . . f b d f d b f b b f e f f e f . . . . . . . . 
. . . . . . . . . f d d f d d f d d b e f f f f . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(monkey)
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 2 3 e 1 1 e 1 1 e 1 1 
4 4 4 4 4 4 4 4 4 4 5 7 e 1 1 e 1 1 e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 f f e e e e e e e 1 1 
`)
controller.moveSprite(monkey, 100, 100)
tiles.placeOnTile(monkey, tiles.getTileLocation(12, 2))
background()
inSignDough = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f 2 f . . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . f 2 2 2 2 2 f . . . . . 
. . . f 2 2 2 2 2 2 2 f . . . . 
. . f 2 2 2 2 2 2 2 2 2 f . . . 
. f 2 2 2 2 2 2 2 2 2 2 2 f . . 
. f f f f f 2 2 2 f f f f f . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.sign)
inSignOven = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f 2 f . . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . f 2 2 2 2 2 f . . . . . 
. . . f 2 2 2 2 2 2 2 f . . . . 
. . f 2 2 2 2 2 2 2 2 2 f . . . 
. f 2 2 2 2 2 2 2 2 2 2 2 f . . 
. f f f f f 2 2 2 f f f f f . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.sign)
inSignFridge = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f 2 f . . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . f 2 2 2 2 2 f . . . . . 
. . . f 2 2 2 2 2 2 2 f . . . . 
. . f 2 2 2 2 2 2 2 2 2 f . . . 
. f 2 2 2 2 2 2 2 2 2 2 2 f . . 
. f f f f f 2 2 2 f f f f f . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.sign)
isOrderTaken = true
placeDough(Dough_Zone)
placeOven(Oven_Zone)
placeFridge(Fridge_Zone)
haveOrder()
game.onUpdate(function () {
    monkey.setFlag(SpriteFlag.ShowPhysics, true)
    monkey.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e e e f . . . . . . . . . . . . . . 
. . . . . . . . . . f d d d d e e e f . . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e f f . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e d d f . . . . . . . . . . . 
. . . . . . . . c d e e d d d d e e b d c . . . . . . . . . . . 
. . . . . . . . c d d d d c d d e e b d c . . . . . . . . . . . 
. . . . . . . . c c c c c d d e e e f c . . . . . . . . . . . . 
. . . . . . . . . f d d d d e e e f f . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f e e e e f . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e e e f . f f . . . . . . . . 
. . . . . . . . . . . f e e f e e f e e f . e f . . . . . . . . 
. . . . . . . . . . f e e f e e f e e e f . e f . . . . . . . . 
. . . . . . . . . f b d f d b f b b f e f f e f . . . . . . . . 
. . . . . . . . . f d d f d d f d d b e f f f f . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . 
`)
    if (monkey.vx < 0) {
        animation.runImageAnimation(
        monkey,
        [img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f . . . . . 
. c d f d d f d e e f f . . . . 
c d e e d d d d e e d d f . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e b d c . f f 
. f d d d d e e e f f c . f e f 
. f f f f f f e e e e f . f e f 
. f f f f e e e e e e e f f e f 
f d d f d d f e f e e e e f f . 
f d b f d b f e f e e e e f . . 
f f f f f f f f f f f f e f . . 
. . . . . . . . . f c d d f . . 
. . . . . . . . . . f f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f f f . . . . 
. . f d d d e e e e d d f . . . 
. c d d d d d e e e b d c . . . 
. c d d d d d d e e b d c . . . 
c d d f d d f d e e f c . f f . 
c d d f d d f d e e f . . f e f 
c d e e d d d d e e f . . f e f 
. f d d d c d e e f f . . f e f 
. . f f f d e e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . . . f f e e e e e b f f . . 
. . . f e f f e e c d d f f . . 
. . f d d b d d c f f f . . . . 
. . f d d c d d d f f . . . . . 
. . . f f f f f f f . . . . . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f f f f f e e e e f . . . . 
. . . . f f e e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`],
        1000,
        false
        )
    } else {
        monkey.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e e e f . . . . . . . . . . . . . . 
. . . . . . . . . . f d d d d e e e f . . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e f f . . . . . . . . . . . . 
. . . . . . . . . c d f d d f d e e d d f . . . . . . . . . . . 
. . . . . . . . c d e e d d d d e e b d c . . . . . . . . . . . 
. . . . . . . . c d d d d c d d e e b d c . . . . . . . . . . . 
. . . . . . . . c c c c c d d e e e f c . . . . . . . . . . . . 
. . . . . . . . . f d d d d e e e f f . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f e e e e f . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e e e f . f f . . . . . . . . 
. . . . . . . . . . . f e e f e e f e e f . e f . . . . . . . . 
. . . . . . . . . . f e e f e e f e e e f . e f . . . . . . . . 
. . . . . . . . . f b d f d b f b b f e f f e f . . . . . . . . 
. . . . . . . . . f d d f d d f d d b e f f f f . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . 
`)
    }
})
forever(function () {
    if (monkey.overlapsWith(inSignDough) && isOrderTaken) {
        isOrderTaken = false
        isDoughDone = true
        workAtStation(5000)
        doughDone()
    }
    if (monkey.overlapsWith(inSignOven) && isDoughDone) {
        isDoughDone = false
        isIngredientOut = true
        workAtStation(5000)
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        isPizzaDone = true
        workAtStation(1000)
        readyForCustomer()
    }
})
