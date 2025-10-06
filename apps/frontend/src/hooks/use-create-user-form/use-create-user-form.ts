import type { UserFormData } from '@/components/organisms/modals/types'
import { FORM_DEFAULT_VALUES } from '@/shared/constants'
import { getCreateUserMutation } from '@/shared/mutations/get-create-user-mutation'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export const useCreateUserForm = () => {
  const { closeModal } = useModalProvider()
  const queryClient = useQueryClient()
  const createUser = useMutation(getCreateUserMutation({ queryClient }))
  const isPending = createUser.isPending
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: FORM_DEFAULT_VALUES,
    mode: 'onBlur',
  })

  const onSubmit = async (userData: UserFormData) => {
    try {
      await createUser.mutateAsync(userData)

      closeModal()
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido'

      if (errorMessage.includes('email')) {
        setError('email', {
          type: 'server',
          message: errorMessage,
        })
      }
    }
  }

  return {
    closeModal,
    register,
    handleSubmit,
    setError,
    errors,
    onSubmit,
    isPending,
  }
}
