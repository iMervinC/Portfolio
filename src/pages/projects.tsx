import React, { FC } from 'react'
import { PageWrap } from '@/components/UI'
import { Featured } from '@/components/Widget'

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="pt-40">
        <Featured />
        <div className="text-6xl h-64">
          <h1>Projects</h1>
        </div>
      </div>
    </PageWrap>
  )
}

export default projects
