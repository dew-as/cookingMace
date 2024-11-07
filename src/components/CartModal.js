import React, { useState } from "react";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import noImg from "../../public/noFood.png";

const CartModal = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleCheckout = () => {
    setOpen(false);
    navigate("/cart");
  };
  return (
    <div>
      <div className="flex justify-center md:block">
        <a
          onClick={showDrawer}
          className="cursor-pointer relative text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="absolute bottom-2 left-5 text-xs bg-orange-400 p-1 rounded-full text-white">
            {cartItems.length}
          </span>
        </a>
      </div>
      <Drawer title="Your Cart" onClose={onClose} open={open}>
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
                <span>({item.quantity})</span>
                <div className="flex justify-end gap-2">
                  <p className="text-black font-bold text-xl px-2 rounded-md">
                    +
                  </p>
                  <p className="text-black font-bold text-xl px-2 rounded-md">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button
            className="bg-black text-white rounded-md p-2 font-semibold mt-2"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </Drawer>
    </div>
  );
};
export default CartModal;
