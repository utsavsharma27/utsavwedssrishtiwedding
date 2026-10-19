import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;

  // Start music by default. Browsers block sound until the visitor interacts,
  // so if the first attempt is blocked, start on the first tap or scroll.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    let started = false;
    const start = () => {
      if (started) return;
      audio.play().then(
        () => {
          started = true;
          setPlaying(true);
          removeListeners();
        },
        () => {},
      );
    };
    const removeListeners = () => {
      ["pointerdown", "keydown", "touchstart", "scroll"].forEach((ev) =>
        window.removeEventListener(ev, start),
      );
    };

    start();
    ["pointerdown", "keydown", "touchstart", "scroll"].forEach((ev) =>
      window.addEventListener(ev, start, { passive: true }),
    );
    return removeListeners;
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.play().then(
      () => setPlaying(true),
      () => {
        setPlaying(false);
      },
    );
  }

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio ref={audioRef} src={asset(music.src)} preload="auto" loop />
      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? music.labelPause : music.labelPlay}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}
