import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const M = require('materialize-css')
    M.AutoInit()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
