import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { BannerSection, BannerSectionContainer, Container, CountUpContainer, CountUpGroupContainer, IntroductionSection, IntroductionSectionContainer, IntroductionSectionContentContainer, IntroductionSectionImageContainer, MetricsSection, MetricsSectionContainer } from '../styles'
import { NextImage } from '../components/Next/NextImage'
import { RevealFade } from '../components/Animations/RevealFade'
import { SubTitle } from '../components/Typography/SubTitle'


const CountUp = dynamic(() => import('react-countup'), { ssr: false })


const Home: NextPage = () => {

  return (
    <Container>
      <BannerSection id='home'>
        <BannerSectionContainer>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='sobremim'>
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
      <MetricsSection>
        <MetricsSectionContainer>
          <RevealFade>
            <Title
              content='Qual é a minha experiência?'
            />
          </RevealFade>
          <CountUpGroupContainer>
            <CountUpContainer>
              <CountUp
                end={90}
                prefix='+ de '
                decimal='.'
                decimals={3}
                className='countUp'
              />
              <SubTitle
                content='Fotografias tiradas'
              />
            </CountUpContainer>
            <CountUpContainer>
              <CountUp
                prefix='+ de '
                end={700}
                className='countUp'
              />
              <SubTitle
                content='Albúns entregues'
              />
            </CountUpContainer>

            <CountUpContainer>
              <CountUp
                prefix='+ de '
                start={1.02}
                end={1.2}
                decimal='.'
                decimals={3}
                className='countUp'
              />
              <SubTitle
                content='Clientes satisfeitos'
              />
            </CountUpContainer>

          </CountUpGroupContainer>
        </MetricsSectionContainer>
      </MetricsSection>
    </Container >
  )
}

export default Home
