import { FC } from 'react'
import { motion } from 'framer-motion'
import { TechCard, CloseBtn } from '@/components/UI'
import { ProjData } from '@/utils/types'
import { prevAnim } from '@/utils/animations'

export const PreviewProj: FC<ProjData> = ({
  title,
  tech,
  logo,
  preview,
  description,
  source,
  url,
  onClick,
}) => {
  return (
    <motion.div
      className="flex fixed items-center justify-center top-0 left-0 h-screen w-screen bg-custom-trans-black z-50"
      onClick={onClick}
    >
      <motion.div
        layout
        layoutId={title}
        className="relative max-h-screen flex flex-col lg:flex-row gap-5 bg-black p-5 rounded-md border-2 border-white border-solid sm:w-3/5 overflow-auto overflow-x-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={onClick} />
        <motion.img
          variants={prevAnim}
          initial="hidden"
          animate="visible"
          exit="exit"
          src={preview}
          alt={title}
          className="h-80 w-96 bg-custom self-center sm:self-start rounded-md"
        />
        <motion.div className="flex flex-col gap-2 sm:h-80">
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
            className="sm:text-lg overflow-auto scroller"
          >
            {description}
          </motion.span>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto">
            <TechCard title={title} tech="frontend" data={tech.frontend} />
            <TechCard title={title} tech="backend" data={tech.backend} />
          </div>

          <motion.div
            variants={prevAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-start space-x-5"
          >
            <a
              href={source}
              target="_blank"
              className="flex items-center w-fit space-x-2"
            >
              <img src="/logos/github.svg" alt="github" className="w-7 h-7" />
              <span className="links hover:text-custom text-lg">Code</span>
            </a>
            <a
              href={url}
              target="_blank"
              className="flex items-center w-fit space-x-2 "
            >
              <img src="/logos/live.svg" alt="github" className="w-7 h-7" />
              <span className="links hover:text-custom text-lg">Demo</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
