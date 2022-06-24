import styled from "styled-components";

interface GoogleMapProps {
  size?: "small" | "medium" | "large";
}

export const Container = styled.iframe<GoogleMapProps>`
  width: ${({ size }) =>
    size === "small" ? "480px" : size === "large" ? "920px" : "640px"};
  height: 400px;
  border: 0;
  margin: 0 auto;
  @media (max-width: 1080px) {
    width: 92%;
  }
`;
