import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (pd) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === pd.id);
    if (!exists) {
      pd.quantity = 1;
      newCart = [...cart, pd];
    } else {
      const rest = cart.filter((product) => product.id !== pd.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(pd.id);
  };

  const handleClearCart = (id) => {
    deleteShoppingCart();
    setCart([]);
  };

  return (
    <div className="shop">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            pd={pd}
            key={pd.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            {<button className="proceed-btn">Review order</button>}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
