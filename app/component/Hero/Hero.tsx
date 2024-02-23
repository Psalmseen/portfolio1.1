import React from 'react';

import { LeftSection } from './HeroStyle';
import Button from '../../styles/GlobalComponents/Button';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents/index';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a hard working and self motivated frontend developer, with an eye
        for elegant application, and experience in building and maintaining
        responsive and progressive websites and application.
      </SectionText>
      <Button
        onClick={() => {
          window.open('https:github.com/psalmseen', '_blank');
        }}
      >
        {' '}
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
