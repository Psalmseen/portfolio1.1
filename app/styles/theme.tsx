import { ThemeProvider } from 'styled-components';

import theme from '../theme/index';
import GlobalStyles from './global';

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
