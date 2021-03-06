import React from 'react'

const ColoredText = ({ children }) => {
  return <span className="text-custom">{children}</span>
}

export const Introduction = () => {
  return (
    <div className="space-y-10 text-4xl sm:text-5xl ">
      <p>Welcome to my slice🍕 of the internet</p>
      <p>
        I'm mainly interested in <ColoredText>frontend </ColoredText>
        development staying up to date with the latest and greatest tech as much
        as I can, but building simple <ColoredText>backend </ColoredText> is a
        lot of <ColoredText>fun </ColoredText> too!
      </p>
      <p>
        Having a lot of enjoyment out of learning and building{' '}
        <ColoredText>React</ColoredText> app lately and I would say it’s my main
        jam at the moment! Right now I’m getting my hands dirty with{' '}
        <ColoredText>Next.js</ColoredText> and{' '}
        <ColoredText>MongoDB</ColoredText> to build{' '}
        <ColoredText>fullstack</ColoredText> apps and host it to Vercel
      </p>
    </div>
  )
}
