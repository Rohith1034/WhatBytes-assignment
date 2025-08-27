import React, { useState } from "react";
import { Form, Button, Collapse } from "react-bootstrap";
import "./Sidebar.css";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateCategory,updateMaxPrice } from "../../Utils/categorySlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(3000);

  const handleClick = (val) => {
    dispatch(updateCategory(val));
  };

  return (
    <div className="sidebar-container">
      <Menu
        variant="primary"
        className="d-lg-none mb-3 w-100 menu-btn"
        onClick={() => setOpen(!open)}
        aria-controls="sidebar-collapse"
        aria-expanded={open}
      ></Menu>
      <Collapse in={open || window.innerWidth >= 992}>
        <div id="sidebar-collapse" className="sidebar-content p-3 shadow-sm">
          <h4 className="mb-3">Filters</h4>
          <Form.Group>
            <Form.Label>
              <strong>Category</strong>
            </Form.Label>
            <div className="d-flex flex-column">
              <Form.Check
                type="radio"
                name="category"
                onClick={() => handleClick("all")}
                label="All"
                defaultChecked
              />
              <Form.Check
                type="radio"
                onClick={() => handleClick("electronics")}
                name="category"
                label="Electronics"
              />
              <Form.Check
                type="radio"
                onClick={() => handleClick("clothing")}
                name="category"
                label="Clothing"
              />
              <Form.Check
                type="radio"
                onClick={() => handleClick("home")}
                name="category"
                label="Home"
              />
            </div>
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Label>
              <strong>Price</strong>
            </Form.Label>
            <Form.Range
              min={0}
              max={3000}
              value={price}
              onChange={(e) => {
                dispatch(updateMaxPrice(e.target.value))
                setPrice(e.target.value)}}
            />
            <div className="d-flex justify-content-between">
              <span>0</span>
              <span>{price}</span>
              <span>3000</span>
            </div>
          </Form.Group>
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;
