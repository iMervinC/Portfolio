import { FC } from 'react'
import Hero from '../components/Hero/Hero'
import PageWarp from '../components/PageWarp'

const Home: FC = () => {
  return (
    <PageWarp title={'Home'}>
      <Hero />
      <div className="flex flex-col gap-10 text-6xl">
        <p>
          I've been learning Web Development since I got out of college just for
          fun and I'm still doing it today!
        </p>
        <p>
          I'm mainly interested in frontend development staying up to date with
          the latest and greatest tech as much as I can, but building simple
          backend is a lot of fun too!
        </p>
        <p>
          Having a lot of enjoyment out of learning and building React app
          lately and I would say it’s my main jam at the moment! Right now I’m
          getting my hands dirty with Next.js and MongoDB to build fullstack
          apps and to host it to Vercel
        </p>
      </div>
    </PageWarp>
  )
}

export default Home
