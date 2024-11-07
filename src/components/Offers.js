import React from "react";
import { Carousel } from "antd";
import { checkAuth } from "./auth/checkAuth";
const Offers = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    width:'100%',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide) => {
  };
  return (
    <div>
      <h1>
        Offers Available
        <Carousel afterChange={onChange}>
          <div>
            <img
              style={contentStyle}
              src="https://images.pexels.com/photos/17046817/pexels-photo-17046817/free-photo-of-a-man-sitting-in-the-window-of-a-distillery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://images.pexels.com/photos/10040004/pexels-photo-10040004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://images.pexels.com/photos/10039978/pexels-photo-10039978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://images.pexels.com/photos/10039959/pexels-photo-10039959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </Carousel>
      </h1>
    </div>
  );
};
export default checkAuth(Offers);
