import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black100};

  & .testimonialCard{
    width: 320px;
    height: 400px;
    margin: 8px;
    @media (max-width: 1080px) {
    width: 56%;
    margin: 12px auto;
  }
    @media (max-width: 720px) {
    width: 88%;
    margin: 12px auto;
  }
  }

`;

export const BannerSection = styled.section`
  display: flex;
  width: 100%;
`;

export const BannerSectionContainer = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  background-image: url("/images/photographer1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white100};
  margin-top: -40px;
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  width: 1900px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 50%;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }

  & p {
    color: ${({ theme }) => theme.colors.black500};
    margin: 24px auto;
  }
  @media (max-width: 1080px) {
    width: 100%;
    padding: 16px;
    & h1 {
      text-align: center;
    }
  }
`;
export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 40px;
  width: 50%;
  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 16px;
    justify-content: center;
  }
`;

export const MetricsSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 64vh;
  background: -webkit-linear-gradient(180deg, rgb(18, 18, 18), rgb(28, 28, 28));
  background: linear-gradient(180deg, rgb(18, 18, 18), rgb(28, 28, 28));
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
    margin-bottom: 40px;
    text-align: center;
    @media (max-width: 1080px) {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CountUpGroupContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
  }
`;
export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 320px;
  margin: 0 auto;
  padding: 12px;
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 120px;
  }
`;

export const TestimonialsSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const TestimonialsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;

  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
    text-align: center;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const TestimonialsCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 56px auto 0;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;


