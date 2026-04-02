import React from "react";
import { toast } from "react-toastify";

const CartCard = ({ selectedCard, selectedCards, setSelectedCards, totalPrice, setTotalPrice }) => {

  const handleRemoveBtn = (deletedCard) => {
    const filterCartCards = selectedCards.filter((selected) => selected.id !== deletedCard.id);
    totalPrice -= deletedCard.price;
    setTotalPrice(totalPrice);
    setSelectedCards(filterCartCards);
    toast.success("Successfully removed", { autoClose: 2000 });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-4 md:p-5 rounded-lg bg-blue-50 gap-3">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex justify-center items-center shrink-0">
            <img src={selectedCard.icon} alt={selectedCard.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-sm md:text-base truncate">{selectedCard.name}</h3>
            <p className="font-semibold text-gray-600 text-sm">${selectedCard.price}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleRemoveBtn(selectedCard)}
          className="btn btn-sm text-[#FF3980] shrink-0"
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default CartCard;
