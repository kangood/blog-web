import { slug } from 'github-slugger'
import { allCoreContent } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { countListArticleTag } from 'http/services/api'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

// 这里不需要使用 generateStaticParams，数据就有了
// export const generateStaticParams = async () => {
//   // 调用 API 查询所有标签对应文章的数量
//   const tags = await countListArticleTag()
//   // 返回标签名称路径
//   const paths = tags.map((item) => ({
//     tag: item.tag,
//   }))
//   return paths
// }

export default async function TagPage({ params }: { params: { tag: string } }) {
  // 这里解码之后 中文 能点击查到了
  const tag = decodeURI(params.tag)
  // 将首字母大写并将空格转换为短横线
  // const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const title = tag
  const filteredPosts = allCoreContent(
    allBlogs.filter(
      (post) =>
        post.draft !== true && post.tags && post.tags.map((t) => slug(t, true)).includes(tag)
    )
  )
  // 异步查询标签数量集合，传给ListLayout
  const tagCountList = await countListArticleTag()
  return <ListLayout tagCountList={tagCountList} posts={filteredPosts} title={title} />
}
