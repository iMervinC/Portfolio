import React, { FC } from 'react'
import { PageWrap } from '@/components/UI'
import { Featured } from '@/components/Widget'

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="pt-40">
        <Featured />
      </div>
    </PageWrap>
  )
}

export default projects
