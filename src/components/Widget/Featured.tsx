import { ProjCard } from '@/components/UI'
import projects from './data.json'

export const Featured = () => {
  const data = projects
  return (
    <div id="featured" className="my-20">
      <h2 className="text-5xl sm:text-6xl text-custom">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-5">
        {data.map((proj, index) => (
          <ProjCard key={index} {...proj} />
        ))}
      </div>
    </div>
  )
}
