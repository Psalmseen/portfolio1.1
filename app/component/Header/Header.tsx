'use client';
import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
  SocialIcons,
} from './HeaderStyle';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <Span
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: 20,
          }}
        >
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={'#projects'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#tech'}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#about'}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/psalmseen">
        <AiFillGithub size={'3rem'} />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/samson-oyebamiji-aa43b71b0/">
        <AiFillLinkedin size={'3rem'} />
      </SocialIcons>
      <SocialIcons href="https://wa.link/q9ol07">
        <AiOutlineWhatsApp size={'3rem'} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
