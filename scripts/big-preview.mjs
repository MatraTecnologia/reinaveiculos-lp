import sharp from "sharp";
import path from "node:path";

const SRC = "public/midia/Tratadas";
const OUT = process.argv[2];
const names = process.argv.slice(3);
const COLS = 4;
const W = 460;
const H = 300;
const PAD = 8;

const rows = Math.ceil(names.length / COLS);
const CW = COLS * (W + PAD) + PAD;
const CH = rows * (H + PAD) + PAD;

const label = (t) =>
  Buffer.from(
    `<svg width="${W}" height="26"><rect width="100%" height="100%" fill="black" opacity="0.65"/><text x="8" y="19" font-family="sans-serif" font-size="16" fill="#fff">${t}</text></svg>`,
  );

const composites = [];
for (let i = 0; i < names.length; i++) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const left = PAD + col * (W + PAD);
  const top = PAD + row * (H + PAD);
  const thumb = await sharp(path.join(SRC, names[i] + ".jpg"))
    .resize(W, H, { fit: "cover" })
    .jpeg({ quality: 78 })
    .toBuffer();
  composites.push({ input: thumb, left, top });
  composites.push({ input: label(names[i]), left, top: top + H - 26 });
}

await sharp({ create: { width: CW, height: CH, channels: 3, background: "#111" } })
  .composite(composites)
  .jpeg({ quality: 80 })
  .toFile(OUT);
console.log("wrote", OUT);
