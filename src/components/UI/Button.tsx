import React, { FC } from 'react'
import { motion } from 'framer-motion'

const btnAnim = {
  hidden: { x: 0 },
  left: { x: -30 },
  right: { x: 30 },
}

const Button: FC<{ animD?: 'left' | 'right' }> = ({ children, animD }) => {
  return (
    <motion.button
      variants={btnAnim}
      initial="hidden"
      animate={animD}
      transition={{ delay: 0.3, duration: 0.8 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn__hover"
    >
      {children}
    </motion.button>
  )
}

export { Button }
