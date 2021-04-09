import React, { FC } from 'react'
import { PageWrap } from '@/components/UI'
import { Featured, Projects, TechStacks } from '@/components/Widget'

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="pt-40">
        <Featured />
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-7 gap-10">
          <Projects gridSpan="col-span-4 lg:col-span-3" />
          <TechStacks gridSpan="col-span-4" />
        </div>
      </div>
    </PageWrap>
  )
}

export default projects
