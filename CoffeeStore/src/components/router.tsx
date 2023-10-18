import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/cart";
import { DefaultLayout } from "../layouts/Default/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
