import { PrevButton } from '@/components/UI'

const ProjNorm = ({ title, url, source }) => {
  return (
    <div className="flex flex-col md:flex-row project-card-2 items-center mt-5 min-w-fit">
      <h4 className="text-3xl w-full">{title}</h4>
      <div className="flex  space-x-5 text-custom-offwhite sm:ml-auto mt-2 sm:mt-0">
        <PrevButton link={url} type="demo" />
        <PrevButton link={source} type="code" />
      </div>
    </div>
  )
}

export { ProjNorm }
