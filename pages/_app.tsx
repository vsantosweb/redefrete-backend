import React, { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from '../theme'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router'
import type { NextPage } from 'next';
import { layout, Layout, LayoutProps } from '../resources/layouts';
import "../resources/fonts/line-awesome-1.3.0/1.3.0/css/line-awesome.min.css";
import { RouteGuard, RouteGuardContext } from '../RouteGuard';
import '@inovua/reactdatagrid-enterprise/index.css'
import '@inovua/reactdatagrid-enterprise/theme/pink-light.css'

type PageConfigProps = {
  title?: string,
  description?: string
  layout?: layout

}
export type Page = NextPage & {
  config?: PageConfigProps
}

type AppPropsWithLayout = AppProps & {
  Component: Page
}

function App({ Component, pageProps }: AppPropsWithLayout) {

  return (
    <Theme>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>{Component?.config?.title || null}</title>
      </Head>
      <RouteGuard>
        <Layout title={Component?.config?.title} layout={Component.config.layout}>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </Theme>

  )
}

export default App
