import { FC, useEffect } from 'react'
import { PageWrap } from '@/components/UI'
import { title } from 'process'
import type { GetStaticProps } from 'next'
interface Blogs {
  id: number
  title: string
  cover_image: string
  description: string
  url: string
  tag_list?: string[]
}

const blogs: FC<{ articles: Blogs[] }> = ({ articles }) => {
  return (
    <PageWrap title={'Blogs'}>
      <div className="mx-auto w-fit pt-36">
        <h1 className="text-7xl text-center mb-6">Blog Posts</h1>
        <ul className="space-y-10">
          {articles.reverse().map((article) => (
            <li key={article.id}>
              <a className="blog-card group" href={article.url} target="_blank">
                <img
                  src={article.cover_image}
                  alt={title}
                  className="rounded-t-lg"
                />
                <div className="p-4 space-y-2">
                  <span className="space-x-2 flex">
                    {article.tag_list.map((tag) => (
                      <p className="bg-[#000000] px-3 py-1 rounded-lg border-2 border-white group-hover:text-white">
                        {tag}
                      </p>
                    ))}
                  </span>
                  <p className="text-center text-xl sm:text-2xl">
                    {article.title}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageWrap>
  )
}

export default blogs

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://dev.to/api/articles?username=imervinc').then(
    (res) => res.json()
  )

  return {
    revalidate: 10,
    props: {
      articles: res,
    },
  }
}
