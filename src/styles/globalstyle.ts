import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
        background: ${(props) => props.theme.colors.element_base};
    }
    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
    }
    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }
    li, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6{
      font-family: ${(props) => props.theme.fonts.default};
    }

    span, p{
      font-family: ${(props) => props.theme.fonts.secondary};
    }
    
    .active-modal{
      width: 92%;
    height: 64%;
    background: transparent;
    margin: 25% auto;
    outline: none;
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
    .modal-image{
      width: 92vw;
    height: 64vh;
    background: transparent;
    margin: 0 auto;
    outline: none;
    @media(min-width: 1900px){
    width: 40vw;
    height: 56vh;
  }
    @media(max-width: 1900px){
    width: 60vw;
    height: 48vh;
  }
    @media(max-width: 1400px){
    width: 60vw;
    height: 40vh;
  }
  @media(max-width: 720px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
  }
  }

  .video-modal{
      background: transparent;
      @media (max-width: 720px) {
        margin: 12px auto;
        align-self: center;
     }
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }

  .react-modal-overlay-video{
        background: rgba(0, 0, 0, .88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
  }

  .countUp{
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.xhuge};
    }
    @media(max-width: 720px){
      font-size: ${({ theme }) => theme.sizes.huge};
    }
  }

  .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.54);
    transition: all 1s ease;
  }

  .testimonialCard{
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

  .portfolioIcons{
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.primary_dark};
  }
  .socialContactIcons{
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.primary_dark};
    margin-right: 8px;
  }


`;