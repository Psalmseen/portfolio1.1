import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '@/app/styles/GlobalComponents';

import { Box, BoxNum, BoxText, Boxes } from './AccomplishmentStyles';
import { AccomplishmentData } from '@/app/constants/constants';
const Accomplishment = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishmentData.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum> {number}+</BoxNum>
          <BoxText> {text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishment;
