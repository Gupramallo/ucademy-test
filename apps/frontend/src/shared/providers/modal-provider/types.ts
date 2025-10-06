import type { ModalProps } from '@/components/organisms/modals/types'
import type { ModalType } from '@/hooks/use-user-table/types'
import type { User } from '@/shared/types'

export type ModalContextType = {
  openProfileModal: (user?: User) => void
  openEditModal: (user?: User) => void
  openCreateModal: () => void
  openWarningModal: (user?: User) => void
  modifySelectedUser: (user?: User) => void
  closeModal: () => void
  selectedUser?: User
  modalType: ModalType
  isOpen: boolean
  Modal: React.ComponentType<ModalProps>
}
