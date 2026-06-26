import sharp from "sharp";
import { readdirSync } from "node:fs";
import path from "node:path";

const SRC = "public/midia/Tratadas";
const OUT = process.argv[2] || "sheet";
const COLS = 6;
const THUMB_W = 320;
const THUMB_H = 214;
const PAD = 6;

const files = readdirSync(SRC)
  .filter((f) => /\.jpg$/i.test(f))
  .sort();

const perSheet = COLS * 5; // 30 por folha
const sheets = Math.ceil(files.length / perSheet);

const labelSvg = (text) =>
  Buffer.from(
    `<svg width="${THUMB_W}" height="22"><rect width="100%" height="100%" fill="black" opacity="0.6"/><text x="6" y="16" font-family="sans-serif" font-size="14" fill="#fff">${text}</text></svg>`,
  );

for (let s = 0; s < sheets; s++) {
  const slice = files.slice(s * perSheet, (s + 1) * perSheet);
  const rows = Math.ceil(slice.length / COLS);
  const W = COLS * (THUMB_W + PAD) + PAD;
  const H = rows * (THUMB_H + PAD) + PAD;

  const composites = [];
  for (let i = 0; i < slice.length; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const left = PAD + col * (THUMB_W + PAD);
    const top = PAD + row * (THUMB_H + PAD);
    const thumb = await sharp(path.join(SRC, slice[i]))
      .resize(THUMB_W, THUMB_H, { fit: "cover" })
      .jpeg({ quality: 70 })
      .toBuffer();
    composites.push({ input: thumb, left, top });
    composites.push({
      input: labelSvg(slice[i].replace(".jpg", "")),
      left,
      top: top + THUMB_H - 22,
    });
  }

  const outFile = `${OUT}-${s + 1}.jpg`;
  await sharp({
    create: { width: W, height: H, channels: 3, background: "#111" },
  })
    .composite(composites)
    .jpeg({ quality: 72 })
    .toFile(outFile);
  console.log("wrote", outFile, `(${slice.length} imgs)`);
}
