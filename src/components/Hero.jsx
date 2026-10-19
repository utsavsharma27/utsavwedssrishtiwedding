import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { LotusCorner, FallingPetals } from "./Florals";
import { Monogram } from "./Monogram";

export function Hero() {
  const { couple, displayDate, city, hero, blessing } = site;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-16 text-center"
    >
      <FallingPetals />
      <LotusCorner className="pointer-events-none absolute left-0 top-0 hidden w-36 max-w-[42vw] md:block md:w-56" />
      <LotusCorner className="pointer-events-none absolute right-0 top-0 hidden w-36 max-w-[42vw] origin-center scale-x-[-1] md:block md:w-56" />
      <LotusCorner className="pointer-events-none absolute bottom-16 left-0 w-28 max-w-[36vw] md:w-56" />
      <LotusCorner className="pointer-events-none absolute bottom-16 right-0 w-28 max-w-[36vw] origin-center scale-x-[-1] md:w-56" />

      <div className="relative flex items-center justify-center gap-3 md:gap-5">
        <img
          src={asset(blessing.ganeshLeft)}
          alt=""
          aria-hidden="true"
          className="h-20 w-auto md:h-28"
        />
        <div className="font-devanagari text-sm leading-relaxed text-accent-deep md:text-base">
          {blessing.shloka.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <img
          src={asset(blessing.ganeshRight)}
          alt=""
          aria-hidden="true"
          className="h-20 w-auto md:h-28"
        />
      </div>

      <Monogram className="relative mx-auto mb-2 mt-4 w-24 md:w-32" />
      <p className="relative mx-auto max-w-xl font-display text-base leading-relaxed text-muted">
        {hero.kickerLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <h1 className="sr-only">
        {couple.partnerA} &amp; {couple.partnerB}
      </h1>
      <div className="relative mt-6 grid w-full max-w-3xl grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="min-w-0 text-center">
          <p className="font-script text-6xl leading-none text-accent-deep sm:text-7xl">
            {couple.partnerA}
          </p>
          <p className="mt-3 font-display text-base leading-snug text-muted">
            {couple.familyA}
          </p>
        </div>
        <span className="self-center font-script text-5xl leading-none text-gold md:text-6xl" aria-hidden="true">
          &amp;
        </span>
        <div className="min-w-0 text-center">
          <p className="font-script text-6xl leading-none text-accent-deep sm:text-7xl">
            {couple.partnerB}
          </p>
          <p className="mt-3 font-display text-base leading-snug text-muted">
            {couple.familyB}
          </p>
        </div>
      </div>

      <p className="relative mt-8 font-display text-xl text-ink md:text-2xl">
        {displayDate}
      </p>
      <p className="relative mt-1 font-display text-lg text-muted">{city}</p>
      <a
        href={hero.ctaHref}
        className="relative mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-accent-deep px-7 py-3 text-sm font-medium tracking-wide text-page shadow-md"
      >
        {hero.ctaLabel}
      </a>
    </section>
  );
}
