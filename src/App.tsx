// components
import Navbar from "../src/components/Navbar";
import CartContainer from "../src/components/CartContainer";
import { useContext } from "react";
import { AppContext } from "./context/context";

// items

function App() {
  const {
    state: { loading },
  } = useContext(AppContext);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
