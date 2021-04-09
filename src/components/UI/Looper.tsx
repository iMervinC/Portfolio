import { FC, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Looper: FC<{ content: string[] }> = ({ content }) => {
  const [loop, setLoop] = useState(0)

  const tags = content.map((str, index) => (
    <motion.span
      key={index}
      className="z-0"
      initial={{ opacity: 0, height: 0, width: 0 }}
      animate={{ opacity: 1, height: 'auto', width: 'auto' }}
      exit={{ opacity: 0, height: 0, width: 0 }}
      transition={{ duration: 0.3, delay: 1, ease: 'easeInOut' }}
    >
      {str}
    </motion.span>
  ))

  useEffect(() => {
    let looper = setInterval(() => {
      if (loop !== content.length - 1) {
        setLoop((loop) => loop + 1)
      } else {
        setLoop(0)
      }
    }, 2000)
    return () => {
      clearInterval(looper)
    }
  }, [loop])
  return <AnimatePresence>{tags[loop]}</AnimatePresence>
}
