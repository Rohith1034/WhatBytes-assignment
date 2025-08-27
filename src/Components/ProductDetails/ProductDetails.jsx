import React, { useState } from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { addItem } from "../../Utils/cartSlice";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem(product));
    toast.success("Add to cart successfull");
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-details-container">
      <div className="image-section">
        <div className="main-image">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="thumbnails">
          {product.images.map((img, i) => (
            <img key={i} src={img} alt={`thumb-${i}`} />
          ))}
        </div>
      </div>

      <div className="details-section">
        <h1 className="product-title">{product.title}</h1>

        <div className="price-section">
          <span className="current-price">${product.price}</span>
          <span className="old-price">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
          <span className="discount">-{product.discountPercentage}%</span>
        </div>

        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={
                i < Math.round(product.rating) ? "star filled" : "star"
              }
            />
          ))}
          <span>{product.rating.toFixed(1)} / 5</span>
        </div>

        <p className="description">{product.description}</p>

        <div className="meta">
          <p>
            <b>Category:</b> {product.category}
          </p>
          <p>
            <b>Brand:</b> {product.brand}
          </p>
        </div>

        <div className="quantity">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          <ShoppingCart size={20} /> Add to Cart
        </button>

        <div className="reviews">
          <h2>Customer Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((r, i) => (
              <div key={i} className="review-card">
                <p>{r.comment}</p>
                <span>– {r.reviewerName}</span>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
