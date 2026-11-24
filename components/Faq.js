export default function Faq({ items }) {
  return (
    <div className="border-b border-white/15">
      {items.map(([q, a], i) => (
        <details key={q} className="group border-t border-white/15 py-6">
          <summary className="flex cursor-pointer list-none items-baseline gap-5 [&::-webkit-details-marker]:hidden">
            <span className="font-fd text-lg italic text-rose">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 font-fd text-[clamp(20px,2.2vw,28px)] leading-snug text-ivory">{q}</span>
            <span className="text-2xl leading-none text-rose transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-[60ch] pl-11 text-smoke">{a}</p>
        </details>
      ))}
    </div>
  );
}
