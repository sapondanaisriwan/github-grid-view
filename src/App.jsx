import Page from './page/Page';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './index.css';

function App() {
  return (
    <NextUIProvider className="w-full min-w-[300px] max-w-[500px]">
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Page />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
