import sharp from 'sharp'

const boards = ['board-01', 'board-02', 'board-03', 'board-04']
const step = 100

for (const name of boards) {
  const src = `public/images/reference/${name}.jpeg`
  const { width: W, height: H } = await sharp(src).metadata()
  let lines = ''
  for (let x = 0; x <= W; x += step) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#00e5ff" stroke-width="1" opacity="0.5"/>`
    if (x % 200 === 0)
      lines += `<text x="${x + 2}" y="18" fill="#00e5ff" font-size="18" font-family="monospace">${x}</text>`
  }
  for (let y = 0; y <= H; y += step) {
    lines += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#00e5ff" stroke-width="1" opacity="0.5"/>`
    if (y % 200 === 0)
      lines += `<text x="2" y="${y + 18}" fill="#00e5ff" font-size="18" font-family="monospace">${y}</text>`
  }
  const svg = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${lines}</svg>`,
  )
  await sharp(src)
    .composite([{ input: svg, top: 0, left: 0 }])
    .png()
    .toFile(`/tmp/agent-browser/grid-${name}.png`)
  console.log('grid', name, W, H)
}
