import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { TechCard } from '@/components/UI'
import { ProjData } from '@/utils/types'

const prevAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const PreviewProj: FC<ProjData> = ({
  title,
  tech,
  logo,
  preview,
  description,
  onClick,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false)

  return (
    <motion.div
      className="flex fixed items-center justify-center top-0 left-0 h-screen w-screen bg-custom-trans-black z-50"
      onClick={onClick}
    >
      <motion.div
        layout
        layoutId={title}
        className="flex flex-col lg:flex-row gap-5 bg-black p-5 rounded-md border-2 border-white border-solid sm:w-3/5"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          variants={prevAnim}
          initial="hidden"
          animate="visible"
          exit="exit"
          src={preview}
          alt={title}
          className="h-80 w-96 bg-custom self-center sm:self-start"
        />
        <motion.div className="flex flex-col gap-2">
          <motion.span
            className="flex flex-row space-x-2 mb-2 w-fit"
            layoutId={`${title}-header`}
          >
            <img src={logo} alt={title} className="h-10 w-10 rounded-md" />
            <h3 className="text-3xl self-end">{title}</h3>
          </motion.span>
          <motion.span
            variants={prevAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1"
          >
            {description.length < 250
              ? description
              : readMore
              ? description
              : description.substring(0, 200).padEnd(203, '.')}
          </motion.span>
          {description.length > 250 && (
            <span
              className="hover:text-custom"
              onClick={() => setReadMore((read) => !read)}
            >{`${readMore ? 'Read Less' : 'Read More'}`}</span>
          )}
          <div className="flex flex-col sm:flex-row gap-2 mt-auto">
            <TechCard title={title} tech="frontend" data={tech.frontend} />
            <TechCard title={title} tech="backend" data={tech.backend} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
