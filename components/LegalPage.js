import Link from "next/link";
import { hotel as h } from "../site";

// Shared layout for the Terms & Conditions and Privacy Policy pages.
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-6 py-6 md:px-8">
          <Link href="/" className="font-fd text-xl uppercase tracking-[0.3em] text-ivory">
            Swarna Heights
          </Link>
          <Link href="/" className="text-[11px] uppercase tracking-[0.26em] text-ivory/80 hover:text-rose">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-6 py-16 md:px-8 md:py-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-fd text-[clamp(40px,6vw,64px)] font-light leading-[1.05]">{title}</h1>
        <div className="rule mt-6" />
        <p className="mt-4 text-[13px] text-smoke">Last updated: {updated}</p>
        <p className="mt-8 text-ivory/75">{intro}</p>

        {sections.map((sec, i) => (
          <section key={sec.h} className="mt-12">
            <h2 className="font-fd text-[28px] font-light text-ivory">
              {i + 1}. {sec.h}
            </h2>
            {sec.p?.map((t) => (
              <p key={t} className="mt-3 text-ivory/70">{t}</p>
            ))}
            {sec.ul && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-ivory/70 marker:text-rose">
                {sec.ul.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-14 border border-white/10 bg-night p-7">
          <h2 className="font-fd text-[28px] font-light text-ivory">Contact us</h2>
          <p className="mt-2 text-ivory/70">Questions about this page? Call or visit us.</p>
          <p className="mt-4 font-medium text-ivory">{h.full}</p>
          <p className="text-ivory/70">{h.address}</p>
          {h.phones.length > 0 && (
            <p className="mt-2">
              {h.phones.map((p, i) => (
                <span key={p.tel}>
                  {i > 0 && " / "}
                  <a href={`tel:${p.tel}`} className="text-rosel underline underline-offset-4">{p.show}</a>
                </span>
              ))}
            </p>
          )}
          {h.email && (
            <p className="mt-1">
              <a href={`mailto:${h.email}`} className="text-rosel underline underline-offset-4">{h.email}</a>
            </p>
          )}
        </section>
      </main>

      <footer className="bg-onyx text-smoke">
        <div className="mx-auto flex max-w-[860px] flex-col items-start justify-between gap-3 border-t border-white/10 px-6 py-8 text-[12px] uppercase tracking-[0.2em] sm:flex-row sm:items-center md:px-8">
          <small>© {new Date().getFullYear()} {h.full}</small>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/terms" className="hover:text-rose">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-rose">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
