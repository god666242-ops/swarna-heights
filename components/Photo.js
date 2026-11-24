import manifest from "../image-manifest.json";
export const imgSrcSet = (n) => (manifest[n] || []).map((w) => `/images/${n}-${w}.webp ${w}w`).join(", ");
export const imgFallback = (n) => {
  const w = manifest[n] || [];
  return `/images/${n}-${w.find((x) => x >= 960) || w[w.length - 1]}.webp`;
};
export default function Photo({ src, alt, className = "", pos = "center", sizes = "100vw", priority = false }) {
  return (
    <div className={"relative overflow-hidden bg-night " + className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgFallback(src)} srcSet={imgSrcSet(src)} sizes={sizes} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: pos }} />
    </div>
  );
}
