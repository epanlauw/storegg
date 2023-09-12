/* eslint-disable react/jsx-props-no-spreading */
import "../styles/utilities.css";
import "../styles/homepage.css";
import "../styles/detail.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
