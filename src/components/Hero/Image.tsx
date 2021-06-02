import React, { FC } from 'react'
import { Globe } from '../UI'
import Image from 'next/image'

export const ProfileImage: FC = () => {
  return (
    <Globe zIndex={'sm:z-50'}>
      <Image
        src="/prof.png"
        className="absolute bottom-0"
        width={368}
        height={368}
        priority
        alt="Mervin"
      />
    </Globe>
  )
}
