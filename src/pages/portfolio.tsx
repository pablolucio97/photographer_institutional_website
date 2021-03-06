import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { BsCalendar2Event, BsFlower1 } from 'react-icons/bs'
import { FaBirthdayCake } from 'react-icons/fa'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

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

console.log(eventPhotos[0][0])


const Portfolio: NextPage = () => {

  const [modalImage, setModalImage] = useState(false)
  const [currentImageView, setCurrentImageView] = useState('')

  function handleModalImage() {
    setModalImage(!modalImage)
  }

  function updateCurrentImageView(img: string) {
    setCurrentImageView(img)
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
      <BannerSection id='portfolio'>
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
                  <ImageContainer
                    key={item}
                  >
                    <RevealFade>
                      <NextImage
                        imgUrl={item}
                        height={240}
                        width={320}
                        onClick={() => {
                          handleModalImage(),
                            updateCurrentImageView(item)
                        }}
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
                    key={item}
                  >
                    <RevealFade>
                      <NextImage
                        imgUrl={item}
                        height={240}
                        width={320}
                        onClick={() => {
                          handleModalImage(),
                            updateCurrentImageView(item)
                        }}
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
                  <ImageContainer
                    key={item}
                  >
                    <RevealFade>
                      <NextImage
                        imgUrl={item}
                        height={240}
                        width={320}
                        onClick={() => {
                          handleModalImage(),
                            updateCurrentImageView(item)
                        }}
                      />
                    </RevealFade>
                  </ImageContainer>
                ))
              ))}
            </PortfolioBirthdaysImagesContainer>
          </PortfolioBirthdaysContainer>
        </PortfolioSectionContainer>
      </PortfolioSection>
      <ModalBox
        isOpen={modalImage}
        onRequestClose={handleModalImage}
        modalClassName='modal-image'
        overlayClassName='react-modal-overlay'
      >
        <NextImage
          imgUrl={currentImageView}
          width={1600}
          height={920}
        />

      </ModalBox>

    </Container >
  )
}

export default Portfolio
