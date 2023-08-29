import React, { useState } from "react";
import "./styles.css";

// don't change the Component name "App"
function App() {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = () => {
    setIsDeleting(true);
  };

  const proceedHandler = () => {
    setIsDeleting(false);
  };

  let warning = null;
  if (isDeleting) {
    warning = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    );
  }
  return (
    <div>
      {warning}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default App;
