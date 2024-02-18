'use client';

import Theme from './styles/theme';

import { Layout } from './layout/Layout';
import { Section } from './styles/GlobalComponents';
import Hero from './component/Hero/Hero';
import BackgroundAnimation from './component/BgAnimation/BgAnimation';
import Projects from './component/Project/Projects';
import Technologies from './component/Technologies/Technologies';
import TimeLine from './component/TimeLine/TimeLine';
import Accomplishments from './component/Accomplishment/Accomplishment';
export default function Home() {
  return (
    <Theme>
      <Layout>
        <Section grid>
          <Hero />
          <BackgroundAnimation />
        </Section>
        <Projects />
        <Technologies />
        <TimeLine />
        <Accomplishments />
      </Layout>
    </Theme>
  );
}
