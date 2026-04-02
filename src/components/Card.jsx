import React, { useState } from "react";
import { ImGift } from "react-icons/im";
import { toast } from "react-toastify";

const Card = ({ product, selectedCards, setSelectedCards,totalPrice,setTotalPrice}) => {
  const { name, description, price, period, tag, tagType, features, icon } =
    product;

    const [btnClicked,setBtnClicked] = useState(false)

  const handleCardBtn = () => {
    setSelectedCards([...selectedCards, product]);
    setBtnClicked(true)

    totalPrice+=price
    setTotalPrice(totalPrice)

    toast.success('Added to cart',{autoClose: 2000})
  };


  return (
    <>
      <div className="border-2 border-gray-200 p-6 rounded-2xl text-left hover:shadow-xl transition relative bg-white">
        <span
          className={`absolute top-4 right-4 badge badge-${tagType} text-xs py-3 ${tag === "Best Seller" ? "bg-amber-200 text-amber-700" : tag === "New" ? "bg-green-200 text-green-700" : "bg-purple-200 text-purple-700"} rounded-2xl font-semibold`}
        >
          {tag}
        </span>
        <div className="text-4xl mb-4 p-3 bg-gray-50 inline-block rounded-xl">
          {<img src={icon}></img>}
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500 text-sm my-3">{description}</p>
        <div className="text-2xl font-bold mb-4">
          ${price}{" "}
          <span className="text-sm font-normal text-gray-400">/{period}</span>
        </div>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600">
              ✅ {feature}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleCardBtn}
          className={`btn w-full ${btnClicked ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-500 hover:bg-purple-600'} text-white border-none rounded-xl`}
        >
          {btnClicked ? 'Added to cart' : 'Buy now'}
        </button>
      </div>
    </>
  );
};

export default Card;
