import React from "react";
import { toast } from "react-toastify";

const CartCard = ({selectedCard,selectedCards,setSelectedCards,totalPrice,setTotalPrice}) => {
   
  const handleRemoveBtn = (deletedCard) => {

    const filterCartCards = selectedCards.filter(selected => selected.id !== deletedCard.id) 

    totalPrice-=deletedCard.price
    setTotalPrice(totalPrice)

    setSelectedCards(filterCartCards)

    toast.success('Successfully removed',{autoClose: 2000})
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-5 rounded-lg bg-blue-50">
        <div className="flex items-end gap-2">
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <img src={selectedCard.icon} alt="" />
          </div>
          <div>
            <h3 className="font-semibold">{selectedCard.name}</h3>
            <p className="font-semibold text-gray-600">${selectedCard.price}</p>
          </div>
        </div>
        <button type="button" onClick={() => handleRemoveBtn(selectedCard)} className="btn text-[#FF3980]">Remove</button>
      </div>
    </>
  );
};

export default CartCard;
