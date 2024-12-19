import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [productsData, setProductsData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProductsData(data.products);
  };

  const handlePageChange = (i) => {
    console.log(productsData.length)
    if (i === 0 || i > productsData.length / 10 || currentPage == i) {
      return
    } else{
      setCurrentPage(i)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="header">PAGINATION</h2>
      <div className="products-container">
        {productsData &&
          productsData
            .slice(currentPage * 10 - 10, currentPage * 10)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </div>
      <div>
        {productsData && productsData.length > 0 && (
          <div className="pages-container">
            <span onClick={() => handlePageChange(currentPage - 1)}>◀</span>
            {[...Array(productsData.length / 10)].map((_, i) => {
              return (
                <span className= {currentPage === i+1 ? "active" : ""} key={i} onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </span>
              );
            })}
            <span onClick={() => handlePageChange(currentPage + 1)}>▶</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
