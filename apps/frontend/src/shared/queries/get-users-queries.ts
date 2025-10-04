import { API_BASE_URL } from '@/config/api'
import type { UsersQueryData } from '../types'

const queryKey = ['users']

export const getUsersQuery = () => ({
  queryKey,
  queryFn: async (): Promise<UsersQueryData> => {
    const response = await fetch(`${API_BASE_URL}/users`)

    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data = await response.json()

    return data
  },
  staleTime: 5 * 60 * 1000,
})
