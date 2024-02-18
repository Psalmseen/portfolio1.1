import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oyebamiji A. Samson',
  description: 'This is a portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
