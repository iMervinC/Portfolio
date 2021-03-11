import React, { FC } from 'react'
import { Globe, PageWrap } from '@/components/UI'

const blogs: FC = () => {
  return (
    <PageWrap title={'Blogs'}>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Globe fill1="#FF9F1C" fill2="#FFBF69">
          <h2
            className="text-6xl self-center text-center z-30"
            style={{ color: '#FF9F1C', WebkitTextStroke: '1px white' }}
          >
            Men At Work!
          </h2>
        </Globe>
      </div>
    </PageWrap>
  )
}

export default blogs
