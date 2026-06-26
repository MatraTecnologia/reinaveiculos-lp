import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";

const BRAND = "#e11122";
const DARK = "#070707";

// --- Favicon: "R" vermelho em fundo escuro arredondado ---
const iconSvg = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#141414"/>
      <stop offset="1" stop-color="#000000"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="120" fill="url(#bg)"/>
  <rect x="8" y="8" width="496" height="496" rx="116" fill="none" stroke="#262626" stroke-width="4"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central"
    font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="700"
    font-size="320" fill="${BRAND}">R</text>
</svg>`;

const icon512 = await sharp(Buffer.from(iconSvg(512))).png().toBuffer();
await sharp(icon512).toFile("app/icon.png");
await sharp(icon512).resize(180, 180).png().toFile("app/apple-icon.png");

const png32 = await sharp(Buffer.from(iconSvg(32))).resize(32, 32).png().toBuffer();
const png48 = await sharp(Buffer.from(iconSvg(48))).resize(48, 48).png().toBuffer();
const ico = await pngToIco([png32, png48]);
writeFileSync("app/favicon.ico", ico);
console.log("-> icons (icon.png, apple-icon.png, favicon.ico)");

// --- OpenGraph 1200x630 ---
const W = 1200;
const H = 630;

const base = await sharp("public/hero.jpg")
  .resize(W, H, { fit: "cover", position: "center" })
  .modulate({ brightness: 0.55 })
  .toBuffer();

const shade = Buffer.from(
  `<svg width="${W}" height="${H}"><defs>
     <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
       <stop offset="0" stop-color="#000" stop-opacity="0.55"/>
       <stop offset="0.55" stop-color="#000" stop-opacity="0.45"/>
       <stop offset="1" stop-color="#000" stop-opacity="0.92"/>
     </linearGradient></defs>
     <rect width="${W}" height="${H}" fill="url(#g)"/></svg>`,
);

const text = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <text x="80" y="300" font-family="Arial, sans-serif" font-size="22" font-weight="700"
       letter-spacing="6" fill="${BRAND}">REINA STUDIO · CAR DETAILING</text>
     <text x="78" y="380" font-family="Arial, sans-serif" font-size="68" font-weight="800" fill="#ffffff">Estética automotiva no mais</text>
     <text x="78" y="456" font-family="Arial, sans-serif" font-size="68" font-weight="800" fill="#ffffff">alto <tspan fill="${BRAND}">padrão premium</tspan>.</text>
     <text x="80" y="520" font-family="Arial, sans-serif" font-size="26" font-weight="400" fill="#cfcfcf">Proteção · Vitrificação · PPF · Detalhamento · Polimento</text>
     <rect x="80" y="250" width="64" height="4" rx="2" fill="${BRAND}"/>
   </svg>`,
);

const logo = await sharp("public/logo.webp").resize({ height: 64 }).toBuffer();

await sharp(base)
  .composite([
    { input: shade, top: 0, left: 0 },
    { input: text, top: 0, left: 0 },
    { input: logo, top: 70, left: 80 },
  ])
  .jpeg({ quality: 86 })
  .toFile("public/og.jpg");
console.log("-> public/og.jpg");

console.log("SEO assets done");
