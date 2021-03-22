import React, { FC } from 'react'
import { PageWrap, PrevButton, ProjNorm } from '@/components/UI'
import { Featured } from '@/components/Widget'

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="pt-40">
        <Featured />
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="col-span-3">
            <h2 className="text-5xl text-white">Projects</h2>
            <ProjNorm title="Proj" url="" source="" />
            <ProjNorm title="Proj" url="" source="" />
            <ProjNorm title="Proj" url="" source="" />
          </div>
          <div className="col-span-2">
            <h2 className="text-5xl text-white">My Tech Stack</h2>
          </div>
        </div>
      </div>
    </PageWrap>
  )
}

export default projects
