import { ProjNorm } from '@/components/UI'
import { FC } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import projects from '@/data.json'

const Projects: FC<{ gridSpan: string }> = ({ gridSpan }) => {
  const data = projects.filter((proj) => proj.featured === false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className={gridSpan}
    >
      <AnimateSharedLayout>
        <h2 className="text-5xl text-white">Projects</h2>
        <motion.ul layout>
          {data.map((proj) => (
            <ProjNorm key={proj.title} {...proj} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </motion.div>
  )
}

export { Projects }
