import "./App.css";
import Navigation from "./components/navigation/Navigation.jsx";
import Hero from "./components/hero/Hero.jsx";
import Features from "./components/features/Features.jsx";
import Download from "./components/download/Download.jsx";
import Question from "./components/questions/Question.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Download />
      <Question />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
