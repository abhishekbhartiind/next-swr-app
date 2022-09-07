import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from 'react'
import axios from 'axios'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import '@styles/globals.css'
import { SWRConfig } from 'swr'

axios.defaults.baseURL = 'http://localhost:3001'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const M = require('materialize-css')
    M.AutoInit()
  }, [])

  return (
    <SWRConfig value={{ fetcher: (url: string) => axios(url).then((res) => res.data) }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
