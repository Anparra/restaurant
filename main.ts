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
}
let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 2 3 e e e f f e 6 8 e 
4 4 4 4 4 4 4 4 4 4 5 7 e e e f f e a c e 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e f f 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e f f 
4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e f f 
4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 f f e e e e e e e e e 
`)
background()
