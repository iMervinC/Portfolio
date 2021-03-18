import React, { FC } from 'react'
import { PageWrap } from '@/components/UI'
import { Featured } from '@/components/Widget'

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="pt-40">
        <Featured />
        <div className="mt-20">
          <h1 className="text-5xl text-white">Projects</h1>
          <div className="grid grid-cols-2"></div>
        </div>
      </div>
    </PageWrap>
  )
}

export default projects
