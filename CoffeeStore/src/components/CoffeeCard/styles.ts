import styled from "styled-components";

export const CofeeCardContainer = styled.div`
  width: 310px;
  height: 310px;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  padding: 24px;
  img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }
`;

export const Tag = styled.span`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: start;
  border-radius: 100px;
  width: fit-content;
  margin: 8px 0;

  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 13px */
  text-transform: uppercase;

  color: ${(props) => props.theme.yellowDark};
  background-color: ${(props) => props.theme.yellowLight};
`;
