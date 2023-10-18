import styled from "styled-components";

export const Hero = styled.div`
  width: 100vw;
  max-width: 1120px;
  height: 544px;
  padding: 96px 0;
  display: flex;
  gap: 56px;
  color: ${(props) => props.theme.baseTitle};

  img {
    width: 476px;
    height: 360px;
    flex-shrink: 0;
  }
`;

export const TitleXL = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%; /* 62.4px */
  p {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
    margin-top: 16px;
  }
`;
