import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PortfolioSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const PortfolioSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;

  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }

  background-color: ${({ theme }) => theme.colors.white100};
`;

export const PortfolioEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 56vh;

  & h1{
    margin: 0 auto;
  }

`;

export const PortfolioWeddingsContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 56vh;

  & h1{
    margin: 0 auto;
  }

`;

export const PortfolioBirthdaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 56vh;

  & h1{
    margin: 0 auto;
  }

`;

export const PortfolioEventsImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media(max-width: 720px){
    flex-direction: column;
  }
`;

export const PortfolioWeddingsImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media(max-width: 720px){
    flex-direction: column;
  }
`;

export const PortfolioBirthdaysImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media(max-width: 720px){
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
    cursor: pointer;
    margin: 16px;
`