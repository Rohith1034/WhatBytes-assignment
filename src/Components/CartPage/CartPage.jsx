import React from "react";
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import { Trash } from "lucide-react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem,updateQuantity } from "../../Utils/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  
  const removeItem = (id) => {  
    dispatch(deleteItem(id));
    toast.success("Removed item successfully");
  };

  const handleQty = (id,qty) => {
    dispatch(updateQuantity(id,qty));
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-primary">Shopping Cart</h2>
      <Row>
        
        <Col md={8}>
          {cart.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <Card key={item.id} className="mb-3 shadow-sm cart-item">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col xs={9} md={4}>
                      <h6 className="fw-semibold">{item.title}</h6>
                      <p className="text-muted mb-0">${item.price}</p>
                    </Col>
                    <Col xs={12} md={3} className="d-flex align-items-center mt-2 mt-md-0">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={handleQty(item.id,item.quantity-1)}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="mx-2 text-center"
                        style={{ width: "60px" }}
                      />
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={handleQty(item.id,item.quantity+1)}
                      >
                        +
                      </Button>
                    </Col>
                    <Col xs={6} md={2} className="fw-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Col>
                    <Col xs={6} md={1} className="text-end">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash size={16} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>

        <Col md={4}>
          <Card className="shadow-sm summary-card">
            <Card.Body>
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
              <Button className="w-100 mt-4" variant="primary" size="lg">
                Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
