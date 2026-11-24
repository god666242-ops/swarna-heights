import { hotel as h, site as s } from "../site";
import Widget from "../components/Widget";
import Photo, { imgSrcSet, imgFallback } from "../components/Photo";
import Faq from "../components/Faq";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";

const phone = h.phones[0];
const nav = [["Rooms", "rooms"], ["Amenities", "amenities"], ["Gallery", "gallery"], ["Around", "nearby"], ["FAQ", "faq"], ["Contact", "contact"]];
const WRAP = "mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-36";
const H2 = "font-fd text-[clamp(40px,5.4vw,78px)] font-light leading-[1.02] tracking-[-0.01em]";

function Mark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-12">
          <nav aria-label="Primary" className="hidden flex-1 gap-8 text-[11px] uppercase tracking-[0.26em] text-ivory/80 md:flex">
            {nav.slice(0, 3).map(([t, id]) => <a key={id} href={"#" + id} className="hover:text-rose">{t}</a>)}
          </nav>
          <a href="#top" className="flex items-center gap-3 text-rose" aria-label={h.full}>
            <Mark />
            <span className="font-fd text-[22px] uppercase tracking-[0.34em] text-ivory">Swarna Heights</span>
          </a>
          <nav aria-label="Secondary" className="hidden flex-1 justify-end gap-8 text-[11px] uppercase tracking-[0.26em] text-ivory/80 md:flex">
            {nav.slice(3).map(([t, id]) => <a key={id} href={"#" + id} className="hover:text-rose">{t}</a>)}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-onyx">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgFallback(s.heroImg)} srcSet={imgSrcSet(s.heroImg)} sizes="100vw" alt={h.full} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-12 pt-40 md:px-12 md:pb-16">
          <p className="eyebrow animate-rise">{h.locality} · {h.city}</p>
          <h1 className="mt-5 animate-rise font-fd text-[clamp(64px,12vw,176px)] font-light italic leading-[0.88] tracking-[-0.02em] [animation-delay:.15s]">
            Swarna<br />Heights
          </h1>
          <p className="mt-8 max-w-[42ch] animate-rise text-[17px] text-ivory/80 [animation-delay:.3s]">{s.lead}</p>
          <div className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-6 md:flex-row md:items-center md:justify-between">
            <dl className="flex gap-10 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div><dt>Check-in</dt><dd className="mt-1 font-fd text-[26px] normal-case tracking-normal text-ivory">12:00 PM</dd></div>
              <div><dt>Check-out</dt><dd className="mt-1 font-fd text-[26px] normal-case tracking-normal text-ivory">11:00 AM</dd></div>
            </dl>
            <div className="flex flex-wrap items-center gap-6" id="reserve">
              <div className="bg-ivory px-5 py-3"><Widget /></div>
              <a href={`tel:${phone.tel}`} className="text-[13px] tracking-[0.12em] text-ivory underline decoration-rose underline-offset-[7px]">Call {phone.show}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-jade">
        <div className={`${WRAP} grid items-center gap-16 md:grid-cols-[1fr_1.15fr] md:gap-20`}>
          <div>
            <p className="eyebrow">Welcome</p>
            <h2 className={`${H2} mt-6`}>{s.headline}</h2>
            <p className="mt-10 max-w-[54ch] text-[17px] text-ivory/75">{s.intro}</p>
            <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
              {s.facts.map(([n, l]) => (
                <div key={l}><dd className="font-fd text-[44px] font-light leading-none text-rosel">{n}</dd><dt className="mt-2 text-[11px] uppercase tracking-[0.22em] text-smoke">{l}</dt></div>
              ))}
            </dl>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgFallback("reception")} srcSet={imgSrcSet("reception")} sizes="(min-width: 900px) 55vw, 100vw" alt="Reception and lobby" loading="lazy" decoding="async" className="block h-auto w-full" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.26em] text-smoke">Reception and lobby</p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-ivory text-inkd">
        <div className={WRAP}>
          <p className="eyebrow">Rooms and suites</p>
          <h2 className={`${H2} mt-6 max-w-[14ch]`}>Three ways to stay</h2>
          <Rooms rooms={s.rooms} widget={<Widget label="Check rates and book" />} />
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="bg-onyx">
        <div className={WRAP}>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="eyebrow">Amenities</p><h2 className={`${H2} mt-6`}>Little things,<br /><em className="text-rosel">done well</em></h2></div>
            <p className="max-w-[34ch] text-smoke">Everything is here so you can arrive, settle in and enjoy the city.</p>
          </div>
          <ul className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 md:grid-cols-3">
            {s.amenities.map(([t, d], i) => (
              <li key={t} className="group border-b border-r border-white/15 p-8 transition hover:bg-jade md:p-10">
                <span className="font-fd text-lg italic text-rose">{String(i + 1).padStart(2, "0")}</span>
                <b className="mt-6 block font-fd text-[28px] font-normal leading-tight text-ivory">{t}</b>
                <span className="mt-1 block text-smoke">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-night">
        <div className={WRAP}>
          <p className="eyebrow">Gallery</p>
          <h2 className={`${H2} mt-6`}>A look inside</h2>
          <Gallery items={s.gallery} />
        </div>
      </section>

      {/* Around */}
      <section id="nearby" className="bg-jade">
        <div className={WRAP}>
          <p className="eyebrow">Location</p>
          <h2 className={`${H2} mt-6`}>Around {h.locality}</h2>
          <p className="mt-6 max-w-[52ch] text-ivory/70">Distances from {h.full} by road. Check <a href={h.mapLink} target="_blank" rel="noopener noreferrer" className="text-rosel underline underline-offset-4">Google Maps</a> for live routes.</p>
          <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
            {s.nearby.map((g) => (
              <div key={g.title}>
                <h3 className="border-b border-rose pb-4 font-fd text-[30px] italic text-rosel">{g.title}</h3>
                <ul>
                  {g.items.map(([p, d]) => (
                    <li key={p} className="flex items-baseline justify-between gap-4 border-b border-white/12 py-3.5">
                      <span className="text-ivory/90">{p}</span><em className="whitespace-nowrap font-fd text-[22px] not-italic text-rosel">{d}</em>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-onyx">
        <div className={`${WRAP} grid gap-14 md:grid-cols-[1fr_2fr] md:gap-24`}>
          <div><p className="eyebrow">FAQ</p><h2 className={`${H2} mt-6`}>Questions guests ask</h2></div>
          <Faq items={s.faq} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ivory text-inkd">
        <div className={`${WRAP} grid gap-14 md:grid-cols-[4fr_7fr] md:gap-20`}>
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className={`${H2} mt-6`}>Visit</h2>
            <p className="mt-8 font-fd text-[28px] leading-snug">{h.full}</p>
            <p className="mt-2 text-inkd/70">{h.address}</p>
            <div className="mt-8 flex flex-col gap-3 text-[13px] uppercase tracking-[0.2em]">
              {h.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="underline decoration-rose underline-offset-[7px]">Call {p.show}</a>)}
              <a href={h.mapLink} target="_blank" rel="noopener noreferrer" className="underline decoration-rose underline-offset-[7px]">Get directions</a>
            </div>
          </div>
          <div className="min-h-[400px] overflow-hidden [&_iframe]:block [&_iframe]:h-full [&_iframe]:min-h-[400px] [&_iframe]:w-full [&_iframe]:border-0">
            <iframe title={`Map of ${h.full}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen src={`https://www.google.com/maps?q=${encodeURIComponent(h.mapQuery)}&output=embed`} />
          </div>
        </div>
      </section>

      {/* Closing reservation */}
      <section className="relative overflow-hidden bg-jade text-center">
        <Photo src="street-night" alt="" className="!absolute inset-0 opacity-20" pos="50% 40%" sizes="100vw" />
        <div className={`${WRAP} relative flex flex-col items-center`}>
          <p className="font-fd text-2xl italic text-rosel">{s.tagline}</p>
          <h2 className={`${H2} mt-4 max-w-[14ch]`}>Your room is waiting</h2>
          <p className="mb-10 mt-6 max-w-[44ch] text-ivory/75">Choose your dates and book your stay at {h.name}.</p>
          <div className="bg-ivory p-5"><Widget /></div>
        </div>
      </section>

      <footer className="bg-onyx text-smoke">
        <div className="mx-auto grid max-w-[1280px] gap-8 border-t border-white/10 px-6 py-12 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:px-12">
          <div>
            <span className="flex items-center gap-3 text-rose"><Mark /><span className="font-fd text-xl uppercase tracking-[0.3em] text-ivory">Swarna Heights</span></span>
            <p className="mt-4 max-w-[36ch] text-[14px]">{h.address}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.2em]">
            {nav.map(([t, id]) => <a key={id} href={"#" + id} className="hover:text-rose">{t}</a>)}
          </nav>
          <small>© {new Date().getFullYear()} {h.full}</small>
        </div>
      </footer>
    </>
  );
}
