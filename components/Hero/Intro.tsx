import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { IntroAnim } from '../../animations/hero'

const Intro: FC = () => {
  return (
    <div className="text-7xl sm:text-8xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={IntroAnim}
        className="flex items-center transform sm:-translate-x-8"
      >
        <p>H</p>
        <svg
          className="h-14 sm:h-20"
          viewBox="0 0 20 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="19.6838" height="19.6838" rx="9.84189" fill="#00E0EE" />
          <rect
            y="22.4395"
            width="19.6838"
            height="40.5605"
            rx="1.96838"
            fill="#00E0EE"
          />
        </svg>
        <p className="ml-7">I'm</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible2"
        variants={IntroAnim}
        className="flex items-center"
      >
        <svg
          className="h-14 sm:h-20"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="44.1375"
            y="22.4395"
            width="19.6838"
            height="40.5605"
            rx="1.96838"
            fill="#00E0EE"
          />
          <path
            d="M44.1375 1.1444C44.1375 0.512367 44.6498 0 45.2819 0C55.5209 0 63.8213 8.30036 63.8213 18.5394C63.8213 19.1714 63.3089 19.6838 62.6768 19.6838H46.1059C45.0188 19.6838 44.1375 18.8025 44.1375 17.7154V1.1444Z"
            fill="#00E0EE"
          />
          <rect
            x="22.0917"
            y="22.4395"
            width="19.6838"
            height="19.6838"
            rx="1.96838"
            fill="#00E0EE"
          />
          <rect
            x="22.0917"
            y="13.1225"
            width="19.6838"
            height="6.56123"
            rx="1.96838"
            fill="#00E0EE"
          />
          <rect
            x="0.0458374"
            y="22.4395"
            width="19.6838"
            height="40.5605"
            rx="1.96838"
            fill="#00E0EE"
          />
          <path
            d="M0.0458374 18.5654C0.0458374 8.312 8.35784 0 18.6112 0C19.2289 0 19.7296 0.500723 19.7296 1.1184V17.7154C19.7296 18.8025 18.8483 19.6838 17.7612 19.6838H1.16423C0.54656 19.6838 0.0458374 19.183 0.0458374 18.5654Z"
            fill="#00E0EE"
          />
        </svg>
        <p>ervin</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible3"
        variants={IntroAnim}
        className="flex items-center transform sm:translate-x-8"
      >
        <svg
          className="h-14 sm:h-20"
          viewBox="0 0 42 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2291 45.2727C22.2291 44.1856 23.1104 43.3043 24.1975 43.3043H40.4217C41.2453 43.3043 41.9129 43.9719 41.9129 44.7955C41.9129 54.843 33.7678 62.9881 23.7203 62.9881C22.8968 62.9881 22.2291 62.3204 22.2291 61.4969V45.2727Z"
            fill="#00E0EE"
          />
          <path
            d="M22.2291 1.40598C22.2291 0.62948 22.8586 0 23.6351 0C33.7297 0 41.9129 8.18324 41.9129 18.2778C41.9129 19.0543 41.2834 19.6838 40.5069 19.6838H24.1975C23.1104 19.6838 22.2291 18.8025 22.2291 17.7154V1.40598Z"
            fill="#00E0EE"
          />
          <path
            d="M0.183289 24.4079C0.183289 23.3208 1.06456 22.4395 2.15167 22.4395H17.8987C18.9858 22.4395 19.8671 23.3208 19.8671 24.4079V61.5736C19.8671 62.3614 19.2285 63 18.4407 63C8.35741 63 0.183289 54.8259 0.183289 44.7426V24.4079Z"
            fill="#00E0EE"
          />
          <path
            d="M0.183289 18.5779C0.183289 8.31763 8.50091 0 18.7612 0C19.372 0 19.8671 0.495097 19.8671 1.10583V17.7154C19.8671 18.8025 18.9858 19.6838 17.8987 19.6838H1.28912C0.678384 19.6838 0.183289 19.1887 0.183289 18.5779Z"
            fill="#00E0EE"
          />
        </svg>
        <p>hristian</p>
      </motion.div>
    </div>
  )
}

export default Intro
