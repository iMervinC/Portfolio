import { FC } from 'react'
import { motion } from 'framer-motion'
import techStack from '@/techStack.json'

const TechStacks: FC<{ gridSpan: string }> = ({ gridSpan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.3 }}
      className={gridSpan}
    >
      <TechStack title="My Tech Stack" techs={techStack.myStack} />
      <TechStack
        title="Currently Hacking"
        techs={techStack.currentlyHacking}
        sub
      />
      <TechStack title="Up Next!" techs={techStack.interestingTech} sub />
    </motion.div>
  )
}

export { TechStacks }

const TechStack: FC<{
  title: string
  techs?: string[]
  sub?: boolean
}> = ({ title, techs, sub }) => {
  return (
    <>
      <h2 className={`text-white ${sub ? 'text-3xl mt-3' : 'text-4xl'}`}>
        {title}
      </h2>
      <div
        className={`flex flex-wrap gap-4 mt-5 border-solid border-white bg-gray-800 rounded-2xl p-4 w-fit ${
          sub ? 'border-2' : 'border-4'
        }`}
      >
        {techs?.map((tech, index) => (
          <img
            key={index}
            className={`inline w-auto ${sub ? 'h-9' : 'h-12'}`}
            src={`/logos/${tech}.svg`}
            alt={tech}
          />
        ))}
        {title === 'Up Next!' && (
          <img
            className={`inline w-auto ${sub ? 'h-9' : 'h-12'}`}
            src="/react-testing-lib.png"
            alt="react-testing-lib"
          />
        )}
      </div>
    </>
  )
}
