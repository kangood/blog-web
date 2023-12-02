import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text, true)}`}
      className="bg-[#dbeafe] text-blue-800 text-xs font-medium mr-3 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 mb-3 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
