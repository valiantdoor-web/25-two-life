import sharp from 'sharp'

const SRC = 'public/images/reference/badge-source.jpeg'
const OUT = 'public/images/brand/badge-hero.png'

const img = sharp(SRC)
const { width, height } = await img.metadata()
const { data, info } = await img
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const ch = info.channels
const out = Buffer.from(data)

// Luminance key: dark board background -> transparent, silver brush -> opaque.
for (let i = 0; i < out.length; i += ch) {
  const r = out[i]
  const g = out[i + 1]
  const b = out[i + 2]
  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  // Below ~46 fully transparent, above ~110 fully opaque, smooth between.
  let a
  if (lum <= 46) a = 0
  else if (lum >= 110) a = 255
  else a = Math.round(((lum - 46) / (110 - 46)) * 255)
  out[i + ch - 1] = a
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: ch } })
  .png()
  .toFile(OUT)

// Trim fully-transparent margins for a tight bounding box.
await sharp(OUT).trim({ threshold: 1 }).toFile(OUT.replace('.png', '-trim.png'))
console.log('done', width, height)
