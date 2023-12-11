import { TechStack } from '@/components/techStack'
import { service } from 'http/axios/service'
import { QueryResultType } from 'utils/types'

export interface TagCountType {
  tag: string
  count: number
}

export interface TagOutputType {
  id: number
  content: string
  state?: boolean
  deletedAt?: Date
  createdAt?: Date
  createdBy?: number
  updatedAt?: Date
  updatedBy?: number
}

export interface ProjectDataProps {
  title: string
  description: string
  imgSrc: string
  href: string
  techStack: TechStack[]
}

/**
 * 查询所有标签
 */
export const getAllTag = async () => {
  const data = await service
    .get<QueryResultType<TagOutputType>>('/tag', { params: { limit: 1000 } })
    .then((res) => res.data)
  return data ? data?.items : []
}

/**
 * 查询所有项目
 */
export const getAllProject = async () => {
  const data = await service
    .get<QueryResultType<ProjectDataProps>>('/project', { params: { limit: 1000 } })
    .then((res) => res.data)
  return data ? data?.items : []
}

/**
 * 分组查询各个标签对应文章数量（只查询有标签的文章）
 */
export const countListArticleTag = async () => {
  return await service.get<TagCountType[]>('/article/countListArticleTag').then((res) => res.data)
}
