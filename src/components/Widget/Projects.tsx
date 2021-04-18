import { ProjNorm } from '@/components/UI'
import { FC } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import projects from '@/data.json'

const Projects: FC<{ gridSpan: string }> = ({ gridSpan }) => {
  const data = projects.filter((proj) => proj.featured === false)

  return (
    <AnimateSharedLayout>
      <div className={gridSpan}>
        <h2 className="text-5xl text-white">Projects</h2>
        <motion.ul layout>
          {data.map((proj) => (
            <ProjNorm {...proj} />
          ))}
        </motion.ul>
      </div>
    </AnimateSharedLayout>
  )
}

export { Projects }
