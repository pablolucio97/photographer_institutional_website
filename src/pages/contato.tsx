import { NextPage } from 'next'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

import {
  BannerSection,
  BannerSectionContainer,
} from '../styles'
import { SubTitle } from '../components/Typography/SubTitle'
import {
  ContactSection,
  ContactSectionAddressContainer,
  ContactSectionContactInfoContainer,
  ContactSectionContainer,
  ContactSectionContentContainer,
  ContactSectionMapContainer,
  ContactSectionSocialContainer,
  MapContainer,
  SocialItemContainer
} from '../styles/contato'
import { Container } from '../layout/styles'

import { GoogleMap } from '../components/Elements/GoogleMap'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'

import { googleMapAddress } from '../data/data'

const Home: NextPage = () => {

  return (
    <Container>
      <BannerSection id='home'>
        <BannerSectionContainer>
        </BannerSectionContainer>
      </BannerSection>
      <ContactSection>
        <ContactSectionContainer>
          <Title
            content='Contato'
          />
          <ContactSectionContentContainer>
            <ContactSectionMapContainer>
              <SubTitle
                content='Visite meu stúdio'
              />
              <MapContainer>
                <GoogleMap
                  addressUrl={googleMapAddress}
                  size='small'
                />
              </MapContainer>
            </ContactSectionMapContainer>
            <ContactSectionContactInfoContainer>
              <ContactSectionSocialContainer>
                <SubTitle
                  content='Redes sociais'
                />
                <SocialItemContainer>
                  <FiInstagram className='socialContactIcons' />
                  <Text
                    content='@danilophotographer'
                  />
                </SocialItemContainer>
                <SocialItemContainer>
                  <FiFacebook className='socialContactIcons' />
                  <Text
                    content='danilophotographer'
                  />
                </SocialItemContainer>
                <SocialItemContainer>
                  <FiLinkedin className='socialContactIcons' />
                  <Text
                    content='danilophotographer-3655'
                  />
                </SocialItemContainer>
              </ContactSectionSocialContainer>
              <ContactSectionAddressContainer>
                <SubTitle
                  content='Endereço'
                />
                <Text
                  content='Rua João Ozório, número 123, João Monlevade - MG.'
                />
              </ContactSectionAddressContainer>
            </ContactSectionContactInfoContainer>
          </ContactSectionContentContainer>
        </ContactSectionContainer>
      </ContactSection>
    </Container >
  )
}

export default Home
