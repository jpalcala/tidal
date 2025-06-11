samples({
'puff': 'samples/ex1/puff.wav',
'hey': 'samples/ex1/hey.mp3',
'listen': 'samples/ex1/listen.mp3',
}, 'github:jpalcala/tidal');

const dbank = "tr909"

$: s("hh!8")
.gain(.2)
._punchcard().color("yellow")

$: s("bd")
.struct("{1 0 0 1 0 [1 0] [1 0]}%8")
.gain(.6)
.lpf(1100)
.room(0.2)
._punchcard().color("orange")

$: s("sd").bank(dbank)
  .beat("4, 12", 16)
  .lpf(rand.range(500, 8000))
  // .fast(2)
._punchcard().color("purple")


$: s("hey")
  .n("5 4")
  .clip(2)
  .beat("2, <~ 8>",8)
  .orbit(6)
  .begin(slider(0.4024,0.1,1))
  .gain(.7)
  .delay(.4)
  .fast(2)
  .room(0.3)
  .hpf(slider(685,100,4000))
  .release(slider(0.568,0,1))
  .sustain(slider(1,0,1))
._scope()

// $puff: s('puff')
//   .fit()
//   // .chop(16)
//    .slow(2)
//   // .speed(rand.range(0.9, 1.1))
//   .late(0.2)
//   .lpf(1200)
//   .room(0.5)
// ._scope()
