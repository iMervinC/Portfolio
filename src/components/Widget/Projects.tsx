import { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProjNorm } from '@/components/UI'
import useWindowSize from '@/hooks/useWindowSize'
import { motion, AnimateSharedLayout, useAnimation } from 'framer-motion'
import projects from '@/data.json'

const Projects: FC<{ gridSpan: string }> = ({ gridSpan }) => {
  const data = projects.filter((proj) => proj.featured === false)
  const { width } = useWindowSize()
  const { ref, inView, entry } = useInView()
  const control = useAnimation()

  useEffect(() => {
    inView && control.start({ opacity: 1, y: 0 })
  }, [inView])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100 }}
      animate={control}
      className={gridSpan}
      transition={{ delay: width > 1029 ? 2 : 0 }}
      ref={ref}
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
