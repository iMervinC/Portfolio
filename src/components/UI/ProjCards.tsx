import { FC, useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { TechCard } from '@/components/UI'
import { listContainer, listItem } from '@/utils/animations'
import { Data } from '@/utils/types'
import projects from '@/data.json'

const ProjCards = () => {
  const data = projects
  const [selectedId, setSelectedId] = useState<string>(null)
  const [selectedProj, setSelectedProj] = useState<Data>(null)

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.ul
        variants={listContainer}
        initial="initial"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5"
      >
        {data.map((proj, index) => (
          <motion.li variants={listItem} key={index}>
            <ProjCard
              {...proj}
              onClick={() => {
                setSelectedId(proj.title)
                setSelectedProj(proj)
              }}
            />
          </motion.li>
        ))}
      </motion.ul>
      <AnimatePresence>
        {selectedId && (
          <PreviewProj
            {...selectedProj}
            onClick={() => {
              setSelectedId(null)
              setSelectedProj(null)
            }}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
interface ProjData extends Data {
  onClick?: () => void
}

const PreviewProj: FC<ProjData> = ({
  title,
  tech,
  logo,
  preview,
  description,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed flex items-center justify-center top-0 left-0 h-screen w-screen bg-custom-trans-black"
      onClick={onClick}
    >
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.3, type: 'tween' }}
        style={{ pointerEvents: 'auto' }}
        layoutId={title}
        className="flex bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={preview} alt={title} className="h-auto w-96" />
        <motion.span layoutId={`img-${title}`} className="flex space-x-2 mb-2">
          <img src={logo} alt={title} className="h-10 w-10" />
          <h3 className="text-3xl self-end">{title}</h3>
        </motion.span>
        <p>{description.substring(0, 100)}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <TechCard title={title} tech="frontend" data={tech.frontend} />
          <TechCard title={title} tech="backend" data={tech.backend} />
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjCard: FC<ProjData> = ({ title, tech, logo, onClick }) => {
  return (
    <motion.div layoutId={title} className="project-card" onClick={onClick}>
      <motion.span layoutId={`img-${title}`} className="flex space-x-2 mb-2">
        <img src={logo} alt={title} className="h-10 w-10" />
        <h3 className="text-3xl self-end">{title}</h3>
      </motion.span>
      <div className="flex flex-col sm:flex-row gap-2">
        <TechCard title={title} tech="frontend" data={tech.frontend} />
        <TechCard title={title} tech="backend" data={tech.backend} />
      </div>
    </motion.div>
  )
}

export { ProjCard, ProjCards }
