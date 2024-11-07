import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import cartimg from "../../public/emptyCart.gif";
import { CDN_URL } from "../utils/constants";
import noImg from "../../public/noFood.png";
import { checkAuth } from "./auth/checkAuth";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const sum = cartItems
    .map((item) =>
      Math.floor(
        item?.item?.card?.info?.price / 100 ||
        item.item.card.info.defaultPrice / 100
      )
    )
    .reduce((total, itemPrice) => total + itemPrice, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleOrder = () => {
    console.log("payment");
  };

  if (cartItems.length === 0)
    return (
      <div className="flex items-center justify-center">
        <div>
          <p className="xl:text-5xl md:text-3xl sm:text-xl font-mono text-center font-bold p-10 m-0 text-gray-800">
            Cart is empty !
          </p>
        </div>
        <img className="w-6/12 h-80%" src={cartimg} />
      </div>
    );
  let total = 0;
  let price;
  let itemPrice;

  const hanldeTotal = (itemPrice) => {
    total += itemPrice;
  };

  return (
    <>
      <div className="w-6/12 m-auto p-3">
        <h1 className="p-2 m-2 text-2xl font-bold">
          Cart <i className="bx bxs-cart-alt"></i>
        </h1>
        <div className="flex gap-2 mb-3">
          <button
            onClick={handleClearCart}
            className="text-sm bg-black text-white p-2 m-1 rounded-md"
          >
            Clear Cart
          </button>
          <button
            onClick={handleOrder}
            className="text-sm bg-black text-white p-2 m-1 rounded-md"
          >
            Order Now
          </button>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.item.card.info.id}
            className="flex justify-between p-3 border bottom-1 mb-1"
          >
            <div className="w-3/12 text-center p-2">
              <img
                className="rounded-md"
                src={
                  item?.item.card?.info?.imageId
                    ? CDN_URL + item?.item.card?.info?.imageId
                    : noImg
                }
                alt=""
              />
            </div>
            <div className="w-9/12">
              <p className="font-semibold p-1 text-sm mb-1">
                {item?.item.card?.info?.name}
              </p>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  ₹
                  {
                    (price = Math.floor(
                      (item?.item?.card?.info?.price ||
                        item?.item?.card?.info?.defaultPrice) / 100
                    ))
                  }
                  <span> x ({item.quantity})</span>
                  <span> = {(itemPrice = price * item.quantity)}</span>
                  {hanldeTotal(itemPrice)}
                </span>
                <div className="flex justify-end gap-2">
                  <p onClick={() => dispatch(addItem({ item, quantity: 1 }))} className="text-black font-bold text-xl px-2 rounded-md">
                    +
                  </p>
                  <p onClick={() => dispatch(removeItem({ item }))} className="text-black font-bold text-xl px-2 rounded-md">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between bg-gray-200 w-full mt-3">
          <span className="mx-4 p-2 font-semibold">Total Price </span>
          <span className="mx-4 p-2 font-semibold">₹{total}</span>
        </div>
      </div>
    </>
  );
};

export default checkAuth(Cart);
