import { API_BASE_URL } from '@/config/api'
import type { PropsWithQueryClient, User } from '../types'
import { DUPLICATED_EMAIL_BACKEND_CODE, HEADERS, USER_KEY } from '../constants'

export const getCreateUserMutation = ({
  queryClient,
}: PropsWithQueryClient) => ({
  mutationFn: async (userData: Partial<User>) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ ...userData, isActive: false }),
    })

    if (!response.ok) {
      const errorData = await response.json()

      if (response.status === DUPLICATED_EMAIL_BACKEND_CODE) {
        throw new Error('El email ya está en uso')
      }

      throw new Error(errorData.message)
    }

    return response.json()
  },
  onSuccess: () => queryClient.invalidateQueries({ queryKey: [USER_KEY] }),
})
