export type User = {
  _id: string
  name?: string
  lastName?: string
  email: string
  phone?: string
  isActive: boolean
}

export type Pagination = {
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  totalCount: number
  totalPages: number
}

export type UsersQueryData = {
  users: User[]
  pagination: Pagination
}
