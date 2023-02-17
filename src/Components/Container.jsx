import { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";

const Container = () => {
  const [products, setProducts] = useState("");
  const [isUpdated, setIsUpdated] =useState("");

  useEffect(() => {
    getData();
  }, []);
  
  


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3000 ) {
        document.body.classList.add("transition");
      } else {
        document.body.classList.remove("transition");
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

 


  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setIsUpdated(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      {isUpdated === true ? (
        <>
          {products.map((product) => (
            <div className="discription" key={product.id} >
              <div>
                <img src={product.image} alt="item" />
              </div>
              <div>
                <div className="about">
                  <h4>
                    {product.title}
                  </h4>
                  <h3>
                    <b>Price:</b>${product.price}
                  </h3>
                </div>
                <div className="category">
                  <p>
                    <b>Category:</b> {product.category}
                  </p>
                  <p>
                    <b>Rating:</b> {product.rating.rate} &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;
                  </p>
                </div>
                <div className="button">
                  <Button />
                  <button>Add to Chart</button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Container;
