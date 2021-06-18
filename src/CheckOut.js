import React from "react";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function CheckOut() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_add"
            src="https://phononic.com/wp-content/uploads/2019/09/amazon-logo.png"
            alt=""
          />
          <div className="checkout_title">
            <h4>Hellow {user?.email}</h4>
            <h2>Your Shopping Basket</h2>

            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default CheckOut;
