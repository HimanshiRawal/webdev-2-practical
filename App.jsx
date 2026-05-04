import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const itemsPerPage = 4;

  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);


  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const currentProducts = products.slice(start, end);

  
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Images</h1>

     
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {currentProducts.map((item) => (
          <img
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            width="150"
          />
        ))}
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 0}>
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={end >= products.length}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;