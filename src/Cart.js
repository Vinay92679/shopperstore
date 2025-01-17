import styled from "styled-components";
import { useCartContext } from "./Context/cart_context";
import CartItems from "./Components/CartItems";
import { NavLink } from "react-router-dom";
import "./App.css"
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {

  const { cart, clearCart, total_price, shipping_fee } = useCartContext()

  if(cart.length === 0){
   return (
      <div className="m-5">
        <h3>No Cart Items</h3>
      </div>
  )
 }
  return (
    <Wrapper>
      <div className="container">
        <div className="row text-center">
          <div className="col">Items</div>
          <div className="col d-none d-md-inline">Price</div>
          <div className="col">Quality</div>
          <div className="col d-none d-md-inline">Subtotal</div>
          <div className="col">Remove</div>
        </div>
        <hr/>
        <div className="cart_items">
          {
            cart.map((currItems)=>{
             return(
                  <CartItems key={currItems.id} {...currItems} />
              )
          })
          }
        </div>
        <div className="cart_buttons d-flex flex-wrap justify-content-between">
          <NavLink to={'/product'} >
              <button className="con_shopping">Continue Shopping</button>
          </NavLink>
          <button className="clear_cart" onClick={clearCart}> Clear cart </button>
        </div>
      </div>

    <div className="container my-5">
      <div className="row px-3">
        <div className="col-md-6 bg-light ms-auto p-5">
          <div className="d-flex justify-content-between">
            <p>Subtotal: </p>
            <p><b><FormatPrice price={total_price} /></b></p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping Fee: </p>
            <p><b><FormatPrice price={shipping_fee} /></b></p>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <p>Order Total: </p>
            <p><b><FormatPrice price={shipping_fee + total_price} /></b></p>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
