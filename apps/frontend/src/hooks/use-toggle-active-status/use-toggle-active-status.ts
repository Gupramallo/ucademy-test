import { getEditUserMutation } from '@/shared/mutations/get-edit-user-mutation'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useToggleActiveStatus = () => {
  const {
    closeModal,
    openEditModal,
    openWarningModal,
    selectedUser,
    modifySelectedUser,
  } = useModalProvider()
  const queryClient = useQueryClient()
  const updateUser = useMutation(getEditUserMutation({ queryClient }))

  const onChange = async () => {
    if (!selectedUser) return

    if (selectedUser?.isActive) {
      openWarningModal(selectedUser)

      return
    }

    try {
      await updateUser.mutateAsync({
        id: selectedUser?._id,
        userData: {
          isActive: true,
        },
      })

      modifySelectedUser({ ...selectedUser, isActive: true })
    } catch (error) {
      console.error('Error al actualizar usuario:', error)
    }
  }

  return {
    closeModal,
    onChange,
    openEditModal,
    selectedUser,
  }
}
