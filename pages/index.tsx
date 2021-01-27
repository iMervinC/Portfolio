import { FC, useState } from 'react'
import Hero from '../components/Hero/Hero'
import PageWarp from '../components/PageWarp'
import TextLoop from 'react-text-loop'

const Home: FC = () => {
  const [word, setWord] = useState('')

  const loopText = (str) => {
    let array = []
    const interval = 50
    str.split('').forEach((x, index) => {
      setTimeout(function () {
        array.push(x)
        setWord(array.join(''))
      }, index * interval)
    }, 5000)
  }

  return (
    <PageWarp title={'iMervinC | Home'}>
      <Hero />
      <div className="flex flex-col gap-10 text-5xl sm:text-6xl">
        <p>
          I've been learning{' '}
          <span className="text-custom">Web Development</span> since I got out
          of college just for fun and I'm still doing it today!
        </p>
        <p>
          I'm mainly interested in{' '}
          <span className="text-custom">frontend </span>
          development staying up to date with the latest and greatest tech as
          much as I can, but building simple{' '}
          <span className="text-custom">backend </span> is a lot of{' '}
          <span className="text-custom">fun </span> too!
        </p>
        <p>
          Having a lot of enjoyment out of learning and building{' '}
          <span className="text-custom">React</span> app lately and I would say
          it’s my main jam at the moment! Right now I’m getting my hands dirty
          with <span className="text-custom">Next.js</span> and{' '}
          <span className="text-custom">MongoDB</span> to build{' '}
          <span className="text-custom">fullstack</span> apps and to host it to
          Vercel
        </p>
        <p className="text-custom">
          Stay Bold &
          <br />
          Have a{' '}
          <TextLoop>
            <span>Be Beautiful</span>
            <span>Stay Calm</span>
            <span>Stay Thicc</span>
          </TextLoop>
        </p>
      </div>
    </PageWarp>
  )
}

export default Home
