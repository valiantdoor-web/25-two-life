import sharp from "sharp"
import path from "node:path"

const REF = path.join(process.cwd(), "public/images/reference")
const OUT = path.join(process.cwd(), "public/images/merch")

// Target product tile: portrait 4:5 on a near-black canvas so every card matches.
const TW = 1040
const TH = 1300
const BG = { r: 13, g: 13, b: 13 }

// [board, {left,top,width,height}] regions measured from the source boards.
const CROPS = [
  // Second Chance jacket — clean isolated front & back on board 2 (1149x1369)
  ["board-02", "jacket-front", { left: 300, top: 16, width: 402, height: 510 }],
  ["board-02", "jacket-back", { left: 744, top: 16, width: 400, height: 510 }],
  // Work pant — board 1 (1214x1295) shows BUILT THROUGH IT (front) + NOT MY PAST MY PURPOSE (back)
  ["board-01", "pant-front", { left: 686, top: 110, width: 252, height: 632 }],
  ["board-01", "pant-back", { left: 940, top: 110, width: 224, height: 632 }],
  // Tee back-prints — board 1 bottom row
  ["board-01", "tee-lime", { left: 16, top: 812, width: 224, height: 276 }],
  ["board-01", "tee-red", { left: 242, top: 812, width: 216, height: 276 }],
  ["board-01", "tee-white", { left: 458, top: 812, width: 198, height: 276 }],
]

async function run() {
  for (const [board, name, region] of CROPS) {
    const src = path.join(REF, `${board}.jpeg`)
    // Extract the garment, then letterbox onto the shared near-black canvas.
    const cropped = await sharp(src)
      .extract(region)
      .linear(1.05, -6) // gentle contrast to seat it in the dark theme
      .toBuffer()

    await sharp({
      create: { width: TW, height: TH, channels: 3, background: BG },
    })
      .composite([{ input: await sharp(cropped).resize({ width: Math.round(TW * 0.82), height: Math.round(TH * 0.82), fit: "inside" }).toBuffer(), gravity: "center" }])
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(path.join(OUT, `${name}.jpg`))
    console.log("[v0] wrote merch/", name)
  }
}

run()
