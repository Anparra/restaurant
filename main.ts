enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const oven = SpriteKind.create()
    export const kitchen = SpriteKind.create()
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
    tiles.placeOnTile(oven1, tiles.getTileLocation(15, 0))
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
    tiles.placeOnTile(oven2, tiles.getTileLocation(16, 0))
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
    tiles.placeOnTile(oven3, tiles.getTileLocation(15, 1))
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
    tiles.placeOnTile(oven4, tiles.getTileLocation(16, 1))
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
    scene.setTile(8, img`
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
`, true)
    scene.setTile(10, img`
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
`, true)
    scene.setTile(12, img`
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
`, true)
    scene.setTile(6, img`
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
let mySprite: Sprite = null
let kitchen6: Sprite = null
let kitchen5: Sprite = null
let kitchen4: Sprite = null
let kitchen3: Sprite = null
let kitchen2: Sprite = null
let kitchen1: Sprite = null
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
let monkey2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 4 b 
b d d c d 5 5 b 5 4 4 4 4 4 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(monkey)
scene.cameraFollowSprite(monkey2)
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 2 3 e e e 1 1 e 6 8 e 
4 4 4 4 4 4 4 4 4 4 5 7 e e e 1 1 e a c e 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e 1 1 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 f f e e e e e e e e e 
`)
controller.moveSprite(monkey)
controller.player2.moveSprite(monkey2)
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
game.onUpdateInterval(500, function () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
})
forever(function () {
    console.log("honk honk")
    pause(500)
})
