import React, { FC } from 'react'
import { Globe, PageWrap } from '@/components/UI'

const contacts: FC = () => {
  return (
    <PageWrap title={'Contacts'}>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <h1 className="text-4xl sm:text-7xl uppercase">Contact Me!</h1>
        <h2 className="text-custom sm:text-6xl mt-5">
          Drop me a line if you fancy a chat
        </h2>
        <p className="sm:text-5xl hover:text-custom mt-16">
          <a href="mailto:itorma.mervin@gmail.com">itorma.mervin@gmail.com</a>
        </p>
      </div>
    </PageWrap>
  )
}

export default contacts
