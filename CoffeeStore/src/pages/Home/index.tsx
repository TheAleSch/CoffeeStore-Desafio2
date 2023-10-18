import { ShoppingCart, Trash } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Hero, TitleXL } from "./styles";

import heroImg from "../../assets/images/imgHome.png";
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
  return (
    <>
      <Hero>
        <TitleXL>
          Encontre o café perfeito para qualquer hora do dia
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleXL>
        <img src={heroImg}></img>
      </Hero>
      <CoffeeCard />
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
