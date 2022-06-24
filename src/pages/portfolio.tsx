
import { Title } from '../components/Typography/Title'
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
import { portfolioPhotos } from '../data/data'
import { NextImage } from '../components/Next/NextImage'
import { NextPage } from 'next'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsCalendar2Event, BsFlower1 } from 'react-icons/bs'
import { RevealFade } from '../components/Animations/RevealFade'
import { SubTitle } from '../components/Typography/SubTitle'

const eventPhotos = portfolioPhotos.map(photo => photo.events.map(event => event.url))
const weddingPhotos = portfolioPhotos.map(photo => photo.weddings.map(wedding => wedding.url))
const birthdayPhotos = portfolioPhotos.map(photo => photo.birthdays.map(birthday => birthday.url))

const Home: NextPage = () => {

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
                  <ImageContainer key={item}>
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
                  <ImageContainer key={item}>
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
                  <ImageContainer key={item}>
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
      </PortfolioSection>
    </Container >
  )
}

export default Home
