import { getEditUserMutation } from '@/shared/mutations/get-edit-user-mutation'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useWarningUserModal = () => {
  const { closeModal, selectedUser, modifySelectedUser, openProfileModal } =
    useModalProvider()
  const queryClient = useQueryClient()
  const updateUser = useMutation(getEditUserMutation({ queryClient }))

  const onClick = async () => {
    if (!selectedUser) return

    try {
      await updateUser.mutateAsync({
        id: selectedUser?._id,
        userData: {
          isActive: false,
        },
      })

      const updatedUser = { ...selectedUser, isActive: false }

      modifySelectedUser(updatedUser)
      openProfileModal(updatedUser)
    } catch (error) {
      console.error('Error al actualizar usuario:', error)
    }
  }

  return {
    closeModal,
    onClick,
    openProfileModal,
    selectedUser,
  }
}
