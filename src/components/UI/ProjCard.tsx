import React, { FC } from 'react'

const ProjCard = ({ title, tech, logo }) => {
  return (
    <div
      className="flex flex-col cursor-pointer  p-4 rounded-md border-2 border-solid border-white text-custom-offwhite 
    hover:text-custom  transition-all duration-200 ease-in-out hover:shadow-custom transform hover:-translate-y-1 hover:translate-x-1"
    >
      <span className="flex space-x-2 mb-2">
        <img src={logo} alt={title} className="h-10 w-10" />
        <h3 className="text-3xl self-end">{title}</h3>
      </span>
      <div className="flex flex-col sm:flex-row gap-2">
        <TechCard tech="frontend" data={tech.frontend} />
        <TechCard tech="backend" data={tech.backend} />
      </div>
    </div>
  )
}

const TechCard: FC<{ tech: 'frontend' | 'backend'; data: string[] }> = ({
  tech,
  data,
}) => {
  if (data.length <= 0) return null

  return (
    <div
      className={`flex flex-col flex-1 text-custom-offwhite p-2 rounded-md sm:w-1/2 transform hover:scale-105 transition-transform ${
        tech === 'frontend'
          ? 'bg-blue-500'
          : tech === 'backend' && 'bg-purple-800'
      }`}
    >
      <span className="">{`${
        tech === 'frontend' ? '#frontend' : tech === 'backend' && '#backend'
      }`}</span>
      <span className="flex flex-wrap items-center justify-center gap-2 bg-custom-offwhite p-1 rounded-md text-black">
        {data?.map((_tech, index) => (
          <img
            key={index}
            className="w-6 h-6"
            src={`/logos/${_tech}.svg`}
            alt={_tech}
          />
        ))}
      </span>
    </div>
  )
}

export { ProjCard, TechCard }
