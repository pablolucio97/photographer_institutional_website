import type { NextPage } from 'next'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { BannerSection, BannerSectionContainer, Container, IntroductionSection, IntroductionSectionContainer, IntroductionSectionContentContainer, IntroductionSectionImageContainer } from '../styles'
import { NextImage } from '../components/Next/NextImage'
import { RevealFade } from '../components/Animations/RevealFade'

const Home: NextPage = () => {

  return (
    <Container>
      <BannerSection id='home'>
        <BannerSectionContainer>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <Title
              content='Sobre mim'
            />
            <RevealFade>
              <Text
                content='Meu nome é Danilo Sacramento e sou apaixonado com fotofragia desde criança. Descobri o meu talento com fotografia aos 11 anos e desde então decidi que isso seria meu trabalho.'
              />
              <Text
                content='Ao longo de 23 anos de profissão, construí uma grande carreira. Tenho todo o empenho para  entregar o máximo que a fotografia pode oferecer.'
              />
              <Text
                content='Trabalho com fotografia de eventos, cerimônias, festas e muito mais, desde o ensaio até ao tratamento correto das fotos e entrega para o cliente onde todo o processo é feito em meu próprio studio.'
              />
            </RevealFade>
          </IntroductionSectionContentContainer>
          <IntroductionSectionImageContainer>
            <RevealFade>
              <NextImage
                imgUrl='/images/photographer2.jpg'
                width={644}
                height={437}
              />
            </RevealFade>
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
    </Container>
  )
}

export default Home
