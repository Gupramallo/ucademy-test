import { ProfileModal } from '@/components/organisms/modals'
import { MODAL_TYPES } from '@/hooks/use-user-table/constants'

export const MODAL_CONTEXT_DEFAULT_VALUES = {
  openProfileModal: () => {},
  openEditModal: () => {},
  openCreateModal: () => {},
  openWarningModal: () => {},
  modifySelectedUser: () => {},
  closeModal: () => {},
  selectedUser: undefined,
  modalType: MODAL_TYPES.profile,
  isOpen: false,
  Modal: ProfileModal,
}
