import { useEffect, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";

/** Opening screen: goddess image, "Jai Mata Di", and a prompt to scroll up. */
export function Splash({ opened, onOpen }) {
  const [gone, setGone] = useState(false);
  const { splash } = site;

  useEffect(() => {
    if (opened) return undefined;
    let startY = null;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > 10) onOpen();
    };
    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (startY !== null && Math.abs(startY - e.touches[0].clientY) > 40) onOpen();
    };
    const onKey = (e) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [opened, onOpen]);

  if (gone) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={splash.jai}
      onTransitionEnd={(e) => {
        if (opened && e.target === e.currentTarget) setGone(true);
      }}
      className={`fixed inset-0 z-[70] flex flex-col items-center justify-center bg-page px-5 text-center transition-transform duration-[900ms] ease-in-out motion-reduce:transition-opacity ${
        opened ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <img
        src={asset(splash.image)}
        alt={splash.alt}
        className="max-h-[60dvh] w-auto max-w-full [mask-image:radial-gradient(closest-side,#000_80%,transparent_100%)] [-webkit-mask-image:radial-gradient(closest-side,#000_80%,transparent_100%)]"
      />
      <p className="mt-6 font-script text-5xl text-accent-deep sm:text-6xl">
        {splash.jai}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 inline-flex min-h-11 flex-col items-center gap-1 rounded-full px-6 py-2 font-display text-lg text-muted"
      >
        <span>{splash.prompt}</span>
        <span aria-hidden="true" className="animate-bounce text-xl text-gold motion-reduce:animate-none">
          ↑
        </span>
      </button>
    </div>
  );
}
