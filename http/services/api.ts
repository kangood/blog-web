import { service } from 'http/axios/service'

export interface TagCountType {
  tag: string
  count: number
}

/**
 * 分组查询各个分类对应文章数量
 */
export const countListArticleTag = async () => {
  return await service.get<TagCountType[]>('/article/countListArticleTag').then((res) => res.data)
}
