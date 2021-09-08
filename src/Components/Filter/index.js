import { useState } from "react";
function Filter({ showProducts }) {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => showProducts(userInput)}>Filtrar</button>
    </>
  );
}

export default Filter;
