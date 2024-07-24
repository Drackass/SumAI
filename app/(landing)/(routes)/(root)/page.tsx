import Intro from "./_components/intro";
import Showcase from "./_components/showcase";
import Features from "./_components/features";
import Testimonials from "./_components/testimonials";
import Pricing from "./_components/pricing";
import Faq from "./_components/faq";
import About from "./_components/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Intro />
      <Showcase />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Faq />
    </div>
  );
}
