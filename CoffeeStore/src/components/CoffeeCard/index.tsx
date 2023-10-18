import { CofeeCardContainer, Tag } from "./styles";
import coffeeSample from "../../assets/images/coffeeSample.png";
import { TitleS } from "../Typography/styles";

export function CoffeeCard() {
  return (
    <CofeeCardContainer>
      <img src={coffeeSample}></img>
      <Tag>Hello</Tag>
      <TitleS>Coffe Title</TitleS>
      <p>O tradicional café feito com água quente e grãos moídos</p>
    </CofeeCardContainer>
  );
}
