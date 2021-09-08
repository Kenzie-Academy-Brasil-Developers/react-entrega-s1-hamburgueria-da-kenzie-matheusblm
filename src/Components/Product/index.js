function Product({ handleClick, price, id, name, category }) {
  return (
    <>
      <li className={id}>
        <div>{name}</div>
        <div>{category}</div>
        <div>R${price}</div>
        <button onClick={() => handleClick(id)}>Adicionar</button>
      </li>
    </>
  );
}

export default Product;
