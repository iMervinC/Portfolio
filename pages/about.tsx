import React, { FC } from 'react'
import PageWarp from '../components/PageWarp'

const about: FC = () => {
  return (
    <PageWarp title={'About'}>
      <h1 className="text-custom-offwhite">About</h1>
    </PageWarp>
  )
}

export default about
