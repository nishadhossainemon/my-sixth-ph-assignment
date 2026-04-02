import { toast } from "react-toastify";
import CartCard from "./CartCard";
import { IoCartOutline } from "react-icons/io5";

const Cart = ({ selectedCards,setSelectedCards,totalPrice,setTotalPrice}) => {

  const handleProceedBtn = () => {
    setSelectedCards([])
    setTotalPrice(0)
    toast.success('Cart processed successfully',{autoClose: 2000})
  }
     
  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg max-w-272.5 mx-auto p-8 mb-15">
        {selectedCards.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <IoCartOutline className="w-25 h-25 text-gray-500"></IoCartOutline>
            <h1 className="text-2xl font-semibold text-gray-500">
              Your cart is empty! 
            </h1>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold mb-3">Your Cart</h3>
            {selectedCards.map((selectedCard) => (
              <CartCard selectedCard={selectedCard} selectedCards={selectedCards} setSelectedCards={setSelectedCards}
              totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}
              ></CartCard>
            ))}
            <div className="flex justify-between items-center font-semibold mb-4">
              <h3>Total:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <button onClick={handleProceedBtn} className="btn bg-purple-600 text-white font-bold w-full py-7 rounded-lg ">Proceed to checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
