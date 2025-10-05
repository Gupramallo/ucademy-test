import type { User } from '@/shared/types'

export type UserTableProps = {
  users: User[]
  isLoading?: boolean
  openProfileModal: (user: User) => void
}
