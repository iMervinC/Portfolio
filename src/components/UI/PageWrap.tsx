import React, { FC } from 'react'
import Head from 'next/head'

interface Layout {
  title: string
}

export const PageWrap: FC<Layout> = ({ title, children }) => {
  return (
    <div className="bg-black text-custom-offwhite font-bold contain">
      <Head>
        <title>{title} | iMervinC</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="mb-32">{children}</main>
    </div>
  )
}
