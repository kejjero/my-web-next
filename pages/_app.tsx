import { appWithTranslation } from 'next-i18next';
import App, { AppContext } from 'next/app';
import { NextPage } from 'next';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { MainLayout } from '../components';
// @ts-ignore
import { i18n } from '../next-i18next.config';

import '../scss/globals.scss'
import '../scss/app.scss';

function MyApp({ Component, pageProps }: { Component: NextPage; pageProps: any }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  let appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithTranslation(MyApp, { i18n });
