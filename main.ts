function background () {
    scene.setTile(4, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
    scene.setTile(3, img`
. . c c c c c c c c c c c c c c c c c c c c c c c c c c c c . . 
. b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 c 
c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 c 
c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 c 
c b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b c 
c b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b c 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c 
c 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 c 
c 3 b b 3 3 3 b b b b 3 3 3 b b b b 3 3 3 b b b b 3 3 3 b b 3 c 
. c c b c c c b 3 3 b c c c b 3 3 b c c c b 3 3 b c c c b c c . 
. . c c c c c c c c c c c c c c c c c c c c c c c c c c c c . . 
. . c b b c . . . . . . . . . . . . . . . . . . . . c b b c . . 
. . c 3 3 c . . . . . . . . . . . . . . . . . . . . c 3 3 c . . 
. . . c c . . . . . . . . . . . . . . . . . . . . . . c c . . . 
`, false)
}
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e 5 5 5 5 5 5 5 7 7 7 7 7 7 7 9 9 9 9 9 9 9 e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e 5 5 5 5 5 5 5 7 7 7 7 7 7 7 9 9 9 9 9 9 9 e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e 5 5 5 5 5 5 5 7 7 7 7 7 7 7 9 9 9 9 9 9 9 e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e 5 5 5 5 5 5 5 7 7 7 7 7 7 7 9 9 9 9 9 9 9 e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e 5 5 5 5 5 5 5 7 7 7 7 7 7 7 9 9 9 9 9 9 9 e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e 5 5 5 5 5 5 5 e e e e e e e 9 9 9 9 9 9 9 e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 3 3 e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
background()
