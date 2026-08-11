import sharp from 'sharp'
import fs from 'node:fs'

const files = fs
  .readdirSync('public/images/merch')
  .filter((f) => f.endsWith('.jpg'))
  .sort()

const cell = 230
const cols = 6
const rows = Math.ceil(files.length / cols)
const labelH = 22
const comps = []

for (let i = 0; i < files.length; i++) {
  const buf = await sharp(`public/images/merch/${files[i]}`)
    .resize(cell - 10, cell - 10 - labelH, { fit: 'inside' })
    .toBuffer()
  const m = await sharp(buf).metadata()
  const cx = (i % cols) * cell
  const cy = Math.floor(i / cols) * cell
  comps.push({ input: buf, left: cx + Math.round((cell - m.width) / 2), top: cy + 5 })
  const name = files[i].replace('.jpg', '')
  const lbl = Buffer.from(
    `<svg width="${cell}" height="${labelH}" xmlns="http://www.w3.org/2000/svg"><text x="4" y="15" fill="#ff9a3c" font-size="12" font-family="monospace">${name}</text></svg>`,
  )
  comps.push({ input: lbl, left: cx, top: cy + cell - labelH })
}

await sharp({
  create: { width: cols * cell, height: rows * cell, channels: 3, background: '#000000' },
})
  .composite(comps)
  .png()
  .toFile('/tmp/agent-browser/merch-sheet.png')

console.log('sheet', files.length, 'items')
