import { FC } from 'react'

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
      <span>{`${
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

export { TechCard }
