import { API_BASE_URL } from '@/config/api'
import type { UsersQueryData } from '../types'

export const getUsersQuery = ({
  page = 1,
  limit = 20,
}: {
  page?: number
  limit?: number
}) => ({
  queryKey: ['users', page, limit],
  queryFn: async (): Promise<UsersQueryData> => {
    const response = await fetch(
      `${API_BASE_URL}/users?page=${page}&limit=${limit}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data = await response.json()

    return data
  },
  staleTime: 5 * 60 * 1000,
})
