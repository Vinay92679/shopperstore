import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import '../App.css'
import { useCartContext } from "../Context/cart_context";


const Header = () => {

const {total_item} = useCartContext()

return(
<>
   <Navbar collapseOnSelect expand="md" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand to="/"><h3 className="brand_name">Shoppers Store</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
              <Link className='list-items' to='/'>Home</Link>
              <Link className='list-items' to='/about'>About</Link>
              <Link className='list-items' to='/product'>Products </Link>
              <Link className='list-items' to='/contact'>Contact</Link>
              <Link className="list-items cart_icon" to='/cart'><FiShoppingCart /> <span className="cart-total-items">{total_item}</span></Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
)
}

export default Header;