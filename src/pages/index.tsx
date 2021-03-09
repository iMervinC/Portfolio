import { FC } from 'react'
import { Hero } from '@/components/Hero'
import { PageWrap } from '@/components/UI'
import { Introduction, Featured } from '@/components/Widget'

const Home: FC = () => {
  return (
    <PageWrap title={'Home'}>
      <Hero />
      <Introduction />
    </PageWrap>
  )
}

export default Home
