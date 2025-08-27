import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/cartSlice";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem(props.product));
    toast.success("Add to cart successfull");
  };

  const handleNavigate = (product) => {
    navigate("/product", { state: { product } });
  };
  const name =
    props.product.title.length > 27
      ? props.product.title.substring(0, 24) + "..."
      : props.product.title;
  return (
    <div className="product-card" onClick={() => handleNavigate(props.product)}>
      <img
        className="product-img"
        src={props.product.thumbnail}
        alt={props.product.name}
      />
      <p className="product-name">{name}</p>
      <p className="product-price">${props.product.price}</p>
      <button className="add_to_cart_btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
