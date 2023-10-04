import { ButtonGroup, HeaderContainer, InnerContainer } from "./styles";
import coffeeLogo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import { ShoppingCart } from "@phosphor-icons/react";
export function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <img src={coffeeLogo} alt="" />
        <ButtonGroup>
          <Button>Porto Alegre, RS</Button>
          <Button>
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </HeaderContainer>
  );
}
