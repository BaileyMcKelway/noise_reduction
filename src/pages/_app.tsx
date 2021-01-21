/* eslint-disable react/react-in-jsx-scope */
import '../styles/main.scss';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
