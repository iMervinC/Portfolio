import React, { FC } from 'react'

const ProjCard = ({ title, tech }) => {
  return (
    <div className="flex flex-col cursor-pointer bg-custom-translucent hover:bg-custom p-4 rounded-md hover:text-black text-custom-offwhite transition-colors duration-500 ease-in-out">
      <h3 className="text-3xl">{title}</h3>
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
  return (
    <div
      className={`flex flex-col text-custom-offwhite p-2 rounded-md sm:w-1/2 transform hover:scale-105 transition-transform ${
        tech === 'frontend'
          ? 'bg-blue-500'
          : tech === 'backend' && 'bg-purple-800'
      }`}
    >
      <span className="">{`${
        tech === 'frontend' ? '#frontend' : tech === 'backend' && '#backend'
      }`}</span>
      <span className="flex flex-wrap items-center justify-center gap-2 bg-custom-offwhite p-1 rounded-md text-black">
        {data.map((_tech, index) => (
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
