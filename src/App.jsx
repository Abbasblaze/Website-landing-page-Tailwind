import "./App.css";
import Brands from "./components/Brands/Brands";
import Faqs from "./components/Faqs/Faqs";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";
import Trusted from "./components/Trusted/Trusted";

function App() {
  return <>
  <Navigation/>
  <Header/>
  <Brands/>
  <Features/>
  <Trusted/>
  <Testimonial/>
  <Pricing/>
  <Faqs/>
  </>;
}

export default App;
