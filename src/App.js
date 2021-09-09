import "./App.css";
import { useState } from "react";
import MenuContainer from "./Components/MenuContainer";
import Cart from "./Components/Cart";
import Filter from "./Components/Filter";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (item) => {
    const newItem = item.toLowerCase();
    if (item.trim() === "") {
      setProducts([
        { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
        { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
        { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
        { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
        { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
        { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
        { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
      ]);
    } else {
      const filter = products.filter((elemento) =>
        elemento.name.toLowerCase().includes(newItem)
      );

      setProducts(filter);
    }
  };
  function handleClick(ids) {
    const finder = products.find((el) => el.id === ids);
    if (!currentSale.includes(finder)) {
      setCurrentSale([...currentSale, finder]);
    }
  }
  const total = currentSale
    .reduce(function (acumulador, valorAtual) {
      return acumulador + valorAtual.price;
    }, 0)
    .toFixed(2);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Filtrar itens</h3>
        <Filter showProducts={showProducts} />
        <MenuContainer products={products} handleClick={handleClick} />
        <h4>Subtotal - R$ {total}</h4>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </header>
    </div>
  );
}

export default App;
