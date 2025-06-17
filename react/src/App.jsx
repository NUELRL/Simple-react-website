import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="text-stone-900">
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Services />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
