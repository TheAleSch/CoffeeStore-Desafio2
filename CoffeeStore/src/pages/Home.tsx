import { ShoppingCart, Trash } from "@phosphor-icons/react";
import { Button } from "../components/Button";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button variant="icon">
        <ShoppingCart />
      </Button>
      <Button variant="secondary">
        <Trash weight="light" />
        Text
      </Button>
    </>
  );
}
