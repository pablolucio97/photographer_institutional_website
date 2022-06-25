import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black100};

  
  .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.54);
    transition: all 1s ease;
  }
  
  .headerScrolling {
    position: fixed;
    height: 64px;
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.54);
    z-index: 999;
  }

  .headerNotScrolling {
    background-color: transparent;
  }

  .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
    background: ${(props) => props.theme.colors.primary_dark};
    color: ${(props) => props.theme.colors.black300};
  }
  .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }

  
  .active-modal {
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