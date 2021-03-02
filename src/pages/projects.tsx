import React, { FC } from 'react'
import { Globe, PageWrap } from '@/components/UI'

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Globe fill1="#2F2504" fill2="#594E36">
          <h2
            className="text-6xl self-center text-center z-30"
            style={{ color: '#2F2504', WebkitTextStroke: '1px white' }}
          >
            Men At Work!
          </h2>
        </Globe>
      </div>
    </PageWrap>
  )
}

export default projects
