import Product from "../Product";

function MenuContainer({ products, handleClick }) {
  return (
    <>
      <ul>
        {products.map((item, index) => (
          <Product
            key={index}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
}

export default MenuContainer;
