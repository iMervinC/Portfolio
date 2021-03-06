import React from 'react'

const ProjCard = ({ title, tech }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-5 cursor-pointer bg-custom-translucent hover:bg-custom p-2 rounded-md text-black">
      <div>
        <h3 className="text-3xl">{title}</h3>
        <div className="flex flex-col bg-blue-500 text-custom-offwhite p-2 rounded-md">
          <span>#frontend</span>
          <span className="flex items-center justify-center gap-2 bg-custom-offwhite p-1 rounded-md text-black">
            {tech.frontend.map((tech) => (
              <img
                className="w-10 h-10"
                src={`/logos/${tech}.svg`}
                alt={tech}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export { ProjCard }
