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

  & .active-modal {
  width: 92%;
  height: 64%;
  background: transparent;
  margin: 25% auto;
  @media(min-width: 1900px){
  width: 40%;
}
  @media(max-width: 1900px){
  width: 60%;
}
  @media(max-width: 1400px){
  width: 60%;
}
@media(max-width: 720px){
  display: flex;
  justify-content: center;
  align-items: center;
}
}

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

background: -webkit-linear-gradient(-131deg, rgb(255, 255, 255), rgb(224, 222, 220));
background: linear-gradient(-131deg, rgb(255, 255, 255), rgb(224, 222, 220));

& .active-modal {
  width: 92%;
  height: 64%;
  background: transparent;
  margin: 25% auto;
  @media(min-width: 1900px){
  width: 40%;
}
  @media(max-width: 1900px){
  width: 60%;
}
  @media(max-width: 1400px){
  width: 60%;
}
@media(max-width: 720px){
  display: flex;
  justify-content: center;
  align-items: center;
}
}

`;

export const PortfolioEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 40vh;
  margin: 40px auto 0;

  & h3{
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.black300};
  }

  `;

export const PortfolioWeddingsContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40vh;
  margin: 40px auto 0;

  & h3{
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.black300};
  }

`;

export const PortfolioBirthdaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40vh;
  margin: 40px auto 0;

  & h3{
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.black300};
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



