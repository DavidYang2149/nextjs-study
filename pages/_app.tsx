// eslint-disable-next-line import/extensions
import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from 'src/slices/store';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
