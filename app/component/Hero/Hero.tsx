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
        The purpose of JavaScript Mastery is to help aspiring and established
        developers to take their development skils to the next level and build
        awesome app
      </SectionText>
      <Button
        onClick={() => {
          window.location = 'https://google.com';
        }}
      >
        {' '}
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
