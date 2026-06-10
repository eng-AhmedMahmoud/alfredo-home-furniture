import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collections from "./components/Collections";
import Story from "./components/Story";
import Craft from "./components/Craft";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";
import Showroom from "./components/Showroom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Collections />
        <Story />
        <Craft />
        <Featured />
        <Testimonials />
        <Showroom />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
