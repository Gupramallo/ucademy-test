import type { UserFormData } from '@/components/organisms/modals/types'
import { getCreateUserMutation } from '@/shared/mutations/get-edit-user-mutation'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import type { User } from '@/shared/types'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export const useEditUserForm = () => {
  const { closeModal, openProfileModal, selectedUser } = useModalProvider()
  const queryClient = useQueryClient()
  const updateUser = useMutation(getCreateUserMutation({ queryClient }))
  const isPending = updateUser.isPending
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: selectedUser ?? {
      name: '',
      lastName: '',
      email: '',
      phone: '',
    },
    mode: 'onBlur',
  })

  const onSubmit = async (data: UserFormData) => {
    if (!selectedUser) return

    try {
      await updateUser.mutateAsync({
        id: selectedUser._id,
        userData: data,
      })

      openProfileModal({ ...selectedUser, ...data })
    } catch (error) {
      console.error('Error al actualizar usuario:', error)
    }
  }

  const handleCancel = () => openProfileModal(selectedUser as User)

  return {
    closeModal,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleCancel,
    isPending,
  }
}
