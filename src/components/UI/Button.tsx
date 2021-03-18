import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { prevAnim } from '@/utils/animations'

const btnAnim = {
  hidden: { x: 0 },
  left: { x: -30 },
  right: { x: 30 },
}

const Button: FC<{ animD?: 'left' | 'right'; onClick?: () => void }> = ({
  children,
  animD,
  onClick,
}) => {
  return (
    <motion.button
      variants={btnAnim}
      initial="hidden"
      animate={animD}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="btn btn__hover"
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

const CloseBtn = ({ onClick }) => {
  return (
    <motion.div
      variants={prevAnim}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-500 h-10 w-10 absolute right-2 top-2 flex items-center justify-center rounded-full btn-close"
    >
      <div className="w-5 h-1 rounded-lg transform -rotate-45 absolute"></div>
      <div className="w-5 h-1 rounded-lg transform rotate-45 absolute"></div>
    </motion.div>
  )
}

export { Button, CloseBtn }
