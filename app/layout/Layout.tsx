import React from 'react';

import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import { Container } from './LayoutStyle';

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
