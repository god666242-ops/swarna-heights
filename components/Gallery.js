"use client";
import { useState, useEffect, useCallback } from "react";
import Photo, { imgSrcSet, imgFallback } from "./Photo";
import manifest from "../image-manifest.json";

export default function Gallery({ items }) {
  const cats = ["All", ...Array.from(new Set(items.map((g) => g.cat)))];
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const shown = cat === "All" ? items : items.filter((g) => g.cat === cat);
  const n = shown.length;
  const step = useCallback((d) => setOpen((x) => (x === null ? x : (x + d + n) % n)), [n]);
  useEffect(() => {
    if (open === null) return;
    const k = (e) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, step]);
  const cur = open !== null ? shown[open] : null;
  const tall = (s) => { const w = manifest[s] || []; return w[w.length - 1] <= 900 && ["street-day", "street-night", "street-rain", "exec-2", "exec-3", "exec-4", "suite-2", "suite-3"].includes(s); };
  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3" role="tablist" aria-label="Gallery categories">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={"border-b pb-1 font-fb text-[12px] uppercase tracking-[0.25em] transition " + (cat === c ? "border-rose text-rose" : "border-transparent text-smoke hover:text-ivory")}>{c}</button>
        ))}
      </div>
      <div className="mt-10 columns-2 gap-3 md:columns-3 md:gap-5">
        {shown.map((g, x) => (
          <button key={g.src} onClick={() => setOpen(x)} aria-label={"Enlarge: " + g.alt} className="group relative mb-3 block w-full cursor-zoom-in overflow-hidden md:mb-5">
            <Photo src={g.src} alt={g.alt} sizes="(min-width: 900px) 33vw, 50vw" className={"w-full transition duration-700 group-hover:scale-105 " + (tall(g.src) ? "aspect-[3/4]" : "aspect-[4/3]")} />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-left text-[13px] text-ivory opacity-0 transition group-hover:opacity-100">{g.alt}</span>
          </button>
        ))}
      </div>
      {cur && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-onyx/95 p-4" role="dialog" aria-modal="true" aria-label={cur.alt} onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgFallback(cur.src)} srcSet={imgSrcSet(cur.src)} sizes="100vw" alt={cur.alt} className="max-h-[84vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm text-smoke">{cur.alt} · {open + 1} / {n}</p>
          <button className="absolute right-5 top-4 text-4xl leading-none text-ivory" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 px-3 text-5xl text-ivory" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 text-5xl text-ivory" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </div>
  );
}
