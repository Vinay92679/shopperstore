import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./Context/productcontext";
import PageNavigation from "./Components/PageNavigation";
import MyImage from "./Components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./Components/Star";
import AddToCart from "./Components/AddToCart";
import "./App.css"


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const { id } = useParams();
  // console.log(id)
 
  const {id:alias, name, image, company, price, description, category, stock, stars, reviews} = singleProduct

  useEffect(() => {
    //  getSingleProduct(`?id=thapaserialnoh`)
    getSingleProduct(`${API}?id=${id}`); // yahan getSingleProduct function ke parameter m humne single product ki id bej rhe h
  }, []);

  if(isSingleLoading){
    return(
      // <div className="page_loading">.....Loading</div>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    )
  } 
 
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container s_product_details">
        <div className="row">
          <div className="col-md-6">
           <div className="product_images">
             <MyImage imgs={image}/>
           </div>
          </div>
 
          <div className="col-md-6">
            <h2 className="product_name">{name}</h2>
            <Star stars={stars} reviews={reviews}></Star>
            <div className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000}/>
              </del>
            </div>
            <p className="product-data-real-price">
              Deal of the day: <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <div className="d-flex justify-content-between">
              <div className="product-warranty-data text-center">
                <TbTruckDelivery id="s_icons"/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data text-center">
                <TbReplace id="s_icons"/>
                <p>30 Days Replacement </p>
              </div>
              <div className="product-warranty-data text-center">
                <TbTruckDelivery id="s_icons"/>
                <p>Fast Delivered</p>
              </div>
              <div className="product-warranty-data text-center">
                <MdSecurity id="s_icons"/>
                <p>2 Year Warranty</p>
              </div>
            </div>
              <hr/>
              <div>
                  <p>Available: <b>{stock > 0 ? "In Stock" : "Not Available"}</b></p>
                  {/* <p>ID : <b>{id}</b></p> */}
                  <p>Brand : <b>{company}</b></p>
              </div>
              <hr/>

              {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: red;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
