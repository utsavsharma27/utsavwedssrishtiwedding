import { useCallback, useEffect, useState } from "react";
import { site } from "./data/site.config";
import { scrollToHash } from "./lib/scrollToHash";
import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Countdown } from "./components/Countdown";
import { Lineup } from "./components/Lineup";
import { Venue } from "./components/Venue";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { MusicToggle } from "./components/MusicToggle";
import { Splash } from "./components/Splash";

export default function App() {
  const [opened, setOpened] = useState(false);
  const handleOpen = useCallback(() => setOpened(true), []);

  // Keep the page still behind the opening screen.
  useEffect(() => {
    if (opened) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [opened]);

  useEffect(() => {
    const id = window.setTimeout(() => scrollToHash(), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <a className="skip-link" href="#invitation">
        {site.skipLink}
      </a>
      <Splash opened={opened} onOpen={handleOpen} />
      <Hero />
      <main>
        <Invitation />
        <Countdown />
        <Lineup />
        <Venue />
      </main>
      <Footer />
      <MusicToggle />
      <BottomNav />
    </>
  );
}
