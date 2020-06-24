enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const oven = SpriteKind.create()
    export const kitchen = SpriteKind.create()
    export const veggies = SpriteKind.create()
    export const fridge = SpriteKind.create()
    export const dough = SpriteKind.create()
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
}
function placeOven () {
    oven1 = sprites.create(img`
. . c c c c c c c c c c c c c c 
. . c b d d d d d d d d d d d d 
c c c b d d d d d d d d d d d d 
c b b b d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c d d d d d d d d d d d d d d d 
c b d d d d d d d d d d d d d d 
c c b b b b b b b b b b b b b b 
c c f f f f f f f f f f f f f f 
c c f f f f f f f f f f f f f f 
`, SpriteKind.oven)
    tiles.placeOnTile(oven1, tiles.getTileLocation(16, 0))
    oven2 = sprites.create(img`
c c c c c c c c c c c c c c . . 
d d d d d d d d d d d d b c . . 
d d d d d d d d d d d d b c c c 
d d d d d d d d d d d d b b b c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d d c 
d d d d d d d d d d d d d d b c 
b b b b b b b b b b b b b b c c 
f f f f f f f f f f f f f f c c 
f f f f f f f f f f f f f f c c 
`, SpriteKind.oven)
    tiles.placeOnTile(oven2, tiles.getTileLocation(17, 0))
    oven3 = sprites.create(img`
c b f f d d b b f f d d b b f f 
c b f f d d b b f f d d b b f f 
f b f f b b b b f f b b b b f f 
f b f f b b b b f f b b b b f f 
f b f f f f f f f f f f f f f f 
f b f f f f f f f f f f f f f f 
f d d d d d d d d d d d d d d d 
f d f f f f f f f f f f f f f f 
f d f f f f f f f f f f f f f f 
f d f f f f f f f f f f f f f f 
f d f f f f f f f f f f f f f f 
f d f f f f f f f f f f f f f f 
f d f f f f f f f f f f f f f f 
f d c c b b b b d d d d d d d d 
f d f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.oven)
    tiles.placeOnTile(oven3, tiles.getTileLocation(16, 1))
    oven4 = sprites.create(img`
f f d d b b f f d d b b f f b c 
f f d d b b f f d d b b f f b c 
f f b b b b f f b b b b f f b f 
f f b b b b f f b b b b f f b f 
f f f f f f f f f f f f f f b f 
f f f f f f f f f f f f f f b f 
d d d d d d d d d d d d d d d f 
f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f d f 
d d d d d d d d b b b b c c d f 
f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.oven)
    tiles.placeOnTile(oven4, tiles.getTileLocation(17, 1))
}
function placeFridge () {
    fridge1 = sprites.create(img`
. . d d d d d d d d d d d d d d 
. . d 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 b b b b b b b b b b b b b b 
d b b b b b b b b b b b b b b b 
d b d d d d d d d d d d d d d d 
`, SpriteKind.fridge)
    tiles.placeOnTile(fridge1, tiles.getTileLocation(19, 0))
    fridge2 = sprites.create(img`
d d d d d d d d d d d d d d . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 d . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
b b b b b b b b b b b b b b 1 d 
b b b b b b b b b b b b b b b d 
d d d d d d d d d d d d d d b d 
`, SpriteKind.fridge)
    tiles.placeOnTile(fridge2, tiles.getTileLocation(20, 0))
    fridge3 = sprites.create(img`
d b d 1 1 1 1 1 1 1 1 1 1 1 1 1 
d b d 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b b b b b b b b b b b b b b b 
f b d d d d d d d d d d d d d d 
f b d 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b d 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b f 1 1 1 1 1 1 1 1 1 1 1 1 1 
f b b b b b b b b b b b b b b b 
f b f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.fridge)
    tiles.placeOnTile(fridge3, tiles.getTileLocation(19, 1))
    fridge4 = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 d b d 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b d 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
b b b b b b b b b b b b b b b f 
d d d d d d d d d d d d d d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
1 1 1 1 1 1 1 1 1 1 1 1 1 d b f 
b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f b f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.fridge)
    tiles.placeOnTile(fridge4, tiles.getTileLocation(20, 1))
}
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
    placeOven()
    placeKitchen()
    placeVeggies()
    placeFridge()
    placeDough()
}
function placeDough () {
    dough1 = sprites.create(img`
. . f f f f f f f f f f f f f f 
. b f c c c c c c c c c c c c c 
f f f c d d d d d d d d d d d d 
f c c c d c c c c c c c c c c c 
f c c d d c c c c c c c c c c c 
f c c d c c c c c c f f f f c c 
f c c d c c c c c c f e e f c c 
f c c d c c c c c c f e e f c c 
f c c d c c c c c c f e e f c c 
f c c d c c c c c f e e e e f c 
f c c d c c c c f e e e e e e f 
f c c d c c c c f e e e e e e f 
f c c d c c c c f e e e e e e f 
f c c d c c c c f e e e e e e f 
f c c d c c c c f e e e e e e f 
f c c d c c c c c f e e e e f c 
`, SpriteKind.dough)
    tiles.placeOnTile(dough1, tiles.getTileLocation(13, 0))
    dough2 = sprites.create(img`
f f f f f f f f f f f f f f . . 
c c c c c c c c c c c c c f b . 
d d d d d d d d d d d d c f f f 
c c c c c c c c c c c d c c c f 
c c c c c 1 c c c c c d d c c f 
c c 1 c c c c c c c c c d c c f 
c c c c c c c 1 c c c c d c c f 
c 1 1 d d c c c c c c c d c c f 
1 1 1 1 1 d c c c c c c d c c f 
1 1 1 1 1 d d c c 1 c c d c c f 
1 1 1 1 1 1 1 1 c c c c d c c f 
1 1 1 1 1 1 1 1 c c c c d c c f 
1 1 1 1 1 1 1 1 c 1 c c d c c f 
d d d 1 1 1 1 c c c c c d c c f 
1 d d 1 1 1 c c c c c c d c c f 
c 1 d 1 1 c c c c c c c d c c f 
`, SpriteKind.dough)
    tiles.placeOnTile(dough2, tiles.getTileLocation(14, 0))
    dough3 = sprites.create(img`
f c c d c c c c c c f e e f c c 
f c c d c c c c c c f e e f c c 
f c c d c c c c c c f e e f c c 
f c c d d c c c c c f f f f c c 
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
`, SpriteKind.dough)
    tiles.placeOnTile(dough3, tiles.getTileLocation(13, 1))
    dough4 = sprites.create(img`
c c c c c c c c c c c c d c c f 
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
`, SpriteKind.dough)
    tiles.placeOnTile(dough4, tiles.getTileLocation(14, 1))
}
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
    tiles.placeOnTile(kitchen1, tiles.getTileLocation(19, 3))
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
    tiles.placeOnTile(kitchen2, tiles.getTileLocation(20, 3))
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
    tiles.placeOnTile(kitchen3, tiles.getTileLocation(19, 4))
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
    tiles.placeOnTile(kitchen4, tiles.getTileLocation(19, 5))
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
    tiles.placeOnTile(kitchen5, tiles.getTileLocation(20, 4))
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
    tiles.placeOnTile(kitchen6, tiles.getTileLocation(20, 5))
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
let veggies6: Sprite = null
let veggies5: Sprite = null
let veggies4: Sprite = null
let veggies3: Sprite = null
let veggies2: Sprite = null
let veggies1: Sprite = null
let kitchen6: Sprite = null
let kitchen5: Sprite = null
let kitchen4: Sprite = null
let kitchen3: Sprite = null
let kitchen2: Sprite = null
let kitchen1: Sprite = null
let dough4: Sprite = null
let dough3: Sprite = null
let dough2: Sprite = null
let dough1: Sprite = null
let fridge4: Sprite = null
let fridge3: Sprite = null
let fridge2: Sprite = null
let fridge1: Sprite = null
let oven4: Sprite = null
let oven3: Sprite = null
let oven2: Sprite = null
let oven1: Sprite = null
let monkey = sprites.create(img`
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
`, SpriteKind.Player)
scene.cameraFollowSprite(monkey)
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 2 3 e 1 1 e 1 1 e 1 1 
4 4 4 4 4 4 4 4 4 4 5 7 e 1 1 e 1 1 e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 f f e e e e e e e 1 1 
`)
controller.moveSprite(monkey)
background()
game.onUpdate(function () {
    monkey.setImage(img`
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
        200,
        true
        )
    } else {
        monkey.setImage(img`
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
`)
    }
})
