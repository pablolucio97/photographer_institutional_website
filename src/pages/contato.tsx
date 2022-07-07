import { NextPage } from 'next'
import Head from 'next/head'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

import { SubTitle } from '../components/Typography/SubTitle'
import { Container } from '../layout/styles'
import {
  BannerSection,
  BannerSectionContainer
} from '../styles'
import {
  ContactSection,
  ContactSectionAddressContainer,
  ContactSectionContactContainer,
  ContactSectionContactInfoContainer,
  ContactSectionContainer,
  ContactSectionContentContainer,
  ContactSectionMapContainer,
  ContactSectionSocialContainer,
  MapContainer,
  SocialItemContainer
} from '../styles/contato'

import { GoogleMap } from '../components/Elements/GoogleMap'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'

import { googleMapAddress } from '../data/data'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { MdCall } from 'react-icons/md'

const Contato: NextPage = () => {


  function startChat(whatsappContact: string) {
    window.open(`http://api.whatsapp.com/send?phone=55${whatsappContact}`)
  }

  return (
    <Container>
      <Head>
        <title>Danilo Fotografias | Contato</title>
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
              <ContactSectionContactContainer>
                <SubTitle
                  content='Whatsapp'
                />
                <PrimaryButton
                  title='Iniciar conversa'
                  onClick={() => startChat('31985187963')}
                  className='whatsappButton'
                  size='large'
                  icon={
                    <MdCall
                      size={16}
                      style={{
                        marginRight: 4
                      }}
                    />
                  }
                />
              </ContactSectionContactContainer>
            </ContactSectionContactInfoContainer>
          </ContactSectionContentContainer>
        </ContactSectionContainer>
      </ContactSection>
    </Container >
  )
}

export default Contato
