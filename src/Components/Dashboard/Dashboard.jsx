import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Utils/productsSlice";
import Sidebar from "../Sidebar/Sidebar";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);
  const price = useSelector((state) => state.category.maxPrice);

  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  
  useEffect(() => {
    if (category.category === "all") {
      dispatch(
        fetchData(
          `https://dummyjson.com/products?limit=100&select=title,price,thumbnail,category,description,discountPercentage,rating,stock,tags,brand,sku,weight,dimensions,warrantyInformation,shippingInformation,availabilityStatus,reviews,returnPolic,minimumOrderQuantity,meta,images`
        )
      );
    } else {
      if (category.category === "electronics") getProductData("laptops");
      else if (category.category === "clothing") getProductData("mens-shirts");
      else getProductData("home-decoration");
    }
    setCurrentPage(1); 
  }, [dispatch, category]);

  
  useEffect(() => {
    if (category.category === "all") {
      setProductData(data?.products || []);
    }
  }, [data, category]);

  
  useEffect(() => {
    if (!productData) return;
    const filtered = productData
      .filter((p) => p.price <= price)
      .sort((a, b) => a.price - b.price);

    setFilteredData(filtered);
    setCurrentPage(1); 
  }, [price, productData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const getProductData = async (category) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setProductData(res.data.products);
    } catch (err) {
      console.error("Fetch failed:", err);
      setProductData([]);
    }
  };

  return (
    <div>
      <div className="dashboard-container">
        <Sidebar />
        <div className="products-section">
          <h2 className="main-heading">Product Listing</h2>
          <div className="products-container">
            {loading ? (
              <p>Loading…</p>
            ) : error ? (
              <p className="text-danger">Failed to load products</p>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((product) => (
                <ProductCard
                  product={product}
                />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>

      
      {!loading && totalPages > 1 && (
        <div className="pagination-container">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
