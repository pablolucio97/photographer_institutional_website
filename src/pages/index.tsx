import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NextImage } from '../components/Next/NextImage'

import {
  BannerSection,
  Container,
  CountUpContainer,
  CountUpGroupContainer,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionImageContainer,
  MetricsSection,
  MetricsSectionContainer,
  TestimonialsCardsContainer,
  TestimonialsSection,
  TestimonialsSectionContainer
} from '../styles'

import { RevealFade } from '../components/Animations/RevealFade'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { ImageSlider } from '../components/Elements/ImageSlider'
import { SubTitle } from '../components/Typography/SubTitle'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'

import { allPhotos, testimonials } from '../data/data'

const CountUp = dynamic(() => import('react-countup'), { ssr: false })

const Home: NextPage = () => {

  return (
    <Container>
      <Head>
        <title>Danilo Fotografias | Home</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection id='home'>
        <ImageSlider
          images={allPhotos}
          imgWidth={1900}
          imgHeight={900}
          infiniteLoop
          autoPlay
          showStatus={false}
          showIndicators={false}
        />
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
                imgUrl='/images/photographer1.jpg'
                width={644}
                height={437}
              />
            </RevealFade>
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <MetricsSection id='experiencia'>
        <MetricsSectionContainer>
          <RevealFade>
            <Title
              content='Qual é a minha experiência?'
            />
          </RevealFade>
          <CountUpGroupContainer>
            <CountUpContainer>
              <CountUp
                start={5}
                end={9}
                prefix='+ de '
                decimal='.'
                decimals={3}
                className='countUp'
                duration={3}
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
                duration={4}
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
                duration={6}
              />
              <SubTitle
                content='Clientes satisfeitos'
              />
            </CountUpContainer>

          </CountUpGroupContainer>
        </MetricsSectionContainer>
      </MetricsSection>
      <TestimonialsSection id='oquedizem'>
        <TestimonialsSectionContainer>
          <Title
            content='O que meus clientes dizem'
          />
          <TestimonialsCardsContainer>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                personName={testimonial.name}
                personPhotoUrl={testimonial.url}
                testimonial={testimonial.testimonial}
                cardClassName='testimonialCard'
              />
            ))}
          </TestimonialsCardsContainer>
        </TestimonialsSectionContainer>
      </TestimonialsSection>
    </Container >
  )
}

export default Home
