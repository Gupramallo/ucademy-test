import { ProfileModal } from '@/components/organisms/modals'

export const MODAL_TYPES = {
  profile: 'profile',
  edit: 'edit',
  create: 'create',
  warning: 'warning',
} as const

export const INITIAL_MODAL_STATE = {
  isOpen: false,
  type: MODAL_TYPES.profile,
  selectedUser: undefined,
}

export const MODAL_ACTIONS = {
  openProfile: 'OPEN_PROFILE_MODAL',
  openEdit: 'OPEN_EDIT_MODAL',
  openCreate: 'OPEN_CREATE_MODAL',
  openWarning: 'OPEN_WARNING_MODAL',
  closeModal: 'CLOSE_MODAL',
} as const

export const MODALS = {
  [MODAL_TYPES.profile]: ProfileModal,
  [MODAL_TYPES.create]: ProfileModal,
  [MODAL_TYPES.edit]: ProfileModal,
  [MODAL_TYPES.warning]: ProfileModal,
}
