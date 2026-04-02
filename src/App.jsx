import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsBar from "./components/StatsBar";
import StepsSection from "./components/StepsSection";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CardBox from "./components/CardBox";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const ProductsPromise = fetchProducts();

function App() {
  const [selectedCards,setSelectedCards] = useState([])

  return (
    <>
      <Navbar selectedCards = {selectedCards}></Navbar>
      <Banner></Banner>
      <StatsBar></StatsBar>
      <Suspense fallback = {<span className="loading loading-spinner loading-lg"></span>}>
        <CardBox ProductsPromise={ProductsPromise} selectedCards = {selectedCards} setSelectedCards = {setSelectedCards}></CardBox>
      </Suspense>
      <StepsSection></StepsSection>
      <Pricing></Pricing>
      <CTASection></CTASection>
      <Footer></Footer>
       <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
