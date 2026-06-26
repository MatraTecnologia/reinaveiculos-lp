import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Experience } from "@/components/sections/experience";
import { Quiz } from "@/components/sections/quiz";
import { QuizModal } from "@/components/sections/quiz-modal";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Gallery />
        <Experience />
        <Quiz />
      </main>
      <QuizModal />
      <Footer />
    </>
  );
}
