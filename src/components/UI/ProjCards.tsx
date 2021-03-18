import { FC, useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { TechCard, PreviewProj } from '@/components/UI'
import { listContainer, listItem } from '@/utils/animations'
import { Data, ProjData } from '@/utils/types'
import projects from '@/data.json'

const ProjCards = () => {
  const data = projects.filter((proj) => proj.featured === true)
  const [selectedProj, setSelectedProj] = useState<Data>(null)

  return (
    <AnimateSharedLayout type="switch">
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
                setSelectedProj(proj)
              }}
            />
          </motion.li>
        ))}
      </motion.ul>
      <AnimatePresence>
        {selectedProj && (
          <PreviewProj
            {...selectedProj}
            onClick={() => {
              setSelectedProj(null)
            }}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

const ProjCard: FC<ProjData> = ({ title, tech, logo, onClick }) => {
  return (
    <motion.div layoutId={title} className="project-card" onClick={onClick}>
      <motion.span
        layoutId={`${title}-header`}
        className="flex space-x-2 mb-2 w-fit"
      >
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
