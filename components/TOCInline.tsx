import { Toc } from './remark-toc-headings'
export interface TOCInlineProps {
  toc: Toc
  topDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

/**
 * 生成内联目录
 * 排除这些字符串匹配的标题：(new RegExp('^(' + string + ')$', 'i')).
 * 如果传递一个数组，则数组将与管道连接：(new RegExp('^(' + array.join('|') + ')$', 'i')).
 */
const TOCInline = ({
  toc,
  topDepth = 1,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li
          style={{
            listStyleType: 'none',
            paddingLeft: `${(heading.depth - topDepth) * 2}rem`,
          }}
          key={heading.value}
          className="leading-normal"
        >
          <a href={heading.url} className="text-blue-600 dark:text-sky-500 no-underline">
            {heading.value}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      {asDisclosure ? (
        <details open className="bg-gray-200 dark:bg-zinc-800/95 rounded-lg py-2">
          <summary className="ml-3 text-lg lg:text-xl font-bold cursor-pointer">页面索引</summary>
          <div className="ml-2 -mb-6 -mt-4">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </div>
  )
}

export default TOCInline
