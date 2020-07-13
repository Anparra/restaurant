enum ActionKind {
    Walking,
    Idle,
    Jumping,
    waiting
}
namespace SpriteKind {
    export const kitchen = SpriteKind.create()
    export const veggies = SpriteKind.create()
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
    tiles.placeOnTile(inSignDough, tiles.getTileLocation(13, 2))
    inSignFridge.destroy()
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
}
function clock () {
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
    500,
    false
    )
    pause(5000)
    timer.destroy()
}
function ingredientsOut () {
    monkey.say("Need to refill the toppings...", 1000)
    tiles.placeOnTile(inSignFridge, tiles.getTileLocation(19, 2))
    inSignOven.destroy()
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
}
function readyForCustomer () {
    monkey.say("Alright, let's deliver this pizza!", 1000)
    inSignFridge.destroy()
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
    placeKitchen()
    placeVeggies()
    dough.zone1_dough()
    oven.zone2_oven()
    fridge.zone3_fridge()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isOrderTaken = true
    haveOrder()
})
function placeKitchen () {
    kitchen1 = sprites.create(img`
. . b b b b b b b b b b b b b b 
. b b b b b b b b b b b b b b b 
. b b c d d d d d d d d d d d d 
b b c d d f f f f f f f f f f f 
b c d d f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f d d d d f f f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f f f d d d d f f f f 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen1, tiles.getTileLocation(19, 4))
    kitchen2 = sprites.create(img`
b b b b b b b b b b b b b b . . 
b b b b b b b b b b b b b b b . 
d d d d d d d d d d d d d b b . 
f f f f f f f f f f f f d d b b 
f f f f f f f f f f f f f d d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f d d d d f f f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f f f d d d d f f f f f d b 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen2, tiles.getTileLocation(20, 4))
    kitchen3 = sprites.create(img`
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f d d d d f f f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f f f d d d d f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen3, tiles.getTileLocation(19, 5))
    kitchen4 = sprites.create(img`
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f b b d d f f b b d d f 
b c d f f b b d d f f b b d d f 
b c d f f b b b b f f b b b b f 
b c d f f b b b b f f b b b b f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d d f f f f f f f f f f f f 
b b c d d f f f f f f f f f f f 
b b b c d d d d d d d d d d d d 
. b b b b b b b b b b b b b b b 
. . b b b b b b b b b b b b b b 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen4, tiles.getTileLocation(19, 6))
    kitchen5 = sprites.create(img`
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f d d d d f f f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f f f d d d d f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen5, tiles.getTileLocation(20, 5))
    kitchen6 = sprites.create(img`
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f b b d d f f b b d d f f d b 
f f b b d d f f b b d d f f d b 
f f b b b b f f b b b b f f d b 
f f b b b b f f b b b b f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f d d b 
f f f f f f f f f f f f d d b b 
d d d d d d d d d d d d d b b b 
b b b b b b b b b b b b b b b . 
b b b b b b b b b b b b b b . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen6, tiles.getTileLocation(20, 6))
}
function workAtStation () {
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
    clock()
    controller.moveSprite(monkey, 100, 100)
    scene.cameraFollowSprite(monkey)
}
function doughDone () {
    monkey.say("Let's get this in the oven.", 1000)
    tiles.placeOnTile(inSignOven, tiles.getTileLocation(16, 2))
    inSignDough.destroy()
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
}
function placeVeggies () {
    veggies1 = sprites.create(img`
. . f f f f f f f f f f f f f f 
. d c c c c c c c c c c c c c c 
f c c c d d d d d d d d d d d d 
f c c d d c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c d d d d c 
f c c d c c c c c c c d d d d c 
f c c d c c c c c c c c d d d c 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies1, tiles.getTileLocation(19, 7))
    veggies2 = sprites.create(img`
f f f f f f f f f f f f f f . . 
c c c c c c c c c c c c c c d . 
d d d d d d d d d d d d c c c f 
c c c c c c c c c c c d d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 b b b b 1 1 1 c c c d c c f 
1 b b d d b b 1 1 c c c d c c f 
1 b d d f f b 1 1 c c c d c c f 
1 1 1 c c 1 1 1 1 c c c d c c f 
1 1 1 c c 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies2, tiles.getTileLocation(20, 7))
    veggies3 = sprites.create(img`
f c c d c c c c c c c c d d d c 
f c c d c c c c c c c c d d d c 
f c c d c c c c c c c c c d d c 
f c c d c c c c c 2 2 2 c d d c 
f c c d c c c c 2 2 2 2 2 c d c 
f c c d c c c 2 2 4 4 2 2 2 d c 
f c c d c c c 2 4 2 2 2 2 2 c c 
f c c d c c c 2 4 2 2 2 2 2 c c 
f c c d c c c 2 2 2 2 2 2 2 c c 
f c c d c c c c 2 2 7 2 2 c c c 
f c c d c c c c c 2 7 2 c c c c 
f c c d c c c c c c 7 c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies3, tiles.getTileLocation(19, 8))
    veggies4 = sprites.create(img`
1 1 2 2 2 1 1 1 1 c c c d c c f 
1 2 4 2 4 2 1 1 1 c c c d c c f 
2 4 4 2 4 4 2 1 1 c c c d c c f 
2 2 2 2 2 2 2 1 1 c c c d c c f 
2 4 4 4 4 4 2 1 1 c c c d c c f 
1 2 4 5 5 2 1 1 1 c c c d c c f 
1 1 2 2 2 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies4, tiles.getTileLocation(20, 8))
    veggies5 = sprites.create(img`
f c c d c c c 7 7 7 7 1 1 1 1 1 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d d c c c c c c c c c c c 
f c c c d d d d d d d d d d d d 
f b c c c c c c c c c c c c c c 
f b b c c c c c c c c c c c c c 
f b b b c c c c c c c c c c c c 
f b b b b b b b b b b b b b b b 
f c b b b b b b b b b b b b b b 
f c b b c c b b b b c c b b b b 
. f f b f f b c c b f f b c c c 
. . f f f f f f f f f f f f f f 
. . f b b b b b f . . . . . . . 
. . f c c c c c f . . . . . . . 
. . . f f f f f . . . . . . . . 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies5, tiles.getTileLocation(19, 9))
    veggies6 = sprites.create(img`
1 1 1 1 c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c d d d c c f 
d d d d d d d d d d d c c c c f 
c c c c c c c c c c c c c c c f 
c c c c c c c c c c c c c c b f 
c c c c c c c c c c c c c b b f 
b b b b b b b b b b b b b b b f 
b b b b b b b b b b b b b b c f 
b b b b c c b b b b c c b b c f 
c c c b f f b c c b f f b f f . 
f f f f f f f f f f f f f f . . 
. . . . . . . . f b b b b f . . 
. . . . . . . . f c c c c f . . 
. . . . . . . . . f f f f . . . 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies6, tiles.getTileLocation(20, 9))
}
function getCoords () {
    freezeX = monkey.x
    freezeY = monkey.y
}
let isIngredientOut = false
let isDoughDone = false
let veggies6: Sprite = null
let veggies5: Sprite = null
let veggies4: Sprite = null
let veggies3: Sprite = null
let veggies2: Sprite = null
let veggies1: Sprite = null
let freezeY = 0
let freezeX = 0
let kitchen6: Sprite = null
let kitchen5: Sprite = null
let kitchen4: Sprite = null
let kitchen3: Sprite = null
let kitchen2: Sprite = null
let kitchen1: Sprite = null
let isPizzaDone = false
let anim: animation.Animation = null
let timer: Sprite = null
let isOrderTaken = false
let inSignFridge: Sprite = null
let inSignOven: Sprite = null
let inSignDough: Sprite = null
let monkey: Sprite = null
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
        workAtStation()
        doughDone()
    }
    if (monkey.overlapsWith(inSignOven) && isDoughDone) {
        isDoughDone = false
        isIngredientOut = true
        workAtStation()
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        isPizzaDone = true
        workAtStation()
        readyForCustomer()
    }
})
