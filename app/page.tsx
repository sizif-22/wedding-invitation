import Hero from "./components/Hero";
import QuoteBand from "./components/QuoteBand";
import Details from "./components/Details";
import Location from "./components/Location";
import Timeline from "./components/Timeline";
import Closing from "./components/Closing";
import Petals from "./components/Petals";
import ScrollReveal from "./components/ScrollReveal";
import Parallax from "./components/Parallax";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Petals />
      <ScrollReveal />

      <Hero />

      {/* Quote Band */}
      <QuoteBand
        quote="Two souls, one heart — always."
        attribution="— AMR &amp; HEND —"
      />

      <Parallax speed={-0.08}>
        <Details />
      </Parallax>

      <Parallax speed={-0.05}>
        <Location />
      </Parallax>

      {/* Timeline Band */}
      <QuoteBand
        title="Evening Programme"
        subtitle="A journey crafted with love through the night"
      />

      <Parallax speed={-0.06}>
        <Timeline />
      </Parallax>

      <Closing />
      <MusicPlayer />
    </>
  );
}
