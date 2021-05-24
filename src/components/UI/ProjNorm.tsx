import { FC, useState } from 'react'
import { PrevButton } from '@/components/UI'
import { Data } from '@/utils/types'
import { motion, AnimatePresence } from 'framer-motion'

const ProjNorm: FC<Data> = ({ title, url, source, description, tech }) => {
  const [show, setShow] = useState(false)

  const clickHandler = () => {
    setShow((_show) => !_show)
  }

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      className="flex flex-col  project-card-2 items-center mt-5 min-w-fit group"
      onClick={clickHandler}
    >
      <motion.div
        layout
        className="w-full flex justify-between items-center group-hover:text-custom"
      >
        <motion.h4 layout className="text-3xl w-full">
          {title}
        </motion.h4>
        <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <motion.path
            animate={show ? { rotate: -180 } : { rotate: 0 }}
            fill="currentColor"
            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
          ></motion.path>
        </svg>
      </motion.div>
      <AnimatePresence>
        {show && (
          <Content
            url={url}
            source={source}
            tech={tech}
            description={description}
          />
        )}
      </AnimatePresence>
    </motion.li>
  )
}

const Content = ({ url, source, description, tech: { backend, frontend } }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full space-y-4"
    >
      <p className="text-xl">{description}</p>
      <span className="flex gap-2 flex-wrap">
        {frontend.map((tech) => (
          <span className="px-3 py-1 bg-gray-700 text-white rounded-lg text-xl">
            {tech}
          </span>
        ))}
        {backend.map((tech) => (
          <span className="px-3 py-1 bg-gray-700 text-white rounded-lg text-xl">
            {tech}
          </span>
        ))}
      </span>
      <div className="flex justify-center space-x-5 text-custom-offwhite sm:ml-auto mt-2 sm:mt-0">
        <PrevButton link={url} type="demo" />
        <PrevButton link={source} type="code" />
      </div>
    </motion.div>
  )
}

export { ProjNorm }
