import sharp from "sharp";
import path from "node:path";

const SRC = "public/midia/Tratadas";
const OUT = "public";

// origem (sem .jpg) -> destino (sem extensão), largura alvo
const map = [
  ["DSC05052", "hero", 2400],
  ["DSC05083", "service-ppf", 1800],
  ["DSC05092", "service-polimento", 1800],
  ["DSC05164", "service-peliculas", 1800],
  ["DSC05160", "service-detalhamento", 1800],
  ["DSC05064", "about", 1800],
  ["DSC05091", "experience", 1600],
  ["DSC05051", "gallery-1", 1800],
  ["DSC05080", "gallery-2", 1800],
  ["DSC05088", "gallery-3", 1800],
  ["DSC05176", "gallery-4", 1800],
  ["DSC05199", "gallery-5", 1800],
  ["DSC05131", "gallery-6", 1800],
];

for (const [from, to, width] of map) {
  const input = path.join(SRC, `${from}.jpg`);
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, `${to}.jpg`));
  console.log("->", `${to}.jpg`);
}
console.log("done");
