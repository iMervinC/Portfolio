import { FC } from 'react'
import { PageWrap } from '@/components/UI'
import { motion } from 'framer-motion'

const contacts: FC = () => {
  return (
    <PageWrap title={'Contacts'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen w-full flex items-center justify-center flex-col"
      >
        <h1 className="text-5xl sm:text-7xl uppercase text-center">
          Contact Me!
        </h1>
        <h2 className="text-custom text-4xl sm:text-6xl mt-5 text-center">
          Drop me a line if you fancy a chat
        </h2>
        <p className="text-2xl sm:text-5xl hover:text-custom mt-16">
          <a rel="noreferrer" href="mailto:itorma.mervin@gmail.com">
            itorma.mervin@gmail.com
          </a>
        </p>
        <ul className="flex gap-10 gap-y-5 mt-10 flex-wrap justify-center">
          <li>
            <a
              href="https://github.com/iMervinC"
              rel="noreferrer"
              target="_blank"
              className="socials"
            >
              <svg
                className="w-10 fill-current"
                viewBox="0 0 81 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.5745 0.857666C18.7145 0.857666 0.983643 18.5885 0.983643 40.4485C0.983643 57.9365 12.3994 72.7527 27.9443 78.0963C29.8874 78.3392 30.6161 77.1247 30.6161 76.1532C30.6161 75.1816 30.6161 72.7527 30.6161 69.3523C19.6861 71.7812 17.2572 64.0087 17.2572 64.0087C15.557 59.3939 12.8852 58.1794 12.8852 58.1794C9.24186 55.7505 13.1281 55.7505 13.1281 55.7505C17.0143 55.9934 19.2003 59.8796 19.2003 59.8796C22.8436 65.9519 28.4301 64.2516 30.6161 63.2801C30.859 60.6083 32.0734 58.9081 33.045 57.9365C24.301 56.965 15.0712 53.5645 15.0712 38.2625C15.0712 33.8905 16.5285 30.4901 19.2003 27.5754C18.9574 26.8468 17.5001 22.7177 19.6861 17.3741C19.6861 17.3741 23.0865 16.4025 30.6161 21.5032C33.7736 20.5317 37.1741 20.2888 40.5745 20.2888C43.975 20.2888 47.3754 20.7745 50.533 21.5032C58.0625 16.4025 61.463 17.3741 61.463 17.3741C63.649 22.7177 62.1916 26.8468 61.9487 27.8183C64.3776 30.4901 66.0778 34.1334 66.0778 38.5054C66.0778 53.8074 56.8481 56.965 48.1041 57.9365C49.5614 59.151 50.7758 61.5799 50.7758 65.2232C50.7758 70.5667 50.7758 74.6959 50.7758 76.1532C50.7758 77.1247 51.5045 78.3392 53.4476 78.0963C69.2354 72.7527 80.4083 57.9365 80.4083 40.4485C80.1654 18.5885 62.4345 0.857666 40.5745 0.857666Z"
                />
              </svg>
              <p>Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/iMervinC"
              rel="noreferrer"
              target="_blank"
              className="socials"
            >
              <svg
                className="w-10 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <p>Twitter</p>
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/imervinc"
              rel="noreferrer"
              target="_blank"
              className="group socials"
            >
              <div className="devto-icon ">DEV</div>
              <p>Dev.to</p>
            </a>
          </li>
        </ul>
        <div className="mt-10">
          <h3 className="text-center text-3xl mb-2 text-custom">Download My</h3>
          <a
            rel="noreferrer"
            href="/ItormaMervinChistianT-Resume.pdf"
            className="text-xl sm:text-2xl border-2 border-solid border-white hover:border-custom focus:outline-none px-10 py-2 rounded-lg fancy-6 w-fit mx-auto block"
            download
          >
            Resumé
          </a>
        </div>
      </motion.div>
    </PageWrap>
  )
}

export default contacts
