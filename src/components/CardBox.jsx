import React, { use, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const CardBox = ({ ProductsPromise, selectedCards, setSelectedCards }) => {

  const handleCartBtn = () => {
    setActiveTab("cart");
  };

  const Products = use(ProductsPromise);
  const [activeTab, setActiveTab] = useState("product");
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16 md:mt-25 gap-4 md:gap-5 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Premium Digital Tools</h2>
        <p className="text-sm md:text-md text-center text-[#627382] max-w-xl">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="inline-flex bg-gray-100 p-1.5 rounded-full mb-10 md:mb-16 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab("product")}
            className={`px-6 md:px-10 py-2.5 md:py-3 rounded-full transition-all font-semibold text-sm md:text-base ${activeTab === "product" ? "bg-purple-600 text-white shadow-md" : "text-gray-600"}`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={handleCartBtn}
            className={`px-6 md:px-10 py-2.5 md:py-3 rounded-full transition-all font-semibold text-sm md:text-base ${activeTab === "cart" ? "bg-purple-600 text-white shadow-md" : "text-gray-600"}`}
          >
            Cart({selectedCards.length})
          </button>
        </div>
      </div>

      {activeTab === "product" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 px-4 md:px-6">
          {Products.map((product, index) => (
            <Card
              key={index}
              product={product}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ))}
        </div>
      ) : (
        <Cart
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      )}
    </>
  );
};

export default CardBox;
