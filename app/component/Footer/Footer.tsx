import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import {
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  CompanyContainer,
  FooterWrapper,
  SocialIconsContainer,
  Slogan,
  SocialContainer,
} from './FooterStyles';
import { SocialIcons } from '../Header/HeaderStyle';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348102545216">08102545216</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:samsonoyebamiji02@gmail.com">
            Samsonoyebamiji02@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/psalmseen">
            <AiFillGithub size={'3rem'} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/samson-oyebamiji-aa43b71b0/">
            <AiFillLinkedin size={'3rem'} />
          </SocialIcons>
          <SocialIcons href="https://wa.link/q9ol07">
            <AiOutlineWhatsApp size={'3rem'} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};
export default Footer;
