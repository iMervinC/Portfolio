import '@/styles/main.scss'
import '@/styles/tailwind.css'
import '@/styles/directives.css'
import { AppProps } from 'next/app'
import { Nav } from '@/components/Nav'
import { Frame } from '@/components/UI'
import { pageAnim } from '@/animations/frame'
import { NavProvider } from '@/hooks/useCtxNav'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <NavProvider>
      <Frame />
      <Nav />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageIn"
          animate="animatePage"
          exit="pageExit"
          variants={pageAnim}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </NavProvider>
  )
}
