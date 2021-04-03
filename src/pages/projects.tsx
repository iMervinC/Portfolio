import React, { FC } from 'react'
import { PageWrap, PrevButton, ProjNorm } from '@/components/UI'
import { Featured } from '@/components/Widget'

const myStack = [
  'javascript',
  'typescript',
  'html',
  'css',
  'sass',
  'tailwindcss',
  'react',
  'nextjs',
  'react-query',
  'redux',
  'nodejs',
  'mongodb',
]

const currentlyHacking = [
  'typescript',
  'tailwindcss',
  'nextjs',
  'react-query',
  'mongodb',
]
const interestingTech = ['jest', 'graphql', 'apollo']

const projects: FC = () => {
  return (
    <PageWrap title={'Projects'}>
      <div className="pt-40">
        <Featured />
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-7 gap-10">
          <div className="col-span-4 lg:col-span-3">
            <h2 className="text-5xl text-white">Projects</h2>
            <ProjNorm title="Firegram" url="" source="" />
            <ProjNorm title="Firegram Firegram" url="" source="" />
            <ProjNorm title="Firegram" url="" source="" />
          </div>
          <div className="col-span-4">
            <TechStack title="My Tech Stack" techs={myStack} />
            <TechStack title="Currently Hacking" techs={currentlyHacking} sub />
            <TechStack title="Interesting Tech" techs={interestingTech} sub />
          </div>
        </div>
      </div>
    </PageWrap>
  )
}

const TechStack: FC<{
  title: string
  techs?: string[]
  sub?: boolean
}> = ({ title, techs, sub }) => {
  return (
    <>
      <h2 className={`text-white ${sub ? 'text-3xl mt-3' : 'text-4xl'}`}>
        {title}
      </h2>
      <div
        className={`flex flex-wrap gap-4 mt-5 border-solid border-white bg-gray-800 rounded-md p-4 w-fit ${
          sub ? 'border-2' : 'border-4'
        }`}
      >
        {techs?.map((tech, index) => (
          <img
            key={index}
            className={`inline w-auto ${sub ? 'h-9' : 'h-12'}`}
            src={`/logos/${tech}.svg`}
            alt={tech}
          />
        ))}
      </div>
    </>
  )
}

export default projects
