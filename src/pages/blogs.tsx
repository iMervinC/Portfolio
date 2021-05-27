import { FC, useEffect } from 'react'
import { PageWrap } from '@/components/UI'
import axios from 'axios'
import { title } from 'process'

interface Blogs {
  id: number
  title: string
  cover_image: string
  description: string
  url: string
}

const blogs: FC<{ blogs: Blogs[] }> = ({ blogs }) => {
  return (
    <PageWrap title={'Blogs'}>
      <div className="mx-auto w-fit pt-36">
        <h1 className="text-7xl text-center mb-6">Blog Posts</h1>
        <ul className="space-y-10">
          {blogs.reverse().map((article) => (
            <li key={article.id}>
              <a className="blog-card" href={article.url} target="_blank">
                <img
                  src={article.cover_image}
                  alt={title}
                  className="rounded-t-lg"
                />
                <span className="block text-center text-xl sm:text-2xl p-4">
                  {article.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageWrap>
  )
}

export default blogs

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    'https://dev.to/api/articles?username=imervinc'
  )

  return {
    props: {
      blogs: data,
    },
  }
}
