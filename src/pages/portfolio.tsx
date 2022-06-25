
import { Title } from '../components/Typography/Title'
import Image from 'next/image'
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
  PortfolioWeddingsImagesContainer,

} from '../styles/portfolio'

import {
  BannerSection,
  BannerSectionContainer,
} from '../styles'
import { birthdaysPhotoUrls, eventsPhotoUrls, portfolioPhotos, weddingsPhotoUrls } from '../data/data'
import { NextImage } from '../components/Next/NextImage'
import { NextPage } from 'next'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsCalendar2Event, BsFlower1 } from 'react-icons/bs'
import { RevealFade } from '../components/Animations/RevealFade'
import { SubTitle } from '../components/Typography/SubTitle'
import { ModalBox } from '../components/Modals/ModalBox'
import { useEffect, useState } from 'react'
import { ImageSlider } from '../components/Elements/ImageSlider'


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
    return <img src={path} width='100%' height='auto' />
  }

  return (
    <Container>
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
