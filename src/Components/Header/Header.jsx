import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  InputGroup,
  Spinner,
  ListGroup,
} from "react-bootstrap";
import "./Header.css";
import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    navigate("/cart");
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${value}`
      );
      const data = await res.json();
      setResults(data.products || []);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProduct = (product) => {
    setResults([]);
    setQuery("");
    navigate("/product", { state: { product } });
  };

  return (
    <Navbar expand="lg" className="shadow-sm navbar position-relative">
      <Container fluid>
        <Navbar.Brand
          className="text-white fw-bold logo"
          onClick={handleNavigateHome}
          style={{ cursor: "pointer" }}
        >
          Logo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between align-items-center flex-column flex-lg-row"
        >
          <Form
            className="my-2 my-lg-0 mx-lg-auto position-relative"
            style={{ maxWidth: "350px", width: "100%" }}
          >
            <InputGroup>
              <InputGroup.Text style={{ backgroundColor: "#0759a7" }}>
                {loading ? (
                  <Spinner animation="border" size="sm" variant="light" />
                ) : (
                  <Search size={18} color="white" />
                )}
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search for products..."
                className="search-box search-container"
                value={query}
                onChange={handleSearch}
              />
            </InputGroup>

            
            {results.length > 0 && (
              <ListGroup
                className="position-absolute shadow-sm mt-1 w-100"
                style={{
                  zIndex: 9999,
                  maxHeight: "300px",
                  overflowY: "auto",
                  borderRadius: "10px",
                }}
              >
                {results.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    action
                    onClick={() => handleSelectProduct(item)}
                    className="d-flex align-items-center"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <div className="fw-semibold">{item.title}</div>
                      <small className="text-muted">${item.price}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Form>

          <Nav className="my-2 my-lg-0">
            <Button
              className="d-flex align-items-center cart-btn"
              onClick={handleNavigate}
            >
              <ShoppingCart size={18} className="me-2" />
              Cart
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
