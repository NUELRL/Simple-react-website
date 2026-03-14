/* eslint-disable no-unused-vars */
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  // for the scrolling progress indicator
  const { scrollYProgress } = useScroll();

  useEffect(function () {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeoutId);
    }, 3000);

    return function () {
      clearTimeout(timeoutId);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="text-stone-900 ">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex: 50,
          backgroundColor: "#5452d0",
        }}
      ></motion.div>
      <Header />
      <Hero />

      <WhyChooseUs />
      <Services />

      <Faq />
      <Footer />
    </div>
  );
}

export default App;
