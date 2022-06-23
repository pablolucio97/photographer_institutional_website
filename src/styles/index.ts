import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BannerSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
`;

export const BannerSectionContainer = styled.div`
  width: 1024px;
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
`;

export const TestimonialsSection = styled.section`
  display: flex;
`;

export const FaqSection = styled.section`
  display: flex;
`;

export const PurchaseSection = styled.section`
  display: flex;
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
`;
