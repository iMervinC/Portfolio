import React, { FC } from 'react'
import { Globe, PageWrap } from '@/components/UI'

const contacts: FC = () => {
  return (
    <PageWrap title={'Contacts'}>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Globe fill1="#745C97" fill2="#39375B">
          <h2
            className="text-6xl self-center text-center z-30"
            style={{ color: '#39375B', WebkitTextStroke: '1px white' }}
          >
            Men At Work!
          </h2>
        </Globe>
      </div>
    </PageWrap>
  )
}

export default contacts
