import sharp from "sharp"
import path from "node:path"

const REF = "public/images/reference"
const OUT = "public/images/brand"

// [board, output, {left,top,width,height}, thresholdBoost]
// Alpha is keyed from luminance: out_alpha = a*lum + b, so dark board bg -> 0, bright brush -> 255.
const JOBS = [
  // board-01 (1214x1295) — BRAND LANGUAGE row (lime accent variant) + badge
  ["board-01", "logo-lime", { left: 250, top: 1092, width: 236, height: 126 }],
  ["board-01", "badge", { left: 497, top: 1086, width: 178, height: 172 }],
  ["board-01", "built-through-it", { left: 750, top: 1090, width: 210, height: 152 }],
  ["board-01", "not-my-past", { left: 960, top: 1096, width: 224, height: 150 }],
  // board-05 (1402x1122) — gold hero wordmark, compact gold mark, PAST MADE ME graphic
  ["board-05", "logo-hero", { left: 46, top: 20, width: 436, height: 272 }],
  ["board-05", "logo-mark", { left: 40, top: 810, width: 138, height: 206 }],
  ["board-05", "past-made-me", { left: 1148, top: 98, width: 250, height: 306 }],
]

// linear(a,b) on the greyscale alpha: alpha = a*lum + b (0-255 domain)
// a=3.0, b=-105 => lum 35 -> 0, lum 120 -> 255 (keeps gold/orange/white, drops near-black bg)
const ALPHA_A = 3.0
const ALPHA_B = -105

async function run() {
  for (const [board, name, rect] of JOBS) {
    const src = path.join(REF, `${board}.jpeg`)
    const baseBuf = await sharp(src).extract(rect).png().toBuffer()
    const meta = await sharp(baseBuf).metadata()

    const rgb = await sharp(baseBuf).removeAlpha().toBuffer()
    const alphaRaw = await sharp(baseBuf)
      .greyscale()
      .linear(ALPHA_A, ALPHA_B)
      .raw()
      .toBuffer()

    await sharp(rgb)
      .joinChannel(alphaRaw, {
        raw: { width: meta.width, height: meta.height, channels: 1 },
      })
      .png()
      .toFile(path.join(OUT, `${name}.png`))

    console.log("[v0] extracted", name, `${meta.width}x${meta.height}`)
  }
}

run()
