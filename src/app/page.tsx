import Hero from "@/components/sections/Hero";
import FeaturesBar from "@/components/sections/FeaturesBar";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Products from "@/components/sections/Products";
import InsectScreens from "@/components/sections/InsectScreens";
import Delivery from "@/components/sections/Delivery";
import WhyChoose from "@/components/sections/WhyChoose";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <About />
      <Gallery />
      <Products />
      <InsectScreens />
      <Delivery />
      <WhyChoose />
      <Contact />
    </>
  );
}
