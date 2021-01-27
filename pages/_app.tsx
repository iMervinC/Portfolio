import { AppProps } from 'next/app'
import '../styles/tailwind.css'
import '../styles/directives.css'
import '../styles/main.scss'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="frame-v left-0 bg-custom-offwhite"></div>
      <div className="frame-v right-0 bg-custom-offwhite"></div>
      <div className="frame-h top-0 bg-custom-offwhite"></div>
      <div className="frame-h bottom-0 bg-custom-offwhite"></div>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}
