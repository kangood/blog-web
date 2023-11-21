import { service } from 'http/axios/service'
import { QueryResultType } from 'utils/types'

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

/**
 * 查询所有标签
 */
export const getAllTag = async () => {
  const data = await service
    .get<QueryResultType<TagOutputType>>('/tag', { params: { limit: 1000 } })
    .then((res) => res.data)
  return data ? data?.items : []
}
