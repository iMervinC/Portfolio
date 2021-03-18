import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { IntroAnim } from '@/animations/hero'
import TextLoop from 'react-text-loop'
import { Button } from '../UI'

export const Intro: FC = () => {
  const router = useRouter()

  return (
    <div className="text-5xl sm:text-7xl md:text-8xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={IntroAnim}
        className="text-center transform sm:-translate-x-8"
      >
        <TextLoop>
          <span>👋Kumusta</span>
          <span>🌊Ahoy</span>
          <span>🌺Aloha</span>
          <span>🤠Howdy</span>
        </TextLoop>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible2"
        variants={IntroAnim}
        className="flex items-center"
      >
        <span className="mr-4">I'm</span>
        <svg
          className="h-12 sm:h-14 md:h-20"
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
        <span>ervin</span>
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-2 mt-5">
        <Button animD="left" onClick={() => router.push('/projects')}>
          My Work
        </Button>
        <Button animD="right" onClick={() => router.push('/contacts')}>
          Contact Me
        </Button>
      </div>
    </div>
  )
}
