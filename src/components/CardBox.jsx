import React, { use, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const CardBox = ({ ProductsPromise, selectedCards, setSelectedCards }) => {
  
  const handleCartBtn = () => {
    setActiveTab("cart")
  }

  const Products = use(ProductsPromise);
  const [activeTab, setActiveTab] = useState("product");
  const [totalPrice,setTotalPrice] = useState(0)
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-25 gap-5">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-md text-center text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        {/* name of each tab group should be unique */}
        <div className="inline-flex bg-gray-100 p-1.5 rounded-full mb-16 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab("product")}
            className={`px-10 py-3 rounded-full transition-all font-semibold ${activeTab === "product" ? "bg-purple-600 text-white shadow-md" : "text-gray-600"}`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={handleCartBtn}
            className={`px-10 py-3 rounded-full transition-all font-semibold ${activeTab === "cart" ? "bg-purple-600 text-white shadow-md" : "text-gray-600"}`}
          >
            Cart({selectedCards.length})
          </button>
        </div>
      </div>
      {activeTab === "product" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-272.5 mx-auto mb-17">
          {Products.map((product, index) => (
            <Card
              key={index}
              product={product}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              totalPrice = {totalPrice}
              setTotalPrice = {setTotalPrice}
            ></Card>
          ))}
        </div>
      ) : (
        <Cart
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          totalPrice = {totalPrice}
          setTotalPrice = {setTotalPrice}
        ></Cart>
      )}
    </>
  );
};

export default CardBox;
