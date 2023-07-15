import Image from 'next/image'

interface ItemsBlogProps {
  title: string
  text: string
  creator: string
  time: number
  image: string
}

const ItemBlog = ({ title, text, creator, time, image }: ItemsBlogProps) => {
  return (
    <div className="flex flex-col gap-4 rounded bg-gray-100 p-4">
      <Image
        src={`${image}`}
        height={0}
        width={1000}
        sizes="100vw"
        alt="image blog"
        className="rounded brightness-100"
      ></Image>
      <div className="flex flex-col gap-4">
        <a href="#" className="text-sky-600 underline hover:text-sky-700">
          Saiba Mais
        </a>
        <h2 className="font-semibold">{title}</h2>
        <p className="max-w-[50ch] overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {text}
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span>By {creator}</span>
          <div className="h-1 w-1 rounded-full bg-sky-600"></div>
          <span>{time} min read</span>
        </div>
      </div>
    </div>
  )
}

export default ItemBlog
