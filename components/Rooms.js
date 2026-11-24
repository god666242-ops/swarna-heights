"use client";
import { useState } from "react";
import Photo from "./Photo";

export default function Rooms({ rooms, widget }) {
  const [r, setR] = useState(0);
  const [i, setI] = useState(0);
  const room = rooms[r];
  const [src, alt, pos] = room.imgs[i];
  const pick = (n) => { setR(n); setI(0); };
  return (
    <div className="mt-14 grid gap-10 md:grid-cols-[1fr_2.2fr] md:gap-16">
      <div role="tablist" aria-label="Room types" className="flex gap-3 overflow-x-auto md:flex-col md:gap-0 md:border-t md:border-inkd/15">
        {rooms.map((x, n) => (
          <button key={x.name} role="tab" aria-selected={r === n} onClick={() => pick(n)} className={"group flex shrink-0 items-baseline gap-4 border-b border-inkd/15 py-5 text-left transition md:py-7 " + (r === n ? "text-inkd" : "text-inkd/45 hover:text-inkd")}>
            <span className="font-fd text-lg italic text-rose">{String(n + 1).padStart(2, "0")}</span>
            <span className="font-fd text-[clamp(24px,2.6vw,36px)] leading-none">{x.name}</span>
            <span className={"hidden h-px flex-1 bg-rose transition-all md:block " + (r === n ? "w-10 opacity-100" : "w-0 opacity-0")} />
          </button>
        ))}
      </div>
      <div>
        <Photo key={src} src={src} alt={alt} pos={pos} sizes="(min-width: 900px) 62vw, 100vw" className="aspect-[4/3] w-full animate-rise md:aspect-[16/10]" />
        <div className="mt-3 flex gap-3 overflow-x-auto">
          {room.imgs.map(([s, a, p], n) => (
            <button key={s} onClick={() => setI(n)} aria-label={"Show: " + a} aria-current={i === n} className={"relative h-16 w-24 shrink-0 transition md:h-20 md:w-28 " + (i === n ? "ring-2 ring-rose ring-offset-2 ring-offset-ivory" : "opacity-60 hover:opacity-100")}>
              <Photo src={s} alt={a} pos={p} sizes="120px" className="h-full w-full" />
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">{room.bed}</p>
            <h3 className="mt-3 font-fd text-[clamp(32px,3.6vw,50px)] leading-[1.05] text-inkd">{room.name}</h3>
            <p className="mt-5 text-inkd/70">{room.desc}</p>
          </div>
          <ul className="self-end border-t border-inkd/15">
            {room.perks.map((p) => (
              <li key={p} className="flex items-center gap-3 border-b border-inkd/15 py-3 text-[15px] text-inkd/80"><span className="h-1.5 w-1.5 rotate-45 bg-rose" />{p}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10">{widget}</div>
      </div>
    </div>
  );
}
