export interface PageMeta {
  currentPage: number
  itemCount: number
  perPage: number
  totalItems: number
  totalPages: number
}

export interface QueryResultType<T> {
  items: T[]
  meta: PageMeta
}

export interface ResponseResultType {
  error: string
  message: string[]
  statusCode: number
}
