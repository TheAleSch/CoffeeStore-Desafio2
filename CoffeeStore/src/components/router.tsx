import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
