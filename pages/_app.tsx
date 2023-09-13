/* eslint-disable react/jsx-props-no-spreading */
import "../styles/utilities.css";
import "../styles/homepage.css";
import "../styles/detail.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/sign-in.css";
import "../styles/sign-up.css";
import "../styles/sign-up-photo.css";
import "../styles/sign-up-success.css";
import "../styles/404-not-found.css";
import "../styles/overview.css";
import "../styles/sidebar.css";
import "../styles/transactions.css";
import "../styles/transactions-detail.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
