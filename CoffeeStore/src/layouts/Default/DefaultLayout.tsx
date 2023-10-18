import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BodyContainer } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </>
  );
}
