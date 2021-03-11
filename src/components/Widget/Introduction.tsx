import React from 'react'
import { NavFooter } from '../Nav'

const ColoredText = ({ children }) => {
  return <span className="text-custom">{children}</span>
}

export const Introduction = () => {
  return (
    <div className="space-y-10 text-4xl sm:text-5xl ">
      <p>Welcome to my slice🍕 of the internet</p>
      <p>
        I'am a <ColoredText>self taught</ColoredText> web developer. Mainly
        interested in <ColoredText>frontend </ColoredText>
        development, staying up to date with the latest and greatest tech as
        much as I can, but building simple <ColoredText>
          backend{' '}
        </ColoredText>{' '}
        is a lot of <ColoredText>fun </ColoredText> too!
      </p>
      <p>
        Love learning and building anything <ColoredText>React</ColoredText> and
        it’s my main jam at the moment! Right now I’m getting my hands dirty
        with <ColoredText>Next.js</ColoredText> and{' '}
        <ColoredText>MongoDB</ColoredText> to build{' '}
        <ColoredText>fullstack</ColoredText> apps.
      </p>
      <p>If you fancy a chat feel free to drop me a line.</p>
      <NavFooter />
    </div>
  )
}
