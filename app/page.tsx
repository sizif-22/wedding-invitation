import Hero from "./components/Hero";
import QuoteBand from "./components/QuoteBand";
import Details from "./components/Details";
import Location from "./components/Location";
import Timeline from "./components/Timeline";
import Closing from "./components/Closing";
import Petals from "./components/Petals";
import ScrollReveal from "./components/ScrollReveal";

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

      <Details />
      <Location />

      {/* Timeline Band */}
      <QuoteBand
        title="Evening Programme"
        subtitle="A journey crafted with love through the night"
      />

      <Timeline />
      <Closing />
    </>
  );
}
