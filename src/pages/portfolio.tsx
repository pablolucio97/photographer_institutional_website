import { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { BsCalendar2Event, BsFlower1 } from 'react-icons/bs'
import { FaBirthdayCake } from 'react-icons/fa'

import {
  Container,
  ImageContainer,
  PortfolioBirthdaysContainer,
  PortfolioBirthdaysImagesContainer,
  PortfolioEventsContainer,
  PortfolioEventsImagesContainer,
  PortfolioSection,
  PortfolioSectionContainer,
  PortfolioWeddingsContainer,
  PortfolioWeddingsImagesContainer
} from '../styles/portfolio'

import {
  BannerSection,
  BannerSectionContainer
} from '../styles'

import { RevealFade } from '../components/Animations/RevealFade'
import { ModalBox } from '../components/Modals/ModalBox'
import { NextImage } from '../components/Next/NextImage'
import { SubTitle } from '../components/Typography/SubTitle'

import { portfolioPhotos } from '../data/data'

const eventPhotos = portfolioPhotos.map(photo => photo.events.map(event => event.url))
const weddingPhotos = portfolioPhotos.map(photo => photo.weddings.map(wedding => wedding.url))
const birthdayPhotos = portfolioPhotos.map(photo => photo.birthdays.map(birthday => birthday.url))

const Home: NextPage = () => {

  console.log(eventPhotos)

  const [modal, setModal] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  function handleToggleModal() {
    setModal(!modal)
  }

  function renderImage(path: string) {
    //eslint-disable-next-line
    return <img src={path} width='100%' height='auto' />
  }

  return (
    <Container>
      <Head>
        <title>Danilo Fotografias | Portifólio</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection id='home'>
        <BannerSectionContainer>
        </BannerSectionContainer>
      </BannerSection>
      <PortfolioSection>
        <PortfolioSectionContainer>
          <PortfolioEventsContainer>
            <BsCalendar2Event
              className='portfolioIcons'
            />
            <SubTitle
              content='Eventos e reuniões'
            />
            <PortfolioEventsImagesContainer>
              {eventPhotos.map(photo => (
                photo.map(item => (
                  <ImageContainer key={item}
                    onClick={() => {
                      handleToggleModal(),
                        setCurrentImage(item)
                    }}
                  >
                    <RevealFade>
                      <NextImage
                        imgUrl={item}
                        height={240}
                        width={320}
                      />
                    </RevealFade>

                  </ImageContainer>
                ))
              ))}
            </PortfolioEventsImagesContainer>
          </PortfolioEventsContainer>
          <PortfolioWeddingsContainer>
            <BsFlower1
              className='portfolioIcons'
            />
            <SubTitle
              content='Casamentos'
            />
            <PortfolioWeddingsImagesContainer>
              {weddingPhotos.map(photo => (
                photo.map(item => (
                  <ImageContainer
                    onClick={() => {
                      handleToggleModal(),
                        setCurrentImage(item)
                    }}
                    key={item}>
                    <RevealFade>
                      <NextImage
                        imgUrl={item}
                        height={240}
                        width={320}
                      />
                    </RevealFade>

                  </ImageContainer>
                ))
              ))}
            </PortfolioWeddingsImagesContainer>
          </PortfolioWeddingsContainer>
          <PortfolioBirthdaysContainer>
            <FaBirthdayCake
              className='portfolioIcons'
            />
            <SubTitle
              content='Aniversários'
            />
            <PortfolioBirthdaysImagesContainer>
              {birthdayPhotos.map(photo => (
                photo.map(item => (
                  <ImageContainer onClick={() => {
                    handleToggleModal(),
                      setCurrentImage(item)
                  }}
                    key={item}>
                    <RevealFade>
                      <NextImage
                        imgUrl={item}
                        height={240}
                        width={320}
                      />
                    </RevealFade>

                  </ImageContainer>
                ))
              ))}
            </PortfolioBirthdaysImagesContainer>
          </PortfolioBirthdaysContainer>
        </PortfolioSectionContainer>
        <ModalBox
          isOpen={modal}
          onRequestClose={handleToggleModal}
          modalClassName='modalImage'
          overlayClassName='react-modal-overlay'
        >
          {renderImage(currentImage)}
        </ModalBox>
      </PortfolioSection>

    </Container >
  )
}

export default Home
