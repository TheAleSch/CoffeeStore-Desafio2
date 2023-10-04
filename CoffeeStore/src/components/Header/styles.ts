import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 40px;
  padding: 32px 160px;

  background-color: ${(props) => props.theme["background"]};
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;
