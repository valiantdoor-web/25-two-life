import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, "..", "public", "images", "founder")

// Vignette overlay (transparent center -> near-black edges)
function vignette(w, h, strength = 0.85, cy = "42%") {
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="v" cx="50%" cy="${cy}" r="72%">
        <stop offset="0%" stop-color="black" stop-opacity="0"/>
        <stop offset="48%" stop-color="black" stop-opacity="0"/>
        <stop offset="100%" stop-color="black" stop-opacity="${strength}"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#v)"/>
  </svg>`
  return Buffer.from(svg)
}

// Cinematic split-tone: crushed cool shadows up top, warm burnt-orange glow low.
function splitTone(w, h, topDark = 0.55) {
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="s" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0c1620" stop-opacity="${topDark}"/>
        <stop offset="38%" stop-color="#0a0a0a" stop-opacity="0.12"/>
        <stop offset="78%" stop-color="#1a0f06" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#e96919" stop-opacity="0.34"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#s)"/>
  </svg>`
  return Buffer.from(svg)
}

async function grade({ input, output, extract, brightness, saturation, contrast, vig, vigCy, tone, topDark }) {
  let img = sharp(path.join(dir, input)).rotate()
  if (extract) img = img.extract(extract)

  // Base grade: pull exposure down, desaturate, filmic contrast + gamma.
  const base = await img
    .modulate({ brightness, saturation })
    .linear(contrast.a, contrast.b)
    .gamma(1.05)
    .toBuffer()

  const meta = await sharp(base).metadata()
  const w = meta.width
  const h = meta.height

  // Subtle film grain.
  const grain = await sharp({
    create: { width: w, height: h, channels: 3, background: "#808080", noise: { type: "gaussian", mean: 128, sigma: 9 } },
  })
    .png()
    .toBuffer()

  const overlays = [{ input: grain, blend: "overlay" }]
  if (tone) overlays.push({ input: splitTone(w, h, topDark), blend: "soft-light" })
  if (vig) overlays.push({ input: vignette(w, h, vig, vigCy), blend: "over" })

  await sharp(base).composite(overlays).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(dir, output))
  console.log("[v0] wrote", output, `${w}x${h}`)
}

// HERO — hilltop, arms raised. Crush the bright sky, deep cinematic mood.
await grade({
  input: "hilltop.jpeg",
  output: "hero-graded.jpg",
  brightness: 0.7,
  saturation: 0.68,
  contrast: { a: 1.22, b: -26 },
  vig: 0.9,
  vigCy: "40%",
  tone: true,
  topDark: 0.78,
})

// PORTRAIT — crop tight to JUST Johnny (woman removed), moody studio grade.
await grade({
  input: "stadium.jpeg",
  output: "portrait-graded.jpg",
  extract: { left: 235, top: 285, width: 505, height: 1330 },
  brightness: 0.74,
  saturation: 0.7,
  contrast: { a: 1.2, b: -24 },
  vig: 0.82,
  vigCy: "34%",
  tone: true,
  topDark: 0.4,
})

// FAMILY / legacy — for the Story page.
await grade({
  input: "family.jpeg",
  output: "family-graded.jpg",
  brightness: 0.74,
  saturation: 0.7,
  contrast: { a: 1.18, b: -22 },
  vig: 0.8,
  tone: true,
  topDark: 0.45,
})

console.log("[v0] done")
