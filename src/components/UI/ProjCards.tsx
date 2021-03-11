import { motion } from 'framer-motion'
import { TechCard } from '@/components/UI'
import { listContainer, listItem } from '@/utils/animations'
import projects from '@/data.json'
import { useState } from 'react'

const ProjCards = () => {
  const data = projects
  return (
    <motion.ul
      variants={listContainer}
      initial="initial"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5"
    >
      {data.map((proj, index) => (
        <motion.li variants={listItem} key={index}>
          <ProjCard {...proj} />
        </motion.li>
      ))}
    </motion.ul>
  )
}

const ProjCard = ({ title, tech, logo }) => {
  return (
    <motion.div layout className="project-card">
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
