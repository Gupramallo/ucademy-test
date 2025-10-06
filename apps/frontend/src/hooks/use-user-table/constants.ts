import { EditProfileModal, ProfileModal } from '@/components/organisms/modals'
import CreateProfileModal from '@/components/organisms/modals/create-profile-modal'
import WarningModal from '@/components/organisms/modals/warning-modal'

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
  modifyUser: 'MODIFY_USER',
  closeModal: 'CLOSE_MODAL',
} as const

export const MODALS = {
  [MODAL_TYPES.profile]: ProfileModal,
  [MODAL_TYPES.create]: CreateProfileModal,
  [MODAL_TYPES.edit]: EditProfileModal,
  [MODAL_TYPES.warning]: WarningModal,
}
