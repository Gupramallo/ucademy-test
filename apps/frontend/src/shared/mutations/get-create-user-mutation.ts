import { API_BASE_URL } from '@/config/api'
import type { PropsWithQueryClient, User } from '../types'

export const getCreateUserMutation = ({
  queryClient,
}: PropsWithQueryClient) => ({
  mutationFn: async ({
    id,
    userData,
  }: {
    id: string
    userData: Partial<User>
  }) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })

    if (!response.ok) throw new Error('Failed to update user')

    return response.json()
  },
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
})
