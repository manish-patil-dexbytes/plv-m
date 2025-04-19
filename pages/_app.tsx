import '../styles.css'; // ✅ Global CSS should only be imported here
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
