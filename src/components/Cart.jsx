import { toast } from "react-toastify";
import CartCard from "./CartCard";
import { IoCartOutline } from "react-icons/io5";

const Cart = ({ selectedCards, setSelectedCards, totalPrice, setTotalPrice }) => {

  const handleProceedBtn = () => {
    setSelectedCards([]);
    setTotalPrice(0);
    toast.success("Cart processed successfully", { autoClose: 2000 });
  };

  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg max-w-6xl mx-auto p-5 md:p-8 mb-12 md:mb-15 mx-4 md:mx-auto">
        {selectedCards.length === 0 ? (
          <div className="flex flex-col justify-center items-center py-10">
            <IoCartOutline className="w-20 h-20 md:w-25 md:h-25 text-gray-500" />
            <h1 className="text-xl md:text-2xl font-semibold text-gray-500 mt-4">
              Your cart is empty!
            </h1>
          </div>
        ) : (
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Your Cart</h3>
            {selectedCards.map((selectedCard, index) => (
              <CartCard
                key={index}
                selectedCard={selectedCard}
                selectedCards={selectedCards}
                setSelectedCards={setSelectedCards}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            ))}
            <div className="flex justify-between items-center font-semibold mb-4 mt-4">
              <h3 className="text-base md:text-lg">Total:</h3>
              <h3 className="text-base md:text-lg">${totalPrice}</h3>
            </div>
            <button
              onClick={handleProceedBtn}
              className="btn bg-purple-600 text-white font-bold w-full py-5 md:py-7 rounded-lg"
            >
              Proceed to checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
