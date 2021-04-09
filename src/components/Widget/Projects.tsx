import { ProjNorm } from '@/components/UI'
import { FC } from 'react'
import projects from '@/data.json'

const Projects: FC<{ gridSpan: string }> = ({ gridSpan }) => {
  const data = projects.filter((proj) => proj.featured === false)

  return (
    <div className={gridSpan}>
      <h2 className="text-5xl text-white">Projects</h2>
      {data.map((proj) => (
        <ProjNorm {...proj} />
      ))}
    </div>
  )
}

export { Projects }
