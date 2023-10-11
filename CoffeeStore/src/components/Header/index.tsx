import { ButtonGroup, HeaderContainer, InnerContainer } from "./styles";
import coffeeLogo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
export function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <img src={coffeeLogo} alt="" />
        <ButtonGroup>
          <Button variant="location">
            <MapPin /> Porto Alegre, RS
          </Button>
          <Button variant="icon">
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </HeaderContainer>
  );
}
