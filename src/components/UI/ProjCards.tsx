import { FC, useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { TechCard } from '@/components/UI'
import { listContainer, listItem } from '@/utils/animations'
import { Data } from '@/utils/types'
import projects from '@/data.json'

const ProjCards = () => {
  const data = projects
  const [selectedId, setSelectedId] = useState(null)

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
            <ProjCard {...proj} onClick={() => setSelectedId(proj.title)} />
          </motion.li>
        ))}
      </motion.ul>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="project-card"
            onClick={() => setSelectedId(null)}
          ></motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

interface ProjData extends Data {
  onClick?: () => void
}

const ProjCard: FC<ProjData> = ({ title, tech, logo, onClick }) => {
  return (
    <motion.div layoutId={title} className="project-card" onClick={onClick}>
      <span className="flex space-x-2 mb-2">
        <img src={logo} alt={title} className="h-10 w-10" />
        <h3 className="text-3xl self-end">{title}</h3>
      </span>
      <div className="flex flex-col sm:flex-row gap-2">
        <TechCard tech="frontend" data={tech.frontend} />
        <TechCard tech="backend" data={tech.backend} />
      </div>
    </motion.div>
  )
}

export { ProjCard, ProjCards }
