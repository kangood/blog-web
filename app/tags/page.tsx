import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import { genPageMetadata } from 'app/seo'
import { countListArticleTag } from 'http/services/api'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  // 调用 API 查询所有标签对应文章的数量
  const tags = await countListArticleTag()
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tags &&
            tags.map((item) => {
              return (
                <button key={item.tag}>
                  <div className="mb-2 mr-5 mt-2 bg-gray-300 dark:bg-zinc-700 p-1 px-2 rounded-lg divide-x-2 divide-black dark:divide-white">
                    <Tag text={item.tag} />
                    <Link
                      href={`/tags/${slug(item.tag)}`}
                      className="-ml-2 text-base font-semibold uppercase text-gray-600 dark:text-gray-300"
                      aria-label={`View posts tagged ${item.tag}`}
                    >
                      {` ${item.count}`}
                    </Link>
                  </div>
                </button>
              )
            })}
        </div>
      </div>
    </>
  )
}
