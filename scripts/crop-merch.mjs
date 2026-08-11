import sharp from 'sharp'

const REF = 'public/images/reference'
const OUT = 'public/images/merch'

// [board, outputName, {left, top, width, height}]
// Coordinates read from 100px grid overlays of each board.
const JOBS = [
  // ---- Second Chance Jacket (board-02, 1149x1369) ----
  ['board-02', 'sc-jacket-front', { left: 300, top: 20, width: 402, height: 500 }],
  ['board-02', 'sc-jacket-back', { left: 744, top: 20, width: 400, height: 500 }],
  ['board-02', 'sc-jacket-chest', { left: 286, top: 520, width: 176, height: 250 }],
  ['board-02', 'sc-jacket-sleeve', { left: 470, top: 520, width: 176, height: 250 }],
  ['board-02', 'sc-jacket-hem', { left: 654, top: 520, width: 176, height: 250 }],
  ['board-02', 'sc-jacket-model', { left: 840, top: 520, width: 309, height: 250 }],

  // ---- Built Through It Work Pant (board-02) ----
  ['board-02', 'bt-pant-front', { left: 12, top: 800, width: 216, height: 470 }],
  ['board-02', 'bt-pant-side', { left: 236, top: 800, width: 176, height: 470 }],
  ['board-02', 'bt-pant-back', { left: 420, top: 800, width: 210, height: 470 }],
  ['board-02', 'bt-pant-pocket', { left: 636, top: 812, width: 194, height: 200 }],
  ['board-02', 'bt-pant-legdetail', { left: 636, top: 1028, width: 194, height: 210 }],
  ['board-02', 'bt-pant-model', { left: 840, top: 770, width: 309, height: 520 }],

  // ---- Statement Jacket "Pain Didn't Break Me" (board-04, 1402x1122) ----
  ['board-04', 'pd-jacket-front', { left: 640, top: 30, width: 360, height: 500 }],
  ['board-04', 'pd-jacket-back', { left: 1020, top: 30, width: 360, height: 440 }],
  ['board-04', 'pd-jacket-lapel', { left: 20, top: 410, width: 300, height: 250 }],
  ['board-04', 'pd-jacket-sleeve', { left: 330, top: 410, width: 250, height: 250 }],
  ['board-04', 'pd-jacket-model', { left: 1040, top: 470, width: 360, height: 640 }],

  // ---- Built Different Cargo Pant (board-04) ----
  ['board-04', 'bd-pant-front', { left: 470, top: 600, width: 220, height: 380 }],
  ['board-04', 'bd-pant-side', { left: 690, top: 600, width: 180, height: 380 }],
  ['board-04', 'bd-pant-pocket', { left: 880, top: 640, width: 160, height: 330 }],

  // ---- White Boy Rick Collab Jacket (board-03, 1023x1537) ----
  ['board-03', 'wbr-jacket-front', { left: 355, top: 20, width: 340, height: 420 }],
  ['board-03', 'wbr-jacket-back', { left: 710, top: 20, width: 300, height: 420 }],
  ['board-03', 'wbr-jacket-model', { left: 830, top: 430, width: 193, height: 380 }],
  ['board-03', 'wbr-tag', { left: 10, top: 1252, width: 150, height: 250 }],
  ['board-03', 'wbr-signature', { left: 175, top: 1252, width: 250, height: 250 }],
  ['board-03', 'wbr-neck', { left: 440, top: 1252, width: 270, height: 250 }],

  // ---- Orange Graphic Flannel (board-01, 1214x1295) ----
  ['board-01', 'og-flannel-front', { left: 30, top: 130, width: 340, height: 430 }],
  ['board-01', 'og-flannel-back', { left: 375, top: 130, width: 320, height: 430 }],
  ['board-01', 'og-flannel-detail', { left: 265, top: 575, width: 200, height: 190 }],

  // ---- Tees (board-01) ----
  ['board-01', 'tee-lime', { left: 15, top: 826, width: 210, height: 238 }],
  ['board-01', 'tee-red', { left: 230, top: 826, width: 210, height: 238 }],
  ['board-01', 'tee-white', { left: 448, top: 826, width: 210, height: 238 }],
]

// Product-stage canvas: soft warm radial so near-black garments pop.
const STAGE = { w: 1200, h: 1500 }

function stageSvg(w, h) {
  return Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="50%" cy="34%" r="80%">
          <stop offset="0%" stop-color="#3a362e"/>
          <stop offset="48%" stop-color="#221f1a"/>
          <stop offset="100%" stop-color="#131210"/>
        </radialGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>
    </svg>`,
  )
}

const stage = await sharp(stageSvg(STAGE.w, STAGE.h)).png().toBuffer()

for (const [board, name, region] of JOBS) {
  const src = `${REF}/${board}.jpeg`
  const garment = await sharp(src).extract(region).toBuffer()
  const pad = 0.82
  const gw = Math.round(STAGE.w * pad)
  const gh = Math.round(STAGE.h * pad)
  const resized = await sharp(garment).resize(gw, gh, { fit: 'inside' }).toBuffer()
  const meta = await sharp(resized).metadata()
  const left = Math.round((STAGE.w - meta.width) / 2)
  const top = Math.round((STAGE.h - meta.height) / 2)
  await sharp(stage)
    .composite([{ input: resized, left, top }])
    .jpeg({ quality: 88 })
    .toFile(`${OUT}/${name}.jpg`)
  console.log('cropped', name, `${meta.width}x${meta.height}`)
}
