import React, { FC } from 'react'
import Globe from '../Globe'

const Image: FC = () => {
  return (
    <Globe>
      <img className="absolute z-10 bottom-0" src="/prof.png" alt="Me" />
    </Globe>
  )
}

export default Image
