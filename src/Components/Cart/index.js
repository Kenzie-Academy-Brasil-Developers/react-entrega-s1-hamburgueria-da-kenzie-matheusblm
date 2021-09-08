function Cart({ currentSale, setCurrentSale }) {
  return (
    <>
      <ul>
        {currentSale.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <div>{item.category}</div>
            <div>R${item.price}</div>
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentSale([])}>Limpar Carrinho</button>
    </>
  );
}

export default Cart;
