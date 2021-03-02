import React, { FC } from 'react'
import { Globe } from '../UI'

export const Image: FC = () => {
  return (
    <Globe zIndex={'sm:z-50'}>
      <img className="absolute bottom-0" src="/prof.png" alt="Me" />
    </Globe>
  )
}
